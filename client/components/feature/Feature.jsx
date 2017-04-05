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
      infoClicked: false,
      newFeatureItem: '',
      featureItems: [],

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
    this.trackNewFeatureItem = this.trackNewFeatureItem.bind(this);
    this.addNewTask = this.addNewTask.bind(this);
    this.submitFeatureChanges = this.submitFeatureChanges.bind(this);
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

  trackNewFeatureItem(e) {
    this.setState({ newFeatureItem: e.target.value }, () => { console.log(this.state.newFeatureItem) });

  }

  addNewTask() {
    console.log('storing new item');
    let newFeatureItems = this.state.featureItems.slice(0);
    newFeatureItems.push({
      "content": this.state.newFeatureItem,
      "complete": false,
    });
    this.setState({ featureItems: newFeatureItems })
    this.setState({ newFeatureItem: '' }, () => {
    });

  }

  submitFeatureChanges() {
    //   //app.put('/api/features/:featureId/items/:featureItemId', featureItemsController.update);
    //for each object in array
    //if there is an ID, if 
    console.log('submitting changes');
    let featureItems = this.state.featureItems;
    console.log('feature items ', featureItems)
    for (let i = 0; i < featureItems.length; i += 1) {
      if (featureItems[i].id) {
        axios
          .put(`/api/features/${this.props.featureId}/items/${featureItems[i].id}`, {complete: featureItems[i].complete})
          .then(() => {
          })
      } else {
        axios
        .post(`/api/features/${this.props.featureId}/items`, featureItems[i])
        .then(() => {
          console.log('successfully posted new item to DB')
        })
      }
    }
  }

  componentWillMount() {
    if(this.props.featureItems) {
      this.setState({featureItems: this.props.featureItems})
    }
  }

  render() {

    if (this.state.infoClicked) {
      return (
        <div className="feature-container">
          <h1 className="feature-header">{this.props.title}</h1>
          <div className="tracker-container">
            <RemoveFeature index={this.props.index} removeFeature={this.props.removeFeature} />
            <Timer duration={this.props.deadline} elapsed={this.state.elapsed} />
            <Progress featureItems={this.state.featureItems} />
            <InfoBtn infoClicked={this.infoClicked} submitFeatureChanges={this.submitFeatureChanges} text='Submit' />
          </div>
          <div>
            <TaskInfo newFeatureItem={this.state.newFeatureItem} featureItems={this.state.featureItems} trackCompleteChange={this.trackCompleteChange} trackNewFeatureItem={this.trackNewFeatureItem} addNewTask={this.addNewTask} />
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
            <Progress featureItems={this.state.featureItems} />
            <InfoBtn infoClicked={this.infoClicked} text='Update Tasks' />
          </div>
        </div>
      );
    }
  }
}

export default Feature;
