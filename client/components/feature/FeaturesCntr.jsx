import React, { Component } from 'react';
import Feature from './Feature.jsx';

class FeaturesCntr extends Component {
  render() {
    const featureArr = this.props.featuresArray.map((feature, index) => {
      return <Feature key={index} removeFeature={this.props.removeFeature} index={index} title={feature.title} deadline={feature.duration} elapsed={feature.elapsed} />
    }); // redundant index prop value
    console.log('-----Features in FeaturesCntr.jsx-----');
    console.log(featureArr);
    return (
      <div id="features-ctnr">
        {featureArr}
      </div>
    );
  }
}

export default FeaturesCntr;
