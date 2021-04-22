import React, {useContext} from 'react';

import * as THREE from 'three';
import { newScene } from "./scene/newScene" ; 
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';
import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader.js'; 
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; 
import { TubePainter } from 'three/examples/jsm/misc/TubePainter.js';
import { LoadingManager } from 'three';
import { setFloor } from "./architecture/floor" ; 
import { setFrontWall } from "./architecture/frontWall" ;
import { screen } from "./screen"; 
import { setCameras } from "./camera" ;
import { getCanvas } from "./vrCanvas" ; 
import { leftController } from "./controllers/controllerMeshRight" ; 
import styles from "./Scene.module.css";
 
export default class Scene extends React.Component {

    constructor( props ) {

        super(props);  
        this.canvasHtmlId       =   "mainCanvas" ; 
        this.animate        =   this.animate.bind( this ) ;
        this.renderScene    =   this.renderScene.bind( this ) ;

    }; 

    componentDidMount(){

       this.scene  = newScene() ;  
       this.canvas = getCanvas( this.canvasHtmlId ) ;  
       this.camera = setCameras( this.canvas ); 
       setFloor( this.scene ) ; 
       this.renderer = new THREE.WebGLRenderer( { 
            canvas      : this.canvas, 
            antialias   : true 
        } );
        this.renderer.setPixelRatio( window.devicePixelRatio );
        this.renderer.setSize( this.canvas.clientWidth, this.canvas.clientHeight );
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.renderer.xr.enabled = true;

       // document.body.appendChild( VRButton.createButton( this.renderer ) );
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