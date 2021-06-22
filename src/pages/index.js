import * as React from "react" ; 
import {Helmet} from "react-helmet" ; 
import styles from "./index.module.scss" ; 

import { TopNav }      from "../components/UI/Navs/TopNav" ; 
import { BottomNav }   from "../components/UI/Navs/BottomNav";
import video1          from "../images/gears.mp4" ; 
import { PageContent } from "../components/UI/page/PageContent";
import { Page }        from "../UI/Pages/definitions";


const appTitle = "powerBuild" ; 

export default class IndexPage extends React.Component{

  constructor(props){

    super(props); 
    this.state={
      language  : 'English', 
      page      : Page.Home
    }
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

  render(){

  return (

    <div className={styles.pageContainer}> 
      <Helmet>
        <meta charSet="utf-8" />
        <title>{appTitle}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <video className={styles.backgroundVideo} 
            playsInline autoPlay muted loop src={video1} 
            type="video/mp4">
      </video>

      <TopNav language={this.state.language} 
              changeLanguage={()=>this.changeLanguage()} 
              currentPage={this.state.page}
              changePage={ p => this.changePage(p) } 
              />

      <PageContent page={this.state.page} />
      <BottomNav/>
 
  </div>

  )}
}  
