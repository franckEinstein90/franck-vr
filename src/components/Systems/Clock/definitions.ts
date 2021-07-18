import React, {Component} from "react"
import moment from 'moment' ;

export enum TimeUnit {
    second = 1, 
    minute = 2, 
    hour   = 3
} ; 

export interface Clock {
    elapsed(unit : TimeUnit) : number ; 
} ; 

export interface ClockState {
    counter : number; 
    date    : string ; 
    running : boolean ; 
} ; 

export class SimpleClock implements Clock {

    private startTime : any ;  
    constructor(){
        this.startTime = moment().format();
    }

    elapsed( unit : TimeUnit ){

        return 4; 
    }
}
