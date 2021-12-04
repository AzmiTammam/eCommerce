import { Component } from "react";
import "./App.css";
import SHOP_DATA from "./shop.data";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/footer";
import Profile from "./pages/profile/Profile";
import HomePage from "./pages/home/homepage.component";
import SignInPage from "./pages/sign-in/sign-in.component";
import Login from "./components/Sign/Login";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: SHOP_DATA,
      cartItems: [],
      currentUser: null,
    };
  }

  handleCurrentUser = (userName, password) => {
    this.setState({ currentUser: { username: userName, pass: password } });
  };

  render() {
    return (
      <div className="App">
        <NavBar currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/">
            <HomePage
              items={this.state.items}
              currentUser={this.state.currentUser}
            />
          </Route>
          <Route
            exact
            path="/login"
            render={() =>
              this.state.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInPage handleCurrentUser={this.handleCurrentUser} />
              )
            }
          />
          <Route exact path="/profile">
            <Profile currentUser={this.state.currentUser} />
          </Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
