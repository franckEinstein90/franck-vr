import * as React from "react"
import styles from "./Buttons.module.scss"; 


 export default class BuyNow extends React.Component {

    constructor(props){
        super(props) ;
        this.clickAction = this.clickAction.bind( this )  ; 
    }

    clickAction(e){
        this.props.action(e); 
    }

    render(){
        return (
            <div><button    onClick={this.clickAction} 
                            className={styles.buyNow}>Try Now</button></div>
        )
    }
 }