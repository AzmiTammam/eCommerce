import { Component } from 'react';
import './App.css'
import SHOP_DATA from './shop.data';
import {Route, Switch,Redirect} from "react-router-dom"
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/footer';
import HomePage from './pages/home/homepage.component';
import Register from './components/Sign/Register';
import Login from './components/Sign/Login';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: SHOP_DATA,
      cartItems: [],
      currentUser: null,

    }
    
  }
  render() {
    
    return (
      <div className="App">
        <NavBar  />
        <Switch>
          <Route exact path="/" >
            <HomePage items={this.state.items}  />
          </Route>
          <Route exact path="/register" >
            <Register  />
          </Route>
          <Route exact path="/login" render={() => this.state.currentUser ?(<Redirect to="/"  />) : (<Login  />) }  />
        </Switch>
        <Footer  />
      </div>
    );
  }
}

export default App;

