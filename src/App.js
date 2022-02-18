import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super() 
    this.state = {
      currentNum: '',
      previousNum: '',
      operation: '',
      result: null
    };
  }; 
  
  
  handleNumber = (event) => {    
    this.setState({ 
      currentNum: Number(this.state.currentNum + event.target.value)
      // currentNum: [...this.state.currentNum, event.target.value]
    });
  };

  handleReset = () => {
    this.setState({
      currentNum: '',
      previousNum: 0,
      operation: '',
      result: null
    });
  };
      
  handleOperation = (event) => {
    if (event.target.value === '=' && this.state.currentNum && this.state.previousNum) {
      this.handleResult();
    };    
    
    this.setState({
      // current becomes prev
      previousNum: Number(this.state.result) || Number(this.state.currentNum),
      // prev resets after operation
      currentNum: '',
      operation: event.target.value
    });
  };


  handleResult = () => {
    const { operation, previousNum, currentNum } = this.state;
    if (operation === 'add') this.setState({result: previousNum + currentNum})
    else if (operation === 'subtract') this.setState({result: previousNum - currentNum})
    else if (operation === 'multiply') this.setState({result: previousNum * currentNum})
    else if (operation === 'divide') this.setState({result: previousNum / currentNum})
    else window.alert(`Sorry, operation: ${operation} currently is not supported`)
  };
            
  render() {
    // console.log(this.state.currentNum)
    return (
      <div className='window'>
        <div></div>
        {/* <div>{this.state.result === null && this.state.currentNum}</div> */}
        <div className='calculator'>
            <div>Result: {this.state.result !== null && this.state.result}</div>
            <div className='display'>Current Number: {this.state.currentNum}</div>
            <button className="button operation" value="AC" onClick={this.handleReset}>AC</button>
            <button className="button operation" value="+/-" onClick={this.handleOperation}>+/-</button>
            <button className="button operation" value="%" onClick={this.handleOperation}>%</button>
            <button className="button operation" value="divide" onClick={this.handleOperation}>÷</button>
            <button className="button num" value="7" onClick={this.handleNumber}>7</button>
            <button className="button num" value="8" onClick={this.handleNumber}>8</button>
            <button className="button num" value="9" onClick={this.handleNumber}>9</button>
            <button className="button operation" value="multiply" onClick={this.handleOperation}>×</button>
            <button className="button num" value="4" onClick={this.handleNumber}>4</button>
            <button className="button num" value="5" onClick={this.handleNumber}>5</button>
            <button className="button num" value="6" onClick={this.handleNumber}>6</button>
            <button className="button operation" value="subtract" onClick={this.handleOperation}>-</button>
            <button className="button num" value="1" onClick={this.handleNumber}>1</button>
            <button className="button num" value="2" onClick={this.handleNumber}>2</button>
            <button className="button num" value="3" onClick={this.handleNumber}>3</button>
            <button className="button operation" value="add" onClick={this.handleOperation}>+</button>
            <button className="button num zero" value="0" onClick={this.handleNumber}>0</button>
            <button className="button operation" value="." onClick={this.handleOperation}>.</button>
            <button className="button operation" value="=" onClick={this.handleResult}>=</button>
        </div>
        <div></div>
      </div>
    );
  };
};

export default App;