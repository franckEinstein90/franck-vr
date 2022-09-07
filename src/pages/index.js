import * as React from "react"
import PageContentContainer from "../components/UI/PageContentContainer/PageContentContainer" ;
import styles from "./index.module.css" ; 


const Layout = ( props )=> {

  const appName   = 'BuildB4Build'; 
  const [dialog   , setDialog]    = React.useState(false) ; 
  const [language , setLanguage ] = React.useState('EN') ; 

  

  return (
    <div className={styles.pageContainer}> 
        <PageContentContainer />
    </div>
  )
} ; 


export default Layout ;  
