import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';

class Progress extends Component {
  render() {
    return (
     <div className="prog-container">
       <CircularProgressbar className="prog-circle" strokeWidth={6} percentage={0} />
     </div>
   );
  }
}

export default Progress;
