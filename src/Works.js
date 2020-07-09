import React, { Component } from 'react';
import './Works.css';

class Works extends Component {
    render(){
          return(
              <div className="works">
                    <h3>Works</h3>
                    <h2>These all I do</h2>

                    <div class="row">
                          <Icons myIcon={iconObj[0].icon} myTitle={iconObj[0].title} myDescription={iconObj[0].description} />
                          <Icons myIcon={iconObj[1].icon} myTitle={iconObj[1].title} myDescription={iconObj[1].description} />
                          <Icons myIcon={iconObj[2].icon} myTitle={iconObj[2].title} myDescription={iconObj[2].description} />
                          <Icons myIcon={iconObj[3].icon} myTitle={iconObj[3].title} myDescription={iconObj[3].description} />


                    </div>
              </div>
          );
    }
}


const iconObj = [
          {
                icon: <i class="fas fa-laptop-code"></i>,
                title: 'Front-End Development',
                description: 'Serve something to help someone'
          },
          {
                icon: <i class="fab fa-blogger-b"></i>,
                title: 'Blogging',
                description: 'About life or stuff maybe movies, series...'
          },
          {
                icon: <i class="fas fa-cash-register"></i>,
                title: 'Story Writing',
                description: 'In English or Turkish writing stories'
          },
          {
                icon: <i class="fas fa-basketball-ball"></i>,
                title: 'Basketball Analysing',
                description: 'Once, wrote stories about match of the week by week'
          }
];

class Icons extends Component {
    render(){
          return(
                <div>
                      <span>  {this.props.myIcon}   </span>
                          <h4>  {this.props.myTitle}  </h4>
                          <p>    {this.props.myDescription} </p>
                </div>
          );
    }
}

export default Works;
