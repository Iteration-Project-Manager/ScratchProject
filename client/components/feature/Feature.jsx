import React, { Component } from 'react';
import Timer from './Timer.jsx';
import Progress from './Progress.jsx';
import InfoBtn from './InfoBtn.jsx';
import RemoveFeature from './RemoveFeature.jsx';
import TaskInfo from './TaskInfo.jsx';
import axios from 'axios';

class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elapsed: this.props.elapsed,
      featureItems: [
        {
          "id": 4,
          "content": "First Test",
          "complete": false,
          "createdAt": "2017-04-04T18:19:56.399Z",
          "updatedAt": "2017-04-04T18:19:56.399Z",
          "featureId": 32
        },
        {
          "id": 5,
          "content": "Second Test",
          "complete": true,
          "createdAt": "2017-04-04T18:20:02.273Z",
          "updatedAt": "2017-04-04T18:20:02.273Z",
          "featureId": 32
        },
        {
          "id": 6,
          "content": "Third Test",
          "complete": false,
          "createdAt": "2017-04-04T18:20:02.609Z",
          "updatedAt": "2017-04-04T18:20:02.609Z",
          "featureId": 32
        },
      ],
      infoClicked: false 
    }

    // Each Feature will have its own pseudo state to update its timer
    let interval = setInterval(() => {
      if (this.state.elapsed >= this.props.deadline) {
        clearInterval(interval);
      } else {
        this.setState({ elapsed: this.state.elapsed + 1 });
      }
    }, 1000);

    this.infoClicked = this.infoClicked.bind(this);
    this.trackCompleteChange = this.trackCompleteChange.bind(this);
  }

  infoClicked() {
    let newClick = this.state.infoClicked ? { infoClicked: false } : { infoClicked: true };
    this.setState(newClick);
  }

  trackCompleteChange(ItemId, e) {
    let featureItems = this.state.featureItems.slice(0)
      .map((item, index) => {
      if (item.id === ItemId) {
        item.complete = !item.complete;
      };
      return item;
    });
    this.setState({ featureItems });
  }

  // changeCompletedState(featureId, itemId) {
  //   //app.put('/api/features/:featureId/items/:featureItemId', featureItemsController.update);

  //   axios
  //     .put(`/api/features/${featureId}/items/${itemId}`, {})
  //     .then((allFeatures) => {

  //       // calculates the total amount of time since the project was created and renders the correct time (red circle)
  //       for (let i = 0; i < allFeatures.data.length; i += 1) {
  //         let createdTime = Date.parse(allFeatures.data[i].createdAt);
  //         let currentTime = Date.now();
  //         let elapsed = (currentTime - createdTime) / 1000; // converts ms to secs
  //         allFeatures.data[i].elapsed = elapsed > allFeatures.data[i].duration ? allFeatures.data[i].duration : elapsed;
  //       }

  //       featuresList = allFeatures.data;

  //       this.setState({
  //         features: featuresList,
  //       })
  //     })

  // }

  render() {

    if (this.state.infoClicked) {
      return (
        <div className="feature-container">
          <h1 className="feature-header">{this.props.title}</h1>
          <div className="tracker-container">
            <RemoveFeature index={this.props.index} removeFeature={this.props.removeFeature} />
            <Timer duration={this.props.deadline} elapsed={this.state.elapsed} />
            <Progress featureItems={this.state.featureItems} />
            <InfoBtn infoClicked={this.infoClicked} text='Submit' />
          </div>
          <div>
            <TaskInfo featureItems={this.state.featureItems} trackCompleteChange={this.trackCompleteChange}/>
          </div>
        </div>
      );
    } else {
      return (
        <div className="feature-container">
          <h1 className="feature-header">{this.props.title}</h1>
          <div className="tracker-container">
            <RemoveFeature index={this.props.index} removeFeature={this.props.removeFeature} />
            <Timer duration={this.props.deadline} elapsed={this.state.elapsed} />
            <Progress featureItems={this.state.featureItems}/>
            <InfoBtn infoClicked={this.infoClicked} text='Update Tasks' />
          </div>
        </div>
      );
    }
  }
}

export default Feature;
