import React, { Component } from 'react'
import Counter from './components/Counter';
import './App.css';

class App  extends Component {

  constructor(){
    super();

    this.state ={
      total: 0,
    }
  }

  changeTotal(number,method){
    if(method === 'increase'){
      this.setState(prevState => ({total: prevState.total + number}))
    }
    
    if(method === 'decrease'){
      this.setState(prevState => ({total: prevState.total - number}))
    }
  }


  render(){
    return (
      <div className="App">
        <div className='container'>
          <Counter initialCount='4' changeTotal={(number,method)=>this.changeTotal(number,method)}/>
          <Counter initialCount='6' changeTotal={(number,method)=>this.changeTotal(number,method)}/>
          <Counter initialCount='10' changeTotal={(number,method)=>this.changeTotal(number,method)}/>
          <Counter changeTotal={(number,method)=>this.changeTotal(number,method)} />
          <h1>{`Total Amount ${this.state.total}`}</h1>
        </div>
      </div>
    );
  }
}

export default App;
