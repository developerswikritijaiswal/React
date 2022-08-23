import React, { Component } from 'react'
import LifecycleB from './LifecycleB';
export default class LifecycleA extends Component {
    constructor(props){
        super(props);
        this.state ={
            message:'Lifecycle'
        }
    }
    static getDerivedStateFromProps(){
        console.log('Lifecycle A getDerivedStateFromProps')
        return null;
    }
    componentDidMount(){
        console.log('Lifecycle A componentDidMount')
    }

    // updating start
    shouldComponentUpdate(){
      console.log('Lifecycle A shouldComponentUpdate');
      return true;
    }
    getSnapshotBeforeUpdate(){
      console.log('Lifecycle A getSnapshotBeforeUpdate');
      return null;
    }
    componentDidUpdate(){
      console.log('Lifecycle A componentDidUpdate')
    }
     // updating end
     LifeCycleClick(){
       this.setState({
        message : 'Event LifeCycle'
      })
     }
  render() {
    console.log('Lifecycle A render')
    return (
      <div>
         <p>{this.state.message}</p>
        <button onClick={()=>this.LifeCycleClick()}>LifeCycle</button>
        <LifecycleB></LifecycleB>
      </div>
    )
  }
}
