import * as React from "react" ; 
import styles from "./AccountPage.module.scss" ;


export class AccountPage extends React.Component {

    constructor( props ) {
      super( props ) ; 
    }
  
    render(){
      return (
        <div className={styles.accountPage}>
          <h1>{process.env.Gatsby_API_URL}</h1>
        </div>
      ) ; 
    }
  }