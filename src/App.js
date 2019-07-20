import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainNavbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import SignUpSignIn from './components/auth/SignUpSignIn';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: false,
      playStatus: false
    }
  }

  playBtnClick = () => {
    this.setState({ playStatus: true });
  }


  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <MainNavbar auth={this.state.authenticated} playBtnClick={this.playBtnClick}/>
          {this.state.authenticated ?
            <Switch>
              <Route exact path="/" render={(props) => <Dashboard {...props} play={this.state.playStatus} />} />
            </Switch>
            :
            <SignUpSignIn />
          }
        </div>
      </BrowserRouter>
    );
  }
} 

export default App;
