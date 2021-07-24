import * as React from "react" ; 
import styles from "./index.module.scss" ; 

//page elements 
import { Header }      from  "../components/Pages/Header" ; 
import { TopNav }      from "../components/UI/Navs/TopNav" ; 
import { BottomNav }   from "../components/UI/Navs/BottomNav";
import { PageContent }    from "../components/UI/page/PageContent";
import BackgroundVideo    from "../components/UI/VideoBackgrounds/VideoBackground" ; 
import { PageId, Theme }  from "../components/UI/page/definitions";
import IdentityModal, { useIdentityContext } from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css" // delete if you want to bring your own CSS


const Layout = ( props )=> {

  const appName   = 'powerBuild'; 
  const identity  = useIdentityContext() ; 
  const [page, setPage] = React.useState( PageId.Menu); 
  const [dialog, setDialog] = React.useState(false) ; 
  const [language, setLanguage ] = React.useState('EN') ; 
  const [theme, setTheme ] = React.useState( Theme.Light ); 

  const isLoggedIn = identity && identity.isLoggedIn ; 
  const user = identity.user; 
  return (
    <div className={styles.pageContainer}> 
        <Header appName={appName} /> 

       <BackgroundVideo currentPage={page} showingDialog={dialog}/>
       <IdentityModal showDialog={dialog} onCloseDialog={() => setDialog( false )} />   

        <TopNav 
              isLoggedIn = {isLoggedIn}
              user = {user}
              language={language} 
              loginDialog={()=>setDialog(true)}
              changePage={(newPage) => setPage(newPage)} />

       <PageContent 
            theme = {theme} 
            showingDialog={dialog}
            currentPage ={page} 
            changePage={ p => setPage(p) } />

        <BottomNav currentPage={page} theme={theme} />

    </div>
  )
}

export default class IndexPage extends React.Component{

  render(){

    return (
      <Layout>



      </Layout>
  )}; 
}  
