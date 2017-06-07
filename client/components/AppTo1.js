import fetch from 'isomorphic-fetch';
import React, { Component } from 'react';

class AppTo1 extends Component{
    constructor(props){
        super(props);
        this.state={
            questions: ['Write a function that returns a string that represents your first name','Sort [3, -1] in ascending order. Hint use sort()'],
            value: ''
        }
    }

    render(){
        return (
            <div>
            <Challenge questions={this.state.questions}/>
            <form>
                <input type="text"></input>
                <input type="submit" value="Submit"></input>
            </form>    
            </div>
        )
    }
}

class Challenge extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <p>{this.props.questions[0]}</p>
            </div>
        )
    }
}
export default AppTo1;