import React, { Component } from 'react';
import './Header.css';
import Background from './img/bg.jpg';

const stuffStyles = {
        backgroundImage: `url( ${Background} )`,
        height: '56.3vh'
  }

class Header extends Component {

     render(){
            return(
                  <header style={stuffStyles}>
                        <h1>{this.props.title}</h1>
                        <p>Are you ready to read stuff?</p>
                        <a href="#button">{this.props.button}</a>
                  </header>
            );
      }
};

export default Header;
