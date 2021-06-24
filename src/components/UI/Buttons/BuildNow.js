import * as React from "react"
import styles from "./Buttons.module.scss"; 


 export default class BuildNow extends React.Component {

    constructor(props){
        super(props) ;
        this.clickAction = this.clickAction.bind( this )  ; 
    }

    clickAction(e){
        this.props.action(e); 
    }

    render(){
        return (
            <a className={styles.buildNow} onClick={this.clickAction} >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
                     Build Now
            </a>
       )
    }
 }
/*            <div><button    
                            className={styles.buyNow}>Try Now</button></div>*/
 