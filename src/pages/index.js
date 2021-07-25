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
  const [dialog, setDialog] = React.useState(false) ; 
  const [language, setLanguage ] = React.useState('EN') ; 
  const [theme, setTheme ] = React.useState( Theme.Light ); 

  const isLoggedIn = identity && identity.isLoggedIn ; 
  const user = identity.user;
  
  const loginHandler = ( show )=>{


    if(!isLoggedIn) {
      setDialog( show );
    } else {
      props.setUser( user ); 
      props.setPage(PageId.Account)
    }
  }

  return (
    <div className={styles.pageContainer}> 
        <Header appName={appName} /> 

       <BackgroundVideo currentPage={props.page} showingDialog={dialog}/>
       <IdentityModal showDialog={dialog} onCloseDialog={() => loginHandler( false )} />   

        <TopNav 
              isLoggedIn = {isLoggedIn}
              user = {user}
              language={language} 
              loginDialog={()=>loginHandler(true)}/>
              
        {props.children}
        <BottomNav currentPage={props.page} theme={theme} />

    </div>
  )
}

export default class IndexPage extends React.Component{

  constructor( props ){
    super(props); 
    this.state = {
      page:PageId.Menu, 
      user: null
    }
    this.setPage = this.setPage.bind( this ); 
    this.setUser = this.setUser.bind( this ); 
  }

  setPage( pageId ){
    this.setState({page : pageId}) ;
  }

  setUser( user ){
    this.setState({user:user}); 
  }

  render(){
    return (
      <Layout page={this.state.page} setPage={this.setPage} setUser={this.setUser}>
        <PageContent currentPage={this.state.page} user={this.state.user} />
      </Layout>

  )}; 
}
