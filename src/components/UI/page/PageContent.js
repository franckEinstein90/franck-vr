import * as React from "react"
import styles from "./PageContent.module.scss" ; 
import Scene from "../../Scene" ;
import ScreenScene  from "../../screens/ScreenScene"; 
import { PageId } from "./definitions";
import { AccountPage  } from "../../Pages/AccountPage";
import { BuildLab } from "../../Pages/BuildLab" ; 

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

    //Home page for desktop
    if( this.props.currentPage === PageId.Home )   return (
      <ScreenScene buyNowAction={()=>this.props.changePage(PageId.BuildLab)}/>
    ) ;
    
    //Account page
    if( this.props.currentPage === PageId.Account ) return (<AccountPage/>) ; 
    //BuildLab page
    if( this.props.currentPage === PageId.BuildLab ) return (<BuildLab/>); 

  }

  render(){
    return (
          <div className={styles.page}> 
            { this.renderPage() }
          </div>
      )
    }
  }

