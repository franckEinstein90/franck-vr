import * as React from "react" ; 
import { Link } from "gatsby" ; 

export default class DocNav extends React.Component{

    constructor( props ){
      super(props); 
    }
  
   
    render(){
      return (
        
        <nav style={{backgroundColor:'white'}}>
            <Link to="/docs">Home</Link>{" "}
            <Link to="/docs/makers">Makers</Link>{" "}
            <Link to="/docs/components">Components</Link>{" "}
        </nav>
      )}; 
}