import { Component } from 'react';
import './App.css'
import SHOP_DATA from './shop.data';
import {Route, Switch,Redirect} from "react-router-dom"



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: SHOP_DATA,
      cartItems: []
    }
    
  }
  render() {
    
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;

