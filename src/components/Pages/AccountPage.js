import * as React from "react" ; 
import styles from "./AccountPage.module.scss" ;
import IdentityModal, { useIdentityContext } from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css" // delete if you want to bring your own CSS



export  class AccountPage extends React.Component {

    constructor( props ) {
      super( props ) ; 
      this.facebookLogin = this.facebookLogin.bind( this ); 
   }

    componentDidMount(){
      const check = 1 ; 
      console.log( check ) ; 
    }
 
    facebookLogin(){
      
      const facebookURL = `https://graph.facebook.com/v11.0/oauth/access_token?` +
                          `client_id=836371380609137&` +   
                          `client_secret=abc1368b376f0172429141f4686f6676`
                          

      return fetch(facebookURL + `&grant_type=client_credentials`,{
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        redirect: 'follow'// manual, *follow, error
      })
      .then(response => {
        return response.json();  
      })
      .then( data =>{
        const appId = data.access_token.split('|')[0]; 
        const accessToken = data.access_token.split('|')[1]; 
        return fetch(
          facebookURL + 
          `&redirect_uri=https://powerbuild.netlify.app/` + 
          `&grant_type: 'bearer_token' ` +
          //`&grant_type: 'fb_exchange_token'`+
          `fb_exchange_token: ${accessToken}` ,
          {
            method: 'GET', 
            redirect: 'follow'
          }); 
      })
      .then(response => {
        return response.json();  
      })
      .then(data => {
        console.log(data); 
        debugger; 
      })
      .catch(err=>{
        debugger; 
        console.log(err); 
        return ; 
      }) ; 
  
   

    }

    render(){
      return (
        <div className={styles.accountPage}>
            <h1>{process.env.GATSBY_API_TEST}</h1>  

            <div>
              <a  className={`${styles.button} ${styles.buttonSocialLogin} ${styles.buttonFacebook}`} 
                  href="#"
                  onClick={this.facebookLogin}>
              <i className={`icon fa fa-facebook`}></i>Login With Facebook</a>   
            </div>

            <div>
              <a  className={`${styles.button} ${styles.buttonSocialLogin} ${styles.buttonLinkedin}`}
                  onClick={this.linkedInLogin}>
                <i class="icon fa fa-linkedin"></i>Login With Linkedin
              </a>
            </div>

            <div>
              <a className={`${styles.button} ${styles.buttonSocialLogin} ${styles.buttonGithub}`} href="#">
              <i class="icon fa fa-github"></i>Login With Github</a>
            </div>
        </div>
      ) ; 
    }
  }