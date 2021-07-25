import * as React from "react" ; 
import { Link } from "gatsby" ; 
import styles from "./docs.module.scss" ;
import DocNav from "../../components/business/docsNav" ; 

export default class Makers extends React.Component{

    constructor( props ){
      super(props); 
    }
  
   
    render(){
      return (
        <> 
        <DocNav></DocNav> 
        <div className={styles.paragraph}>
          <h1>Who are powerBuild makers?</h1>

          <h1>Makers</h1>
              <p><strong>powerBuild</strong> can help you build complex machinery, or experience simple physical concepts. 
              no matter your level of expertise or experience. 
              <Link to="/docs/making">Find out how</Link>
            </p>

            <h1>Making</h1>
            <h1>Certifying your components</h1>
            <h1>Selling your components</h1>

        </div>
     

  
        </> 
    )}; 
  } 