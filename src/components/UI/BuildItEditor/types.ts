import * as THREE from 'three';

export interface Signal {

    active   : boolean ;
    memorize : boolean ;  
    dispatch : any ; 

}

export interface EditorHistory {

}

export interface EditorStorage {

}


export interface GeometryContainer {
   geometries : Map<string, THREE.Geometry> ; 
   add(g : THREE.Geometry) : void ; 

}


export interface BuildItEditor {
    signals         : Map<string,Signal> ; 
    scene           : THREE.Scene ; 
    viewportCamera  : THREE.PerspectiveCamera ;
    geometries      : GeometryContainer ;  
    history         : EditorHistory ;
    storage         : EditorStorage ; 
    canvas          : HTMLCanvasElement ;
    
    addObject(o : THREE.Object3D) : void ; 
}