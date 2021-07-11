import * as React from "react" ; 
import styles from "./VideoBackground.module.scss" ; 

import { PageId, Theme }  from "../page/definitions";

import video1             from "../../../images/gears.mp4" ; 
import vrManipVideo       from "../../../images/mv_manip.mp4" ; 
import architectVideo     from "../../../images/architect.mp4" ; 

export default class BackgroundVideo extends React.Component{

    constructor( props ){
      super(props) ; 
    }
  
    selectVideo(){
      if(this.props.currentPage === PageId.Account ) return video1; 
      if(this.props.currentPage === PageId.BuildLab) return architectVideo;
      return vrManipVideo  ; 
    }
  
    render(){
        return(
        <video className={styles.backgroundVideo} 
              playsInline autoPlay muted loop src={this.selectVideo()} 
              type="video/mp4">
        </video>
        )
    }
  } ; 
  