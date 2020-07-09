import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Navigation from './Navigation';
import Header from './Header';
import Works from './Works';
import * as serviceWorker from './serviceWorker';

class App extends Component{
    render(){
          return(
                <div>
                    <Navigation LogoTitle="Abdullah Çok Personal Portfolio Homepage"/>
                    <Header title="Welcome here..." button="Then follow me..."/>
                    <Works/>
                </div>
          );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.unregister();
