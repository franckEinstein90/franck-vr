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

class IndexPage extends React.Component{

  constructor( props ){
    super(props); 
  }

  render(){

    return (

      <PageContent 
          setPage={this.props.setPage} 
          currentPage={this.props.page} 
          user={this.props.user} />
  )}
} ; 

const Layout = ( props )=> {

  const appName   = 'powerBuild'; 
  const identity  = useIdentityContext() ; 
  const [dialog, setDialog] = React.useState(false) ; 
  const [language, setLanguage ] = React.useState('EN') ; 
  const [theme, setTheme ] = React.useState( Theme.Light ) ; 
  const [page, setPage] = React.useState( PageId.Menu ); 

  const isLoggedIn = identity && identity.isLoggedIn ; 
  const [user, setUser] = React.useState( identity.user ) ;
  
  const loginHandler = ( show )=>{
    if(!isLoggedIn) {
      setDialog( show );
    } else {
      setUser( user ); 
      setPage(PageId.Account)
    }
  }

  return (
    <div className={styles.pageContainer}> 

      <Header appName={appName} /> 
      <BackgroundVideo currentPage={props.page} showingDialog={dialog}/>
      <IdentityModal showDialog={dialog} onCloseDialog={() => loginHandler( false )} />   

      <TopNav 
              isLoggedIn = {isLoggedIn}
              setPage = { setPage }
              user = {user}
              language={language} 
              loginDialog={()=>loginHandler(true)}/>
              
        <IndexPage page={page} setPage={setPage}/>
      <BottomNav currentPage={props.page} theme={theme} />

    </div>
  )
} ; 

export default Layout ;