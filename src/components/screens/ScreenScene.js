import * as React from "react"
import { setCameras } from "../camera";
import { newScene } from "../scene/newScene";
import { getCanvas } from "../vrCanvas";
import * as Shapes from "../ThreeStack/BasicShapes/ball" ;
import * as Gears from "../ThreeStack/Mechanics/Gears/gears"; 

import BuyNow from "../UI/Buttons/BuyNow";
import Splash1 from "../business/Splash1"; 

import * as THREE from 'three';
import styles from "./ScreenScene.module.scss"; 
import { line } from "../ThreeStack/BasicShapes/lines";



export default class ScreenScene extends React.Component {


  constructor( props ){
    super(props); 
    this.mounted = false ; 
    this.state = {
      textureLoaded : false
    } 
    this.canvasHtmlId   = "mainCanvas" ;     
    this.animate   =   this.animate.bind( this ) ;  
    this.onresize = this.onresize.bind( this ) ; 
 }

  componentDidMount(){
    if( this.mounted ) return ;
    this.mounted = true;  
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

      this.gearSystem = Gears.gearSystem( this.scene ) ;
      const driverGear = Gears.gear({radius : 25}, texture, this.scene) ;
      driverGear.translateZ(5);
      this.gearSystem.driver(driverGear)  ;

      this.gearSystem.translateX(100); 

      const g = Gears.gear({radius:35}, texture, this.scene); 
      this.gearSystem.addGear(g); 
      g.translateX( 200 );

      const g2 = Gears.gear({radius:35}, texture, this.scene);
      this.gearSystem.addGear(g2); 

      this.setState({textureLoaded : true}) ; 
      this.onresize();
      this.animate();
    }
    const gearTextureUrl = "https://3.bp.blogspot.com/-aVndKMqhFH0/TuLlCNWfxAI/AAAAAAAAAg8/vpTDf96sr3A/s1600/Metal+armour+plating.jpg";    

    const l1 = line( new THREE.Vector3(0, -10, 10), new THREE.Vector3(550, -10, 10));
  //  this.scene.add(l1);

    const l2 = line( new THREE.Vector3(0, 0, 10), new THREE.Vector3(0, 50, 10));
   // this.scene.add(l2);

    const l3 = line( new THREE.Vector3(-300, 56, 10), new THREE.Vector3(0, 56, 10));
  //  this.scene.add(l3);

    loader.load( gearTextureUrl, onLoadNucleusTexture ); 
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
  
    if(this.gearSystem !== undefined) this.gearSystem.run() ; 
    this.renderer.render(this.scene, this.camera);  
    requestAnimationFrame(this.animate);

  }


  render(){
    return(   
      <> 
        <canvas id={this.canvasHtmlId} className={styles.canvas}></canvas>
        <Splash1><BuyNow action={this.props.buyNowAction} /></Splash1>
      </>
    )}
}