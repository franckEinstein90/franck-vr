import * as React from "react"
import styles from "./PageContent.module.scss" ; 
import ScreenScene  from "../../screens/ScreenScene"; 
import { PageId } from "./definitions";
import { AccountPage  } from "../../Pages/AccountPage";
import { BuildLab } from "../../Pages/BuildLab" ; 

export class PageContent extends React.Component {
  
  constructor( props ) {
    super( props ) ; 
    this.state = {
      xrSupport : false  
    }
  }
  
  componentDidMount(){
    if( 'xr' in window.navigator ){
      return navigator.xr.isSessionSupported( 'immersive-vr' )
      .then( supported => {
        this.setState({xrSupport : supported})
        return ; 
      }) ; 
    }
  }
 
  renderPage( ){
    switch (this.props.currentPage) {

      case PageId.Account : 
        return <AccountPage
          xr = {this.state.xrSupport} 
          theme = {this.props.theme} /> ; 
        break; 
     
      case PageId.BuildLab :
        return  <BuildLab 
          xr = {this.state.xrSupport}
          theme = {this.props.theme} /> ; 
        break ; 
      
      default :
        return <ScreenScene 
          xr = {this.state.xrSupport}
          buyNowAction={()=>this.props.changePage(PageId.BuildLab)}
          theme = {this.props.theme} /> ; 
        break; 
    }
  }

  render(){
    return (
          <div className={styles.page}> 
            { this.renderPage() }
          </div>
      )
    }
  }

