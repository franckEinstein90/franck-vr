/****************************************************************************** 
 * 
 *****************************************************************************/

import * as React from "react" ; 
import { HtmlHead } from "../components/UI/HtmlHead/HtmlHead";

import { TopNav }           from "../components/UI/TopNav/TopNav" ;
import PageContentContainer from "../components/UI/PageContentContainer/PageContentContainer" ;
/*****************************************************************************/

import styles from "./index.module.scss" ; 
/*****************************************************************************/

const Layout = ( props )=> {

  const appName   = 'BuildB4Build'; 
  const [dialog   , setDialog]    = React.useState(false) ; 
  const [language , setLanguage ] = React.useState('EN') ; 

  

  return ( 
      <div className={styles.pageContainer}>
        <HtmlHead appName={appName} /> 
        <TopNav />
        <PageContentContainer />
      </div>
  )
} ; 


export default Layout ;  
