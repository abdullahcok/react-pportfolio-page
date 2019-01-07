import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
  render() {
      const sections = ['Home', 'About', 'Works', 'Stories', 'Blogging'];
      const navLinks = sections.map(section => {
            return(
                  <li><a href={'#' + section}>{section}</a></li>
            );
      });
    return (
          <nav>
                <h2 class="logo">{this.props.LogoTitle}</h2>
                <ul>
                        {navLinks} 
                </ul>
          </nav>
    );
  }
}

export default Navigation;
