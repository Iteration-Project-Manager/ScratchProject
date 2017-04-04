import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import RemoveFeature from './RemoveFeature.jsx'

class Progress extends Component {
  render() {
    return (
     <div className="prog-container">
       <CircularProgressbar className="prog-circle" strokeWidth={6} percentage={38} />
     </div>
   );
  }
}

export default Progress;
