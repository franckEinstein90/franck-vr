import * as React from "react"
import styles     from "./TopNav.module.scss" ;
import {PageId} from "../page/definitions"

class NavItem extends React.Component {

    constructor( props ){
      super( props ) ;
    }

   render(){
      return(
        <div className={styles.navItem} onClick={this.props.action}>
          <h3>
            {this.props.children}
          </h3>
        </div>
      ) ; 
    }
}

export class TopNav extends React.Component {

  render() {

    return (
      <div className={styles.topNav}>
          <NavItem action={()=>this.props.changeLanguage()}>
            {this.props.language === 'English' ? 'FR' : 'EN'}
          </NavItem>
        <div>
          <NavItem action={()=>this.props.changePage(PageId.Home)}>
              Start
          </NavItem>
          <NavItem>Market</NavItem>
          <NavItem>Docs</NavItem>
        </div>
        <div>
          <NavItem 
            currentPage = { this.props.currentPage }
            targetPage  = { PageId.Account }
            action={()=>this.props.changePage(PageId.Account)}>Sign Up</NavItem>
        </div>
      </div>
    ); 
  }
} ;