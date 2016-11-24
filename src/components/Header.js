import React from 'react';
import Navigation from './Navigation';

class Header extends React.Component{
  render(){
    return(
      <header className="sans-serif">
        <div className="cover bg-left bg-center-l mainbg" >
          <div className="bg-black-80 pb5 pb6-m">
            <nav className="dt w-100 mw8 center">
              <div className="dtc w2 v-mid pa3">
                <a href="/" className="dib w2 h2 pa1 ba b--white-90 grow-large border-box logo">
                  Startup
                </a>
              </div>
              <Navigation />
            </nav>
            {/* Pass in header title, and details. */}
            {this.props.children}
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
