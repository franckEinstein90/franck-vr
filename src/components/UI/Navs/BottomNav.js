import * as React from "react"
import SocialMediaLinks from "../../business/socialMedia/bottomNavLinks";
import styles from "./BottomNav.module.scss" ; 

class NavItem extends React.Component {

    constructor( props ){
      super( props ) ; 
    }

    render(){
      const h = this.props.tag; 
      return(
        <h3>{this.props.children}</h3>
      ) ; 
    }
}

export class BottomNav extends React.Component {
  render() {

    return (
      <div className={styles.bottomNav}>
        <SocialMediaLinks/>
        <div>Try this site in VR</div>
      </div>
    ); 
  }
} ;