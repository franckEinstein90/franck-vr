import * as React from "react" ; 
import styles from "./AccountPage.module.scss" ;
import IdentityModal, { useIdentityContext } from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css" // delete if you want to bring your own CSS



export  class AccountPage extends React.Component {

    constructor( props ) {
      super( props ) ; 
   }

    componentDidMount(){
      const check = 1 ; 
      console.log( check ) ; 
    }
 
 
    userEmail(){
      return 'user' in this.props
        ? this.props.user.email
        : "Unknown" ; 
    } 

    render(){
      return (
        <div className={styles.accountPage}>


              <div 
                className={styles.accountPanel}
                style={{width:'30%'}}>
                  
                  <h1>{this.userEmail()}</h1>

              </div>

              <div className={styles.accountPanel}
                   style={{width:'60%'}}>
                  <h1>My Projects</h1>
                  <h1>My Products</h1>
                  <h1>My Clients</h1>
              </div>

        </div>
      ) ; 
    }
  }