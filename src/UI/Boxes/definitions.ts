

import * as React from "react"
import style from "./boxes.module.css" ;

export const box = (styles : string[], h) : JSX.Element =>{
    const b = React.createElement(
        'div', 
        { className : styles.join(' ')}, 
        h) ; 
    return b  ; 
}