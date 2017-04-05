import React, { Component } from 'react';
import InfoBtn from './InfoBtn.jsx';

class TaskInfo extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let featureItemArr = this.props.featureItems.map((featureItem, index) => {

            if (featureItem.complete) {
                return (
                    <div key={`container-${index}`}>
                        <input type="checkbox" key={index} defaultChecked onChange={()=>{this.props.trackCompleteChange(featureItem.id)}}/>
                        {featureItem.content}
                    </div>
                );
            }
            return (
                <div key={`container-${index}`}>
                    <input type="checkbox" key={index} onChange={()=>{this.props.trackCompleteChange(featureItem.id)}}/>
                    {featureItem.content}
                </div>
            );
        });
        return (
            <div className="TaskInfo">
                {featureItemArr}
                <input type="text" onChange={this.props.trackNewFeatureItem} value={this.props.newFeatureItem}/><button onClick={this.props.addNewTask}>Add New Task</button>
            </div>
        )
    }
}

export default TaskInfo;