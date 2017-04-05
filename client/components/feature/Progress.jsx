import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';

class Progress extends Component {
  constructor(props) {
    super(props);
    
  }

  componentWillRender() {

  }
  render() {
  
    let completedCount = 0;
    var percent = 0;
    let featureItems = this.props.featureItems;

    if (this.props.featureItems.length > 0) {
      for(let i = 0; i<featureItems.length; i += 1) {
        if (featureItems[i].complete) completedCount += 1;
      }
      percent = completedCount / featureItems.length;
    }
    return (
     <div className="prog-container">
       <CircularProgressbar className="prog-circle" strokeWidth={6} percentage={Math.floor(percent * 100)} />
     </div>
   );
  }
}

export default Progress;
