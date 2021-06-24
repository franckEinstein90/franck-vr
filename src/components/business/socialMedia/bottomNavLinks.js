import * as React from "react"
import styles from "./bottomNavLinks.module.scss" ; 

export default class SocialMediaLinks extends React.Component {

    constructor( props ){
      super( props ) ; 
    }


    render(){
      const h = this.props.tag;
      const themeClass = styles.lightIcons; 
      const cssClasses = btnClass => `${styles.smGlobalBtn} ${themeClass} ${btnClass}` ; 

      return(
            <div className={styles.socialMediaLinks}>
                <div><a className={cssClasses(styles.facebookBtn)} href="#" ></a></div>
                <div><a className={cssClasses(styles.twitterBtn)} href="#" ></a></div>
                <div><a className={cssClasses(styles.googleplusBtn)} href="#" ></a></div>
                <div><a className={cssClasses(styles.linkedinBtn)} href="#" ></a></div>
                <div><a className={cssClasses(styles.pinterestBtn)} href="#" ></a></div>
            </div>
      ) ; 
    }
} ; 
