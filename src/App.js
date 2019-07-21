import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import MainNavbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import SignUpSignIn from './components/auth/SignUpSignIn';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  playBtnClick = () => {
    this.setState({ playStatus: true });
  }


  render() {
    const { auth } = this.props;

    return (
      <BrowserRouter>
        <div className="App">
          <MainNavbar />
          {auth.uid ?
            <Switch>
              <Route exact path="/" render={(props) => <Dashboard {...props} />} />
            </Switch>
            :
            <SignUpSignIn />
          }
        </div>
      </BrowserRouter>
    );
  }
} 

const mapStateToProps = (state) => {
  return {
      auth: state.firebase.auth
  }
}


export default connect(mapStateToProps)(App);
