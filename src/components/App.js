import React, { Component } from 'react';
import Navigation from './Navigation';

class App extends Component {
  render() {
    return (
      <header className="sans-serif">
        <div className="cover bg-left bg-center-l mainbg" >
          <div className="bg-black-80 pb5 pb6-m pb7-l">
            <nav className="dt w-100 mw8 center">
              <div className="dtc w2 v-mid pa3">
                <a href="/" className="dib w2 h2 pa1 ba b--white-90 grow-large border-box logo">
                  Startup
                </a>
              </div>
              <Navigation />
            </nav>
            <div className="tc-l mt4 mt5-m mt6-l ph3">
              <h1 className="f2 f1-l fw2 white-90 mb0 lh-title">Find Local Programming Mentors</h1>
              <h2 className="fw1 f3 white-80 mt3 mb4">Up your dev game with in person training right in your city.</h2>
              <a className="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3" href="/app">Find a Mentor</a>
              <span className="dib v-mid ph3 white-70 mb3">or</span>
              <a className="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3" href="">Become a Mentor</a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default App;
