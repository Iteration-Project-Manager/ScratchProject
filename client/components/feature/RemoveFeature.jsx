import React, { Component } from 'react';

class RemoveFeature extends Component {
  render() {
    return (
      <button className='remove-Feature' onClick={() => this.props.removeFeature(this.props.index)}>X</button>
    )
  }
}

export default RemoveFeature;
