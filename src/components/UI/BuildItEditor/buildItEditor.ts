
import * as THREE from 'three';
import { setCameras } from '../../scene/camera';
import { newScene } from '../../scene/newScene';
import { Signal } from "./signals" ; 
import * as BuildEditorTypes from "./types" ; 

export class BuildItEditor implements BuildEditorTypes.BuildItEditor{ 

    public  scene           : THREE.Scene ; 
    public  signals         : Map<string, BuildEditorTypes.Signal> ;
    public  viewportCamera  : THREE.PerspectiveCamera ;
    public  geometries      : BuildEditorTypes.GeometryContainer ;  


    constructor ( canvas : HTMLCanvasElement ){

        this.signals = new Map() ; 
        this.signals.set('editScript', new Signal()) ; 
        this.signals.set('rendererCreated', new Signal()) ; 
		this.signals.set('rendererUpdated' , new Signal())
        this.scene = newScene( 0xff0000 );
        console.log(this.scene) ; 
        this.viewportCamera = setCameras ( canvas, 1000, {x : 0, y : 0, z : 230} );
    }

    addObject(o : THREE.Object3D) { 

        this.scene.add( o );
        this.signals.get('objectAdded').dispatch( o );
        this.signals.get('sceneGraphChanged').dispatch( o );
    }
} ; 

BuildItEditor.prototype.addObject = function ( object : THREE.Object3D ) {
  
    this.scene.add( object );
    this.signals.objectAdded.dispatch( object );
    this.signals.sceneGraphChanged.dispatch();

} ;