import React, {useContext} from 'react';

import * as THREE from 'three'; 
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';
import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader.js'; 
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; 
import { LoadingManager } from 'three';


export default class Scene extends React.Component {

    constructor( props ) {
        super(props);  
    }
    componentDidMount(){

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color( 0x222222 );

        this.camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.01, 50 );
        this.camera.position.set( 0, 1.6, 3 );

	    this.scene = new THREE.Scene();
        const floorGometry = new THREE.PlaneBufferGeometry( 4, 4 );
        const floorMaterial = new THREE.MeshStandardMaterial( {
            color: 0x222222,
            roughness: 1.0,
            metalness: 0.0
        } );
        const floor = new THREE.Mesh( floorGometry, floorMaterial );
        floor.rotation.x = - Math.PI / 2;
        this.scene.add( floor );
        
        const grid = new THREE.GridHelper( 10, 20, 0x111111, 0x111111 );
        // grid.material.depthTest = false; // avoid z-fighting
        this.scene.add( grid );

        this.scene.add( new THREE.HemisphereLight( 0x888877, 0x777788 ) );

        const light = new THREE.DirectionalLight( 0xffffff, 0.5 );
        light.position.set( 0, 4, 0 );
        this.scene.add( light );

	    const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
	    const material = new THREE.MeshNormalMaterial();

	    const mesh = new THREE.Mesh( geometry, material );
	    this.scene.add( mesh );

	    this.renderer = new THREE.WebGLRenderer( { antialias: true } );
        const container = document.querySelector('#scene'); 
	    this.renderer.setSize( window.innerWidth, window.innerHeight );
	  //  this.renderer.setAnimationLoop( animation );
        document.body.appendChild( this.renderer.domElement ); 
        this.renderer.render( this.scene, this.camera ); 
        document.body.appendChild( VRButton.createButton( this.renderer ) );
    }

    render(){
        return (
            <>
            </>
        )
    }
}