import * as React from "react"
import styles     from "./TopNav.module.scss" ;
import {PageId} from "../page/definitions"
import IdentityModal, { useIdentityContext } from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css" // delete if you want to bring your own CSS

class NavItem extends React.Component {

    constructor( props ){
      super( props ) ;
    }

   render(){
      return(
        <div className={styles.navItem} onClick={this.props.action}>
            <div>{this.props.children}</div>
        </div>
      ) ; 
    }
}

class LoginButton extends React.Component {

    constructor( props ){
      super( props ) ;
    }

   render(){
      return(
        <div className={styles.loginButton} onClick={this.props.action}>
            <div>{this.props.children}</div>
        </div>
      ) ; 
    }
}

export class TopNav extends React.Component {

  constructor( props ){
    super( props ) ;
  }

  logginButton(){
    const userEmail = this.props.isLoggedIn &&  'user' in this.props
      ? this.props.user.email
      : "Login" ; 
      return (
        <LoginButton action={()=>this.props.loginDialog()}>
              {userEmail}  
        </LoginButton>)
  }

  render() {
    
    return (
      <div className={styles.topNav}>
          <NavItem action={()=>this.props.changeLanguage()}>
            {this.props.language}
          </NavItem>
        <div>
          <NavItem action={()=>this.props.changePage(PageId.Home)}>
              Start
          </NavItem>
          <NavItem>Market</NavItem>
          <NavItem>Docs</NavItem>
        </div>
          <div>
            {this.logginButton()}
          </div>
      </div>
    ); 
  }
} ;

