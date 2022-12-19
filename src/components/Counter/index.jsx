import React, { Component } from 'react'
import './style.css'

export default class Counter extends Component {

  constructor(){
    super();

    this.state ={
      count: 0,
    }
  }

  render() {

    const increment= () => {
      if(this.props.initialCount){
        this.setState(prevState => ({
          count: prevState.count + Number(this.props.initialCount)
        }))
        this.state.count>=0 && this.props.changeTotal(Number(this.props.initialCount),'increase')
      }else{
        this.setState(prevState => ({
          count: prevState.count + 1
        }))
        this.state.count>=0 && this.props.changeTotal(1,'increase')
      }
    }

    const decrement = () =>{
      if(this.props.initialCount){
        if(this.state.count > 0){
          this.setState(prevState => ({count: prevState.count - Number(this.props.initialCount)}))
          this.props.changeTotal(Number(this.props.initialCount),'decrease')
        }
      }else{
        if(this.state.count > 0){
          this.setState(prevState => ({
            count: prevState.count - 1
          }))
          this.props.changeTotal(1,'decrease')
        }
      }
    }
    
    return ( 
      <div className='counter-container'>
        <div className='counter-number'>{this.state.count}</div>
        <button  className='counter-decrease' onClick={decrement}>-</button>
        <button  className='counter-increase' onClick={increment}>+</button>
      </div>
    )
  }
}
