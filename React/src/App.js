import React, { Component } from 'react';
import Header from './header';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      data : 0
    }

  this.setNumber = this.setNumber.bind(this)
  };

  setNumber(){
    this.setState({
      data : this.state.data + 1
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick = {this.setNumber}>Increment</button>
        <Header  myNumber= {this.state.data}/>
        </div>
    );
  }
}

export default App;
