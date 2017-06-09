import fetch from 'isomorphic-fetch';
import React, { Component } from 'react';

class AppTo2 extends Component{
    constructor(props){
        super(props);
        this.state={
            question3:"",
            question4:""
        }
        this.getForm3Value = this.getForm3Value.bind(this);
        this.getForm4Value = this.getForm4Value.bind(this);
    }
    getForm3Value(e){
        let selection3 = e.target.value;
        if(selection3 === "object") this.setState({question3: true});
        else this.setState({question3: false});
    }
    getForm4Value(e){
        let selection4 = e.target.value;
        if(selection4 === "undefined_string") this.setState({question4: true});
        else this.setState({question4: false});
    }

    render(){
        let message3,  message4, lastMessage;
        if(this.state.question3 === true){
            message3 = (
                <div>
                    <em>Awesome!!</em><br></br>
                    <samp>Coding Bootcamp Secret #1: THERE ARE NO SECRETS!!<br></br>
                        Dedication is the key! You are on your way to a fantastic feature!!
                    </samp>
                </div>
            );
        }
        if (this.state.question3 === false){
            message3 = (<em>close..try another option</em>);
        }
        if(this.state.question4 === true){
            message4 = (
                <div>
                    <em>Outstanding!!</em><br></br>
                    <samp>Coding Bootcamp Secret #2: There isn't a #1 bootcamp. It all depends on what you want to do!<br></br>
                        Consider the following. Stack related to where you want to work, location (tech hub, close to you?), reviews, hiring rates,
                        class size, and the physical enviroment
                    </samp>
                </div>
            );
        }
        if(this.state.question4 === false){
            message4 = (<em>not quite</em>);
        }
        if(this.state.question3 === true && this.state.question4 === true){
            lastMessage = (
                <h1>Congratulations! you are a Master of JavaScript now!
                    You are ready to start building your own apps
                </h1>
            );
        }

        return (
            <div>
                <p>Alright! so, you think you are ready for some advanced stuff? Check the questions below</p>
                <form onChange={this.getForm3Value}>
                    <p> What will be the output of the following code?</p>
                    <code>{`(function(){
                            return typeof arguments;
                        })()`}
                    </code><br></br>
                    <input name="option3" type="radio" value="array" /> array <br></br>
                    <input name="option3" type="radio" value="undefined" /> undefined <br></br>
                    <input name="option3" type="radio" value="arguments" /> arguments <br></br>
                    <input name="option3" type="radio" value="string" /> string <br></br>
                    <input name="option3" type="radio" value="object" /> 'object' <br></br>
                </form>
                    {message3}

                <form onChange={this.getForm4Value}>
                    <p>What is the result of executing... </p>
                      <code>
                          var y = 1, x = y = typeof x;<br></br>
                          x;
                    </code><br></br>
                    <input name="option4" type="radio" value="array" /> 1 <br></br>
                    <input name="option4" type="radio" value="undefined" /> 'number' <br></br>
                    <input name="option4" type="radio" value="undefined" /> undefined <br></br>
                    <input name="option4" type="radio" value="undefined_string" /> 'undefinded' <br></br>
                    <input name="option4" type="radio" value="y" /> y <br></br>
                </form>
                {message4}
                {lastMessage}

            </div>
        )
    }
}
export default AppTo2;