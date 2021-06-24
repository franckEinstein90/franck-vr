import * as React from "react"
import { setCameras } from "../camera";
import { newScene } from "../scene/newScene";
import { getCanvas } from "../vrCanvas";

import * as THREE from 'three';
import styles from "./BuildLab.module.scss" ; 
import { line } from "../ThreeStack/BasicShapes/lines";
import { BuildItEditor } from "../UI/BuildItEditor/buildItEditor";


export class BuildLab extends React.Component {
  
  constructor( props ) {
    super( props ) ; 
    this.mounted = false;
    this.canvasHtmlId   = "buildCanvas" ;     
    this.animate   =   this.animate.bind( this ) ;  
    this.onresize = this.onresize.bind( this ) ; 
  }

  componentDidMount(){

    if( this.mounted ) return ;
    this.mounted = true;
    
    this.canvas = getCanvas( this.canvasHtmlId ) ;  
    this.editor = new BuildItEditor( this.canvas ) ;  

    this.renderer = new THREE.WebGLRenderer( { 
          canvas      : this.canvas, 
          antialias   : true, 
          alpha : true
    } );    

      this.renderer.setSize( this.canvas.clientWidth, this.canvas.clientHeight );  
      this.renderer.setPixelRatio( window.devicePixelRatio );    

      const signals = this.editor.signals ; 
      signals.get('rendererCreated').dispatch( this.renderer )  ;

       
      const l1 = line( new THREE.Vector3(0, -10, 10), new THREE.Vector3(550, -10, 10));
      this.editor.scene.add(l1);
    
      this.onresize();
      this.animate(); 
      window.addEventListener('resize', ()=>{
        this.onresize();
      })
 }

  onresize(){  
    this.editor.viewportCamera.aspect = this.canvas.clientWidth / this.canvas.clientHeight;
    this.editor.viewportCamera.updateProjectionMatrix();
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
  }



  animate(){ 
  
    this.renderer.render(this.editor.scene, this.editor.viewportCamera );  
    requestAnimationFrame(this.animate);

  }



  render(){
      return (
        <>
        <canvas id={this.canvasHtmlId} className={styles.canvas}></canvas>
        <div style={{color:'white'}}>BuildLab</div>
        </>
      )
  }
}