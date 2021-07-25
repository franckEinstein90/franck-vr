import * as React from "react"
import { setCameras } from "../scene/camera";
import { newScene } from "../scene/newScene";
import { getCanvas } from "../VR/vrCanvas";

import { gear }       from "../ThreeStack/Mechanics/Gears/gears"; 
import { gearSystem } from "../ThreeStack/Mechanics/Gears/gearSystem"; 

import BuildNow from "../UI/Buttons/BuildNow" ; 
import Splash1 from "../business/Splash1"; 

import * as THREE from 'three';
import styles from "./ScreenScene.module.scss"; 

const gearTextureUrl = "https://3.bp.blogspot.com/-aVndKMqhFH0/TuLlCNWfxAI/AAAAAAAAAg8/vpTDf96sr3A/s1600/Metal+armour+plating.jpg";    

const _setLights = ( scene )=> {

    const directionalLight = new THREE.DirectionalLight("#fff", 2);
    directionalLight.position.set( 20, 50, -20 );
   
    const ambientLight = new THREE.AmbientLight("#ffffff", 1);
    ambientLight.position.set(0, 20, 20);

    scene.add( directionalLight );
    scene.add( ambientLight );
    return ; 
} ; 

const _setRenderer = ( canvas )=>{
    const renderer = new THREE.WebGLRenderer( { 
            canvas      : canvas, 
            antialias   : true, 
            alpha : true
        } );
    renderer.setSize( canvas.clientWidth, canvas.clientHeight ) ;  
    renderer.setPixelRatio( window.devicePixelRatio ) ;
    return renderer;  
} ; 

const _setUpGearSystem = ( scene, gearTexture )=> {
  const gridHelper = new THREE.GridHelper( 200, 20, 0x0000ff, 0x808080 );
  const system = gearSystem( scene, gridHelper ) ;
  const driverGear = gear({radius : 25}, gearTexture, scene) ;
  driverGear.translateZ(5);
  system.driver(driverGear)  ;
  system.translateX(100); 

  const g = gear( {radius:35}, gearTexture, scene ) ; 
  system.addGear(g);
  g.translateX( 200 ) ;

  const g2 = gear( {radius:35}, gearTexture, scene );
  system.addGear(g2); 
  return system ;

} ;
 
export default class ScreenScene extends React.Component {

  constructor( props ){
    super(props); 
    this.mounted = false ; 
    this.state = {
      textureLoaded : false
    } 

    this.canvasHtmlId  = "mainCanvas" ;     
    this.animate       =   this.animate.bind( this ) ;  
    this.onresize      = this.onresize.bind( this ) ; 
  }

  componentDidMount(){
    if( this.mounted ) return ;
    this.mounted = true;  

    //prep 3js stack
  /*  this.scene    = newScene( 0x000000 ) ;  
    this.canvas   = getCanvas( this.canvasHtmlId ) ;  
    this.camera   = setCameras( this.canvas, 1000, {x : 0, y : 0, z : 230} ); 
    this.renderer = _setRenderer( this.canvas ) 
    _setLights( this.scene ); 

    const loader = new THREE.TextureLoader();	
    const onLoadNucleusTexture = ( texture )=>{
      this.gearSystem = _setUpGearSystem( this.scene, texture ) ;
      this.setState({textureLoaded : true}) ; 
      this.onresize();
      this.animate();
    }
    loader.load( gearTextureUrl, onLoadNucleusTexture ); 

    window.addEventListener('resize', ()=>{
        this.onresize();
    })*/
  }

  onresize(){  
    this.camera.aspect = this.canvas.clientWidth / this.canvas.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
  }

  animate(){ 

/*    if(this.gearSystem !== undefined) this.gearSystem.next() ; 
    this.renderer.render( this.scene, this.camera );  
    requestAnimationFrame(this.animate);*/

  }

  render(){
    return(   
      <> 
        <canvas id={this.canvasHtmlId} className={styles.canvas}></canvas>
        <Splash1><BuildNow action={this.props.buyNowAction} /></Splash1>
      </>
    )}
}