import { SimpleClock } from "./Clock/definitions" ;

export interface System<T> {

   state   : T ; 
   clock    : SimpleClock ;  

   next() : void ;  //goes to next state
   pause() : void ;  
   reset() : void ;  
}

