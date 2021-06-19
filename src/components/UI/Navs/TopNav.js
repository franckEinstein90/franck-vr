import * as React from "react"
import styles from "./TopNav.module.scss" ; 

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

export class TopNav extends React.Component {
  render() {
    return (
    
      <div className={styles.topNav}>
        <div>
          <NavItem>Start</NavItem>
          <NavItem>Market</NavItem>
          <NavItem>Docs</NavItem>
        </div>
        <div>
          <NavItem>Careers</NavItem>
        </div>
      </div>
    ); 
  }
} ;