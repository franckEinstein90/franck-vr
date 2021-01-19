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
        this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
	    this.camera.position.z = 1;

	    this.scene = new THREE.Scene();

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