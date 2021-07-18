import { Gear, GearSystemState, GearSystem } from "./definitions";
import { Shape } from "./../../BasicShapes/types" ; 
import { SimpleClock } from "../../../Systems/Clock/definitions"; 
import * as THREE from 'three';



export class GearTrain implements GearSystem, Shape{

    public clock : SimpleClock ;
    public state : GearSystemState ; 
    public rotationalVelocity = 0.072; 

    private _driver: Gear ;  
    private _connectedGears : Gear[] = [] ; 
    private _gridHelper : THREE.GridHelper ; 

    constructor( scene: THREE.Scene, gridHelper : THREE.GridHelper ){

        this.clock = new SimpleClock() ; 
        gridHelper.rotateX(Math.PI/2);
        scene.add( gridHelper );
        this.state = {
            runningTime : 0, 
            running : false
        }
    }
    
    driver( g: Gear ){
        this._driver = g; 
    }

    addGear ( g : Gear ){
        //Add a gear connected to the driver
        this._connectedGears.push(g);
    }

    next(){
        if(this.state.running){
            this._driver.turn(this.rotationalVelocity) ; 
            this._connectedGears.forEach(g => g.turn(-1 * this.rotationalVelocity)) ; 
        }
    }

    pause(){
        return ; 
    }

    reset(){
        return ; 
    }
 
    translateX ( x : number ){
        this._driver.translateX(x); 
        this._gridHelper.translateX(x); 
    }

}

export const gearSystem = ( 

    scene: THREE.Scene, 
    gridHelper : THREE.GridHelper ) : GearSystem => {

    let _driverRotationPerCycle = 0.072; 
    let _driver : Gear ; 
    let _connectedGears : Gear[] = [] ; 
    gridHelper.rotateX(Math.PI/2);
    scene.add( gridHelper );

    return {


        next: ()=>{
            _driver.turn(_driverRotationPerCycle) ; 
            _connectedGears.forEach(g => g.turn(-1 * _driverRotationPerCycle)) ; 
        }, 
        pause : ()=> {

        }, 
        reset: ()=>{

        }, 
        driver : ( g? : Gear )=>{
            if( g ) _driver = g;
            return _driver; 
        },

        addGear : ( g : Gear )=>{
            //Add a gear connected to the driver
            _connectedGears.push(g);
        }, 

        translateX : ( x : number )=>{
            _driver.translateX(x); 
            gridHelper.translateX(x); 
        }
    }  ; 
} ;
