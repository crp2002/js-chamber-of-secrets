import React, { Component } from 'react';
import { render } from 'react-dom'

class Mode2 extends React.Component{
    constructor (props){
        super(props);
    }
    render(){
        return (
            <form>
                <div>
                    If you have the fundamentals covered, click the button to master your skills
                    <button type="button" onClick={this.props.goToMode2}></button>
                </div>
            </form>
        )
    }
}

export default Mode2;