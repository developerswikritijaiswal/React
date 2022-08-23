import React, { Component } from 'react'

export default class LifecycleB extends Component {
    constructor(){
        super();
        this.state ={
            message:'Lifecycle'
        }
    }
    static getDerivedStateFromProps(){
        console.log('Lifecycle B getDerivedStateFromProps')
        return null;
    }
    componentDidMount(){
        console.log('Lifecycle B componentDidMount')
    }
    // updating start
    shouldComponentUpdate(){
        console.log('Lifecycle B shouldComponentUpdate');
        return true;
      }
      getSnapshotBeforeUpdate(){
        console.log('Lifecycle B getSnapshotBeforeUpdate');
        return null;
      }
      componentDidUpdate(){
        console.log('Lifecycle B componentDidUpdate')
      }
       // updating end
  render() {
    console.log('Lifecycle B render')
    return (
      <div>
        
      </div>
    )
  }
}
