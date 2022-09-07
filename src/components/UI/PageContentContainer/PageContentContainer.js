import * as React from "react"; 
import Scene from "../../Scene";
import styles from "./PageContentContainer.module.scss" ; 

export default class PageContentContainer extends React.Component {

    constructor( props ) {
      super(props);  
      this.state = {
        xrSupport : false  
      }; 
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
 
    render() {
      return (
        <div className={styles.page}>
          <Scene />
        </div>
    )}
} ; 