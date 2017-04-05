import React, { Component } from 'react';

class InfoBtn extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
     <div className="info-btn">
       <button type="button" className="update-btn" onClick={()=>{this.props.infoClicked(); if(this.props.submitFeatureChanges){this.props.submitFeatureChanges()}}}>{this.props.text}</button>
     </div>
   );
  }
}

export default InfoBtn;
