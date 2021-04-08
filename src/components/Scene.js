import React, {useContext} from 'react';

import * as THREE from 'three'; 
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';
import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader.js'; 
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; 
import { TubePainter } from 'three/examples/jsm/misc/TubePainter.js';
import { LoadingManager } from 'three';
import { setFloor } from "./architecture/floor" ; 
import { setFrontWall } from "./architecture/frontWall" ;
import { screen } from "./screen"; 

export default class Scene extends React.Component {

    constructor( props ) {
        super(props);  
        this.animate        =  this.animate.bind( this );
        this.renderScene    =  this.renderScene.bind( this );
        this.onSelectStart  = this.onSelectStart( this ); 

    }
    setControls(){
        this.controls = new OrbitControls( this.camera, document.body );
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

        this.controller2 = this.renderer.xr.getController( 1 );
        this.controller2.addEventListener( 'selectstart', this.onSelectStart );
       /* this.controller2.addEventListener( 'selectend', onSelectEnd );
        this.controller2.addEventListener( 'squeezestart', onSqueezeStart );
        this.controller2.addEventListener( 'squeezeend', onSqueezeEnd );*/
        this.controller2.userData.painter = this.painter2;
        this.scene.add( this.controller2 );
        
        const geometry = new THREE.CylinderBufferGeometry( 0.01, 0.02, 0.08, 5 );
        geometry.rotateX( - Math.PI / 2 );
        const material = new THREE.MeshStandardMaterial( { flatShading: true } );
        const mesh = new THREE.Mesh( geometry, material );

        const pivot = new THREE.Mesh( new THREE.IcosahedronBufferGeometry( 0.01, 3 ) );
        pivot.name = 'pivot';
        pivot.position.z = - 0.05;
        mesh.add( pivot );

        this.controller1.add( mesh.clone() );
        this.controller2.add( mesh.clone() );


    }


    componentDidMount(){

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color( 0x222222 );

        this.camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.01, 50 );
        this.camera.position.set( 0, 1.6, 3 );
        this.setControls();

        setFloor( this.scene ) ; 
        setFrontWall( this.scene ) ; 
        screen( this.scene ) ; 
        
        this.scene.add( new THREE.HemisphereLight( 0x888877, 0x777788 ) );
        const light = new THREE.DirectionalLight( 0xffffff, 0.5 );
        light.position.set( 0, 4, 0 );
        this.scene.add( light );
        this.addPainters(); 
        this.renderer = new THREE.WebGLRenderer( { antialias: true } );
        this.renderer.setPixelRatio( window.devicePixelRatio );
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.renderer.xr.enabled = true;
        this.setControllers(); 
        document.body.appendChild( this.renderer.domElement ); 
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
            </>
        )
    }
}