import { Component } from 'react';
import './App.css'
import SHOP_DATA from './shop.data';
import {Route, Switch,Redirect,withRouter} from "react-router-dom"
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/footer';
import HomePage from './pages/home/homepage.component';
import SignInPage from './pages/sign-in/sign-in.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout-page.component';
import Profile from './pages/profile/profile';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: SHOP_DATA,
      cartItems: [],
      currentUser: null,
      hidden: true
    }

   
  }
  signOut = () => {
    this.setState({currentUser: null})
  }

  handleHidden = () => {
    this.setState({hidden: !this.state.hidden})
  }
  changeHiddenOnce = () => {
    this.setState({hidden: true})
  }


  removeItemFromCart = (item) => {
    const localCart = JSON.parse(localStorage.getItem("users"))
    localCart.forEach(user => {
        if(user.username === this.state.currentUser.username && user.password === this.state.currentUser.pass){
            const existingCartItem = user.cartItems.find(cartItem => cartItem.id === item.id)
            if(existingCartItem.quantity === 1){
               user.cartItems.splice(user.cartItems.indexOf(existingCartItem),1)
               localStorage.setItem("users" , JSON.stringify(localCart))
            } else {
                user.cartItems.map(cartItem => cartItem.id === item.id ? cartItem.quantity -=1 : cartItem) 
                localStorage.setItem("users" , JSON.stringify(localCart))   
            }

        }
    })
    this.setState({})
}

removeEverything = () => {
  const localUsers = JSON.parse(localStorage.getItem("users"))
    let cart;
    localUsers.forEach(user => {
        if(user.username === this.state.currentUser.username && user.password === this.state.currentUser.pass){
            cart = user.cartItems
            cart.splice(0,cart.length )
            localStorage.setItem("users", JSON.stringify(localUsers))
            alert("Thank you for buying from us")
            this.setState({})
        }
    })
}

  addToCart = (item) => {
    if(this.state.currentUser){
      const localCart = JSON.parse(localStorage.getItem("users"))
      localCart.forEach(user => {
          if(user.username === this.state.currentUser.username && user.password === this.state.currentUser.pass){
              const existingCartItem = user.cartItems.find(
                  cartItem => cartItem.id === item.id
              )
          
              if(existingCartItem){
                 user.cartItems.map(cartItem => cartItem.id === item.id ? cartItem.quantity +=1 : cartItem)
                 localStorage.setItem("users" , JSON.stringify(localCart))
              } else {
                user.cartItems.push({...item, quantity: 1})
                localStorage.setItem("users" , JSON.stringify(localCart))
              }
          }
      })
      this.setState({})
    } else {
      this.props.history.push({
        pathname: "/login",
      });
    }
}

  handleCurrentUser = (userName,password) => {
    this.setState({currentUser: {username: userName, pass: password}})
  }
  removeCompletely = (item) => {
    const localCart = JSON.parse(localStorage.getItem("users"))
      localCart.forEach(user => {
          if(user.username === this.state.currentUser.username && user.password === this.state.currentUser.pass){
              const existingCartItem = user.cartItems.find(
                  cartItem => cartItem.id === item.id)
                  user.cartItems.splice(user.cartItems.indexOf(existingCartItem),1)
                  localStorage.setItem("users" , JSON.stringify(localCart))
          }
      })
      this.setState({})
  }



  render() {
    
    return (
      <div className="App">
      <NavBar currentUser={this.state.currentUser} hidden={this.state.hidden} changeHiddenOnce={this.changeHiddenOnce} handleHidden={this.handleHidden} signOut={this.signOut} removeCompletely={this.removeCompletely}/>
      <Switch>
        <Route exact path="/" >
          <HomePage addToCart={this.addToCart} items={this.state.items} currentUser={this.state.currentUser} />
        </Route>
        <Route exact path="/shop" >
          <ShopPage items={this.state.items} currentUser={this.state.currentUser} addToCart={this.addToCart} />
        </Route>
        <Route exact path="/profile" >
          <Profile currentUser={this.state.currentUser} />
        </Route>
        <Route exact path="/checkout" render={() => this.state.currentUser ? (<CheckoutPage removeEverything={this.removeEverything} addToCart={this.addToCart} removeItemFromCart={this.removeItemFromCart} removeCompletely={this.removeCompletely} currentUser={this.state.currentUser} />) : (<Redirect to="/" />) }  />
        <Route exact path="/login" render={() => this.state.currentUser ? (<Redirect to="/" />) : (<SignInPage  handleCurrentUser={this.handleCurrentUser} />) }  />
      </Switch>
      <Footer  />
    </div>
    );
  }
}

export default withRouter(App);

