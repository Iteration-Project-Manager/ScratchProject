import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';

class Timer extends Component {
  render() {
    console.log(`time elapsed: ${this.props.elapsed}`);
    console.log(`time duration: ${this.props.duration}`);

    // if (this.props.elapsed >= this.props.duration) {
    //   this.props.elapsed = this.props.duration;
    // }

    let percent = this.props.elapsed / this.props.duration;
    // Math.floor doesn't always work for some reason
    return (
     <div className="time-container">
       <CircularProgressbar  className="time-circle" strokeWidth={5} percentage={Math.floor(percent * 100)} />
     </div>
   );
  }
}

export default Timer;
