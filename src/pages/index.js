import * as React from "react" ; 
import styles from "./index.module.scss" ; 

//page elements 
import { Header }      from  "../components/Pages/Header" ; 
import { TopNav }      from "../components/UI/Navs/TopNav" ; 
import { BottomNav }   from "../components/UI/Navs/BottomNav";
import { PageContent }    from "../components/UI/page/PageContent";
import BackgroundVideo    from "../components/UI/VideoBackgrounds/VideoBackground" ; 
import { PageId, Theme }  from "../components/UI/page/definitions";


export default class IndexPage extends React.Component{

  constructor(props){

    super( props ); 
    this.state={
      appName   : "powerBuild" ,
      language  : 'English' , 
      page      : PageId.BuildLab, 
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
      <Header appName={this.state.appName} />
      <BackgroundVideo currentPage={this.state.page}/>
      <TopNav language={this.state.language} 
              changeLanguage={()=>this.changeLanguage()} 
              currentPage={this.state.page}
              changePage={ p => this.changePage(p) } 
              />
      <PageContent  language={this.state.language}
                    currentPage ={this.state.page} 
                    changePage={ p => this.changePage(p) }
                    theme = {this.theme } 
                    />
      <BottomNav currentPage={this.state.page} theme={this.state.theme}/>
    </div>
  )}; 
}  
