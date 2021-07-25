import * as React from "react" ; 
import styles from "./docs/docs.module.scss" ; 
import DocNav from "../components/business/docsNav"  ; 

export default class Docs extends React.Component{

    constructor( props ){
      super(props); 
    }
  
   
    render(){
      return (
        <> 
        <DocNav></DocNav> 
        
        <div className={styles.paragraph}>
            <h1>Mission</h1>
            <p> 
            powerBuild helps makers sell, license, or otherwise profit from objects and machines they've built 
            without incurring the manufacturing costs associated with prototypes and early versions. 
            </p>
            <h1>Components</h1>
                <p>
                    We believe that a concept or machine tested in an <strong>objective simulation 
                    environment</strong>, already includes equity, and can therefore be bought and sold, even 
                    when no physical version has yet been built. 
                </p>
                <p> 
                    Even in the absence of buyer interest, the value in that component, can still be 
                    levaraged other makers, in an open-source fashion, where increasingly larger and more
                    complex components are created by incorporating more basic elements built by other makers.
                </p>    

                <h1>Tools</h1>
                <p>powerBuild strongly believes in the future of VR for construction, manufacturing, testing, and other
                purposes, and our platform is built using VR-first methodology.  platforms, as well as more 
                traditional interfaces for portable devices and desktops. </p>
        </div> 
        </> 
    )}; 
  } 