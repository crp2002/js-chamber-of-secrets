import React, { Component } from 'react';
import { render } from 'react-dom'

class Mode extends React.Component{
    constructor (props){
        super(props);
    }
    render(){
        return (
            <form>
                <div>
                    Your journey to JS starts here, click the button to practice JS and discover cool secrets
                    <button type="button" onClick={this.props.goToMode1} ></button>
                </div>
            </form>
        )
    }
}

export default Mode;