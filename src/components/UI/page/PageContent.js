import * as React from "react"
import styles from "./PageContent.module.scss" ; 
import Scene from "../../Scene" ;
import ScreenScene  from "../../screens/ScreenScene"; 



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
  
  render(){
    return (
          <div className={styles.page}> 
            {this.state.xrSupport? (<Scene/>) : (<ScreenScene/>)}
          </div>
      )
    }
  }

