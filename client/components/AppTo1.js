import fetch from 'isomorphic-fetch';
import React, { Component } from 'react';

class AppTo1 extends Component{
    constructor(props){
        super(props);
        this.state={
            question1:"",
            question2:""
        }
        this.getForm1Value = this.getForm1Value.bind(this);
        this.getForm2Value = this.getForm2Value.bind(this);
    }
    getForm1Value(e){
        let selection1 = e.target.value;
        if(selection1 === "0") this.setState({question1: true});
        else this.setState({question1: false});
    }

    getForm2Value(e){
        let selection2 = e.target.value;
        if(selection2 === "number") this.setState({question2: true});
        else this.setState({question2: false});
    }

    render(){
        let message1, message2, nextLevel;
        if(this.state.question1 === true){
            message1 = (<em>that is CORRECT!!</em>);
        }
        if (this.state.question1 === false){
            message1 = (<em>nope</em>);
        }
        if(this.state.question2 === true){
            message2 = (<em>well DONE!!</em>);
        }
        if(this.state.question2 === false){
            message2 = (<em>incorrect, try again...</em>);
        }
        if(this.state.question1 === true && this.state.question2 === true){
            nextLevel = (<button type="button"><a href="/Mode2">Continue</a></button>)
        }

        return(
        <div>    
            <form onChange={this.getForm1Value}>
                <p> Which one of the following is considered falsy in JavaScript? </p>
                <input name="option" type="radio" value="[]" /> [] <br></br>
                <input name="option" type="radio" value="-42" /> -42 <br></br>
                <input name="option" type="radio" value="-Infinity" /> -Infinity <br></br>
                <input name="option" type="radio" value="true" /> true <br></br>
                <input name="option" type="radio" value="0" /> 0 (zero) <br></br>
                {message1}
            </form>
            <form onChange={this.getForm2Value}>
                <p> What will be the output of the following expression in JavaScript?</p>
                <code>typeof NaN</code><br></br>
                <input name="option2" type="radio" value="undefined" /> "undefined" <br></br>
                <input name="option2" type="radio" value="object" /> object <br></br>
                <input name="option2" type="radio" value="undefined" /> undefined <br></br>
                <input name="option2" type="radio" value="number" /> 'number' <br></br>
                <input name="option2" type="radio" value="null" /> null <br></br>
                {message2}
            </form>
            {nextLevel}
         </div> 
        );
    }
}


export default AppTo1;