/****************************************************************************** 
 * 
 *****************************************************************************/

import * as React from "react"; 
/*****************************************************************************/

import styles from "./TopNav.module.scss" ;
/*****************************************************************************/

export class TopNav extends React.Component {

  constructor( props ){
    super( props ) ;
  }

  

  render() {
    return (
        <div className={styles.TopNav}>
            topNav
        </div>
    ); 
  }
};
