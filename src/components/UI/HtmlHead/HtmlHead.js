import * as React from "react" ; 
import {Helmet} from "react-helmet" ; 

export class HtmlHead extends React.Component{

    constructor(props){
      super( props ) ; 
    }



    render(){
        return(
        <Helmet>
        <meta charSet="utf-8" />
        <title>{this.props.appName}</title>
        <link rel="canonical" href="http://mysite.com/example" />    
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"/>
        <link rel='stylesheet' href='http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css'/>
        <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js"></script>     
        </Helmet>
        )
    }
} ; 