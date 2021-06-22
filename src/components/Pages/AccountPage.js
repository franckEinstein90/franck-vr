import * as React from "react" ; 
import styles from "./AccountPage.module.scss" ;


export class AccountPage extends React.Component {

    constructor( props ) {
      super( props ) ; 
    }

    componentDidMount(){
      const check = 1; 
      console.log( check ); 
    }
  
    render(){
      return (
        <div className={styles.accountPage}>
          <h1>{process.env.GATSBY_API_TEST}</h1>
        </div>
      ) ; 
    }
  }