import * as React from "react"
import styles from "./PageContent.module.scss" ; 
import Scene from "../../Scene" ;
import ScreenScene  from "../../screens/ScreenScene"; 
import { Page } from "../../../UI/Pages/definitions";
import { AccountPage  } from "../../Pages/AccountPage";

export class PageContent extends React.Component {
  
  constructor( props ) {
    super( props ) ; 
    this.state = {
      xrSupport : null
    }
  }
  
  componentDidMount(){
    navigator.xr.isSessionSupported( 'immersive-vr' )
      .then( supported => {
        this.setState({xrSupport : supported})
        return ; 
      }) ; 
  }
 
  renderPage( ){

    if( this.props.page === Page.Home )   return (<ScreenScene/>) ; 
    if( this.props.page === Page.Account) return (<AccountPage/>) ; 

  }

  render(){
    return (
          <div className={styles.page}> 
            { this.renderPage() }
          </div>
      )
    }
  }

