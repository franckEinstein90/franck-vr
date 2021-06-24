
import * as THREE from 'three';
import { setCameras } from '../../camera';
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

}

//this.signals = {

    // script


   /* // player

    startPlayer: new Signal(),
    stopPlayer: new Signal(),

    // vr

    toggleVR: new Signal(),
    exitedVR: new Signal(),

    // notifications

    editorCleared: new Signal(),

    savingStarted: new Signal(),
    savingFinished: new Signal(),

    transformModeChanged: new Signal(),
    snapChanged: new Signal(),
    spaceChanged: new Signal(),
    rendererCreated: new Signal(),
    rendererUpdated: new Signal(),

    sceneBackgroundChanged: new Signal(),
    sceneEnvironmentChanged: new Signal(),
    sceneFogChanged: new Signal(),
    sceneFogSettingsChanged: new Signal(),
    sceneGraphChanged: new Signal(),
    sceneRendered: new Signal(),

    cameraChanged: new Signal(),
    cameraResetted: new Signal(),

    geometryChanged: new Signal(),

    objectSelected: new Signal(),
    objectFocused: new Signal(),

    objectAdded: new Signal(),
    objectChanged: new Signal(),
    objectRemoved: new Signal(),

    cameraAdded: new Signal(),
    cameraRemoved: new Signal(),

    helperAdded: new Signal(),
    helperRemoved: new Signal(),

    materialAdded: new Signal(),
    materialChanged: new Signal(),
    materialRemoved: new Signal(),

    scriptAdded: new Signal(),
    scriptChanged: new Signal(),
    scriptRemoved: new Signal(),

    windowResize: new Signal(),

    showGridChanged: new Signal(),
    showHelpersChanged: new Signal(),
    refreshSidebarObject3D: new Signal(),
    historyChanged: new Signal(),

    viewportCameraChanged: new Signal(),

    animationStopped: new Signal()*/