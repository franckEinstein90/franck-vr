import { System } from "../definitions" ; 
import { Clock } from "../Clock/definitions" ;

interface SimulationState {
    val : number; 
}

export default class Simulation implements System<SimulationState>{

    public clock : Clock ;
    
    constructor(){

    } 

    get state(){
        return {
            val: 4
        }
    }

    start(){
        console.log('dsa'); 
    }

    pause(){
        console.log('dsa'); 
    }

    reset(){
        console.log('dsa'); 
    }

}