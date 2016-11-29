import React from 'react';
import UnAuth from './unAuthenticated';
import { BrowserRouter, Match, Miss, Redirect } from 'react-router';

class Welcome extends React.Component{

  render(){
    return(
      <div>
        <div className="home-page">
          <div className="home-page__sub-header avenir">Homepage</div>
        </div>
      </div>
    )
  }
}


export default Welcome;
