import * as React from "react"
import styles from "./index.module.scss" ; 
import {TopNav} from "../components/UI/Navs/TopNav" ; 
import { BottomNav } from "../components/UI/Navs/BottomNav";
import video1 from "../images/gears.mp4" ; 
import { PageContent } from "../components/UI/page/PageContent";

const IndexPage = () => {

  return (
  <div className={styles.pageContainer}> 

<video className={styles.backgroundVideo} 
    playsInline autoPlay muted loop src={video1} 
    type="video/mp4">
  </video>

    <TopNav/>
    <PageContent/>
    <BottomNav/>
   {/*<LeftNav/>
   <RightNav/>
    <BottomNav/>*/}
 
  </div>

  )}

export default IndexPage
