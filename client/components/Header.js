import React, { Component } from 'react';
import { render } from 'react-dom'

class Header extends React.Component{
    render(){
        let imageLink = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2000px-Unofficial_JavaScript_logo_2.svg.png'
        return (
            <header>
                <h1>JavaScript Chamber of Secrets</h1>
                <img src={imageLink} height={42} width={42}></img>
            </header>
        )
    }
}

export default Header;