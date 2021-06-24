import * as UITypes from "../types" ;
import * as Boxes from "../Boxes/definitions" ;
import styles from "./pages.module.scss" ; 
import * as React from "react" ; 


class Hello extends React.Component {
    render(){
        return React.createElement('<div>', null, 'helloe'); 
    }
}

export enum PageId {
    Home = 1, 
    TryIT, 
    Account, 
    BuildLab 
}

export enum Theme {
    Dark = 1, 
    Light = 1
}

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