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

            <div>
            <a className={`${styles.button} ${styles.buttonSocialLogin} ${styles.buttonFacebook}`} href="#">
              <i className={`icon fa fa-facebook`}></i>Login With Facebook</a>   
            </div>
            <div>
            <a className={`${styles.button} ${styles.buttonSocialLogin} ${styles.buttonLinkedin}`} href="#">
              <i class="icon fa fa-linkedin"></i>Login With Linkedin</a>
            </div>
            <div>
            <a className={`${styles.button} ${styles.buttonSocialLogin} ${styles.buttonGithub}`} href="#">
              <i class="icon fa fa-github"></i>Login With Github</a>
            </div>
        </div>
      ) ; 
    }
  }