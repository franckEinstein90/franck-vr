import * as React from "react"
import { setCameras } from "../camera";
import { newScene } from "../scene/newScene";
import { getCanvas } from "../vrCanvas";
import * as Shapes from "../ThreeStack/BasicShapes/ball" ;

import Splash1 from "../business/Splash1"; 
import * as THREE from 'three';
import styles from "./ScreenScene.module.scss"; 

export default class ScreenScene extends React.Component {

  constructor( props ){
    super(props); 
    this.state = {
      textureLoaded : false
    } 
    this.canvasHtmlId   = "mainCanvas" ;     
    this.animate   =   this.animate.bind( this ) ;  
    this.onresize = this.onresize.bind( this ) ; 
 }

  componentDidMount(){

    this.scene  = newScene( 0x000000 ) ;  
    this.canvas = getCanvas( this.canvasHtmlId ) ;  
    this.camera = setCameras( this.canvas, 1000, {x : 0, y : 0, z : 230} ); 
    this.renderer = new THREE.WebGLRenderer( { 
            canvas      : this.canvas, 
            antialias   : true, 
            alpha : true
        } );
    this.renderer.setSize( this.canvas.clientWidth, this.canvas.clientHeight );  
    this.renderer.setPixelRatio( window.devicePixelRatio ); 
   
    const directionalLight = new THREE.DirectionalLight("#fff", 2);
    directionalLight.position.set( 20, 50, -20 );
    this.scene.add(directionalLight);
  
    let ambientLight = new THREE.AmbientLight("#ffffff", 1);
    ambientLight.position.set(0, 20, 20);
    this.scene.add(ambientLight);

    const loader = new THREE.TextureLoader();

    const onLoadNucleusTexture = (texture)=>{
      this.nucleus = Shapes.torus({radius : 30}, texture) ;
      this.nucleus.rotateZ(90);
      this.scene.add(this.nucleus);

      this.gear2= Shapes.torus({radius:15}, texture); 
      this.gear2.scale.z = 0.5;
      this.gear2.translateX(35);
      this.gear2.translateZ(20);
      this.scene.add(this.gear2); 

      this.setState({textureLoaded : true}) ; 
      this.onresize();
      this.animate();
    }

    loader.load(
      "https://3.bp.blogspot.com/-aVndKMqhFH0/TuLlCNWfxAI/AAAAAAAAAg8/vpTDf96sr3A/s1600/Metal+armour+plating.jpg",
      onLoadNucleusTexture
    )

    window.addEventListener('resize', ()=>{
        this.onresize();
    })
  }

  onresize(){  
    this.camera.aspect = this.canvas.clientWidth / this.canvas.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
  }



  animate(){ 

  
    if(this.nucleus !== undefined){
        this.nucleus.geometry.verticesNeedUpdate = true;
        this.nucleus.geometry.normalsNeedUpdate = true;
        this.nucleus.geometry.computeVertexNormals();
        this.nucleus.geometry.computeFaceNormals();
        //this.nucleus.translateX(20);
        this.nucleus.rotation.z += 0.052;
        this.gear2.rotation.z -= 0.052;
    }

      this.renderer.render(this.scene, this.camera);  
      requestAnimationFrame(this.animate);
  }

  render(){
    return(   
      <> 
        <canvas id={this.canvasHtmlId} className={styles.canvas}></canvas>
        <Splash1/>
      </>
    )}
}