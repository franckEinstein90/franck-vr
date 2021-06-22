import * as UITypes from "../types" ;
import * as Boxes from "../Boxes/definitions" ;
import styles from "./pages.module.scss" ; 
import * as React from "react" ; 


class Hello extends React.Component {
    render(){
        return React.createElement('<div>', null, 'helloe'); 
    }
}

export enum Page {
    Home = 1, 
    TryIT, 
    Account 
}

export const topNav = () : UITypes.PageComponent =>{
    const container : JSX.Element = Boxes.box([styles.topNav], Hello); 
    return {
        container 
    }
} ; 

export const newPage = () : UITypes.Page => {
    const container = Boxes.box([styles.page],""); 
    return {
        container 
    } ; 
} ;

export const footer = () : UITypes.PageComponent =>{
    const container = Boxes.box([styles.footer], 'footer')
    return {
        container 
    }
}