import * as React from "react" ; 
import {Helmet} from "react-helmet" ; 
import styles from "./index.module.scss" ; 

import { TopNav }      from "../components/UI/Navs/TopNav" ; 
import { BottomNav }   from "../components/UI/Navs/BottomNav";

import video1          from "../images/gears.mp4" ; 
import vrManipVideo    from "../images/mv_manip.mp4" ; 
import architectVideo  from "../images/architect.mp4"
import { PageContent } from "../components/UI/page/PageContent";
import { PageId, Theme }        from "../UI/Pages/definitions";


const appTitle = "powerBuild" ; 


class BackgroundVideo extends React.Component{
    constructor( props ){
      super(props) ; 
    }

  selectVideo(){
    if(this.props.currentPage === PageId.Account) return video1; 
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
}



export default class IndexPage extends React.Component{

  constructor(props){

    super( props ); 
    this.state={
      language  : 'English', 
      page      : PageId.Account, 
      theme     : Theme.Light
    } ; 
    this.changeLanguage = this.changeLanguage.bind( this ); 
    this.changePage     = this.changePage.bind( this ) ; 
  }

  changePage( page ){
    this.setState({page : page}) ; 
  }

  changeLanguage(){
    if(this.state.language === 'English') {
      this.setState({language:'French'})
    } else {
      this.setState({language:'English'})
    }
  }

  changeTheme(){
    if(this.state.theme === Theme.Light){
      this.setState({theme : Theme.Dark})
    } else {
      this.setState({theme : Theme.Light})
    }

  }

  render(){

  return (

    <div className={styles.pageContainer}> 
      <Helmet>
        <meta charSet="utf-8" />
        <title>{appTitle}</title>
        <link rel="canonical" href="http://mysite.com/example" />    
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"/>
        <link rel='stylesheet' href='http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css'/>
      </Helmet>

      <BackgroundVideo currentPage={this.state.page}/>

      <TopNav language={this.state.language} 
              changeLanguage={()=>this.changeLanguage()} 
              currentPage={this.state.page}
              changePage={ p => this.changePage(p) } 
              />

      <PageContent  language={this.state.language}
                    currentPage ={this.state.page} 
                    changePage={ p => this.changePage(p) } 
                    />

      <BottomNav currentPage={this.state.page} theme={this.state.theme}/>
 
  </div>

  )}
}  
