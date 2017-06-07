import fetch from 'isomorphic-fetch';
import React, { Component } from 'react';
import Mode from './Mode';
import Mode2 from './Mode2';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      goToMode1: this.goToMode1,
      goToMode2: this.goToMode2
    }
  }
  goToMode1(){
    window.location = '/Mode1';
    
  }
  goToMode2(){
    window.location = '/Mode2';
  }

  render() {
    return (
      <div>
        <div id="gameBoard">Welcome!</div>
          <div>
            <Mode goToMode1={this.state.goToMode1}/>
            <Mode2 goToMode2={this.state.goToMode2}/>
          </div>
      </div> 
    );
  }
}

export default App;
