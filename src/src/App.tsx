import 'babel-polyfill';
import * as React from 'react';
import './App.css';
import Profile from './containers/Profile';
import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React and oidc-client-js</h1>
        </header>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <Profile />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
