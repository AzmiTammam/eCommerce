import { Component } from 'react';
import './App.css'
import SHOP_DATA from './shop.data';
class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      items: SHOP_DATA,
      cartItems: []
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Azmi
        </header>
      </div>
    );
  }

}

export default App;
