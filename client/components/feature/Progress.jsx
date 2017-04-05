import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';
// likely the area that needs to be updated.  ProgressBar is currently justa  default.
class Progress extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let completedCount = 0;

    for(let i = 0; i<this.props.featureItems.length; i += 1) {
      if (this.props.featureItems[i].complete) completedCount += 1;
    }
    let percent = completedCount / this.props.featureItems.length;
  
    return (
     <div className="prog-container">
       <CircularProgressbar className="prog-circle" strokeWidth={6} percentage={Math.floor(percent * 100)} />
     </div>
   );
  }
}

export default Progress;
