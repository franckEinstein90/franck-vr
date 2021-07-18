import * as React from "react"
import moment from 'moment';
import styles from "./ReactClock.module.scss" ; 

export default class ReactClock extends React.Component {  

  constructor( props ) {
      super(props);
      const date = moment().format(); 
      this.state = { 
        date, 
        running: false, 
        counter: 0
     };
     /************************************ */
     this.start   = this.start.bind( this ); 
     this.stop    = this.stop.bind( this ); 
     this.reset   = this.reset.bind( this ); 
  }

  componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
  }

  componentWillUnmount() {
      clearInterval(this.timerID);
  }

  tick() {
      if(this.state.running){
        const counterValue = this.state.counter; 
        this.setState({counter : counterValue + 1})
      }
      const date = moment().format(); 
      this.setState({
        date
      });
      this.props.tick( this.state.running ); 
    }

  /*********************************************************/
  start(){
      this.setState({running: true}) ; 
  }
  stop(){
      this.setState({running: false}) ; 
  }
  reset(){
      this.setState({
        counter: 0, 
        running: false
      }) ; 
  }


  render() {

    return (
        <div className={styles.clockController}>
          <div className={styles.clockButton} onClick={this.start}>Start</div>
          <div className={styles.clockButton} onClick={this.stop}>Stop</div>
          <div className={styles.clockButton} onClick={this.reset}>Reset</div>
          {this.state.counter}
        </div>
     
    );
  }
}