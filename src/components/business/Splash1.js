import * as React from "react"
import * as THREE from 'three';
import styles from "./Splashes.module.scss"; 


 export default class Splash1 extends React.Component {

    render(){
        return (
            <div className={styles.text}>
            <div className={styles.title}>Build before you Build </div>
            <div>Think, Build, Test</div>
            <div>before you build</div>
            <div><button className={styles.buyNow}>Try Now</button></div>
            </div>
        )
    }
 }