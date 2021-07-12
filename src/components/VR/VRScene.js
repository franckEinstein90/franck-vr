import React, {useContext} from 'react';

import * as THREE from 'three';
import { newScene } from "../scene/newScene" ; 
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; 
import { TubePainter } from 'three/examples/jsm/misc/TubePainter.js';
import { setFloor } from "../ThreeStack/floor" ; 
import { setCameras } from "../scene/camera" ;
import { getCanvas } from "./vrCanvas" ; 
import { leftController } from "../controllers/controllerMeshRight" ; 
import styles from "./VRScene.module.css";
 
export default class VRScreen extends React.Component {

    constructor( props ) {

        super(props);  
        this.canvasHtmlId       =   "mainCanvas" ; 
        this.animate        =   this.animate.bind( this ) ;
        this.renderScene    =   this.renderScene.bind( this ) ;
        this.onSelectStart  =   this.onSelectStart( this ) ; 

    }; 

    setControls(){
        this.controls = new OrbitControls( this.camera, this.canvas );
        this.controls.target.set( 0, 1.6, 0 );
        this.controls.update();
    }

    addPainters(){
        this.painter1 = new TubePainter();
        this.scene.add( this.painter1.mesh );
		this.painter2 = new TubePainter();
		this.scene.add( this.painter2.mesh );
    }

    onSelectStart(){

    }


    setControllers(){
        this.controller1 = this.renderer.xr.getController( 0 );
        this.controller1.addEventListener( 'selectstart', this.onSelectStart );
       /* this.controller1.addEventListener( 'selectend', onSelectEnd );
        this.controller1.addEventListener( 'squeezestart', onSqueezeStart );
        this.controller1.addEventListener( 'squeezeend', onSqueezeEnd );*/
        this.controller1.userData.painter = this.painter1;
        this.scene.add( this.controller1 );

        this.leftController = this.renderer.xr.getController( 1 );
        this.leftController.addEventListener( 'selectstart', this.onSelectStart );
       /* this.controller2.addEventListener( 'selectend', onSelectEnd );
        this.controller2.addEventListener( 'squeezestart', onSqueezeStart );
        this.controller2.addEventListener( 'squeezeend', onSqueezeEnd );*/
        this.leftController.userData.painter = this.painter2;
        this.scene.add( this.leftController );
        
        const geometry = new THREE.CylinderBufferGeometry( 0.01, 0.02, 0.08, 5 );
        geometry.rotateX( - Math.PI / 2 );
        const material = new THREE.MeshStandardMaterial( { flatShading: true } );
        const mesh = new THREE.Mesh( geometry, material );

        const pivot = new THREE.Mesh( new THREE.IcosahedronBufferGeometry( 0.01, 3 ) );
        pivot.name = 'pivot';
        pivot.position.z = - 0.05;
        mesh.add( pivot );

        this.controller1.add( mesh.clone() );
        this.leftController.add( leftController() );

    }


    componentDidMount(){
        debugger;
        this.scene  = newScene() ;  
        this.canvas = getCanvas( this.canvasHtmlId ) ;  
        this.camera = setCameras( this.canvas ); 
    //    this.setControls();

        setFloor( this.scene ) ; 
    //    setFrontWall( this.scene ) ; 
    //    screen( this.scene ) ; 

     //   const light = new THREE.DirectionalLight( 0xffffff, 0.5 );
      //  light.position.set( 0, 4, 0 );
       // this.scene.add( light );
       // this.addPainters(); 
        this.renderer = new THREE.WebGLRenderer( { 
            canvas      : this.canvas, 
            antialias   : true 
        } );
        this.renderer.setPixelRatio( window.devicePixelRatio );
        this.renderer.setSize( this.canvas.clientWidth, this.canvas.clientHeight );
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.renderer.xr.enabled = true;
        //this.setControllers(); 
        document.body.appendChild( VRButton.createButton( this.renderer ) );
        this.animate();
    }

    animate(){
        this.renderer.setAnimationLoop(this.renderScene); 
    }

    renderScene(){
        this.renderer.render(this.scene, this.camera); 
    }

    render(){
        return (
            <>
                <canvas id={this.canvasHtmlId} className={styles.canvas}></canvas>
            </>
        )
    }
}