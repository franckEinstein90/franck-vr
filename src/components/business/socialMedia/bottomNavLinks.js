import * as React from "react"
import styles from "./bottomNavLinks.module.scss" ; 

export default class SocialMediaLinks extends React.Component {

    constructor( props ){
      super( props ) ; 
    }

    render(){
      const h = this.props.tag; 
      return(
            <div className={styles.socialMediaLinks}>
                <div><a className={`${styles.smGlobalBtn} ${styles.facebookBtn}`} href="#" ></a></div>
                <div><a className={`${styles.twitterBtn} ${styles.smGlobalBtn}`} href="#" ></a></div>
                <div><a className={`${styles.googleplusBtn} ${styles.smGlobalBtn}`} href="#" ></a></div>
                <div><a className={`${styles.linkedinBtn} ${styles.smGlobalBtn}`} href="#" ></a></div>
                <div><a className={`${styles.pinterestBtn} ${styles.smGlobalBtn}`} href="#" ></a></div>
            </div>
      ) ; 
    }
} ; 
