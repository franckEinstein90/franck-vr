import * as React from "react"
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
        <div>hello</div>
      </div>
    ); 
  }
} ;