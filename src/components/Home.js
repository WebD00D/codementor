import React from 'react';
import Header from './Header';
import {Link} from 'react-router';

class Home extends React.Component{
  render(){
    return(
      <div>
        <Header>
          <div className="tc-l mt4 mt5-m mt6-l ph3">
            <h1 className="f2 f1-l fw2 white-90 mb0 lh-title">Find Local Programming Mentors</h1>
            <h2 className="fw1 f3 white-80 mt3 mb4">Up your dev game with in person training right in your city.</h2>
            <Link to="/app" className={"f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3"}>
              Find a Mentor
            </Link>
            <span className="dib v-mid ph3 white-70 mb3">or</span>
            <Link to="/mentor-signup" className={"f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3"}>
              Become a Mentor
            </Link>

          </div>
        </Header>
        <div className="content-container content-container--home">
          <div className="city-wrap">
            <div className="city-wrap__city city-wrap__city--sanfrancisco">
              <div className="city-wrap__overlay"></div>
              <div className="city-wrap__name">San Francisco</div>
            </div>
            <div className="city-wrap__city city-wrap__city--saltlakecity">
              <div className="city-wrap__overlay"></div>
              <div className="city-wrap__name">Salt Lake City</div>
            </div>
          </div>
          <div className="city-wrap">
            <div className="city-wrap__city city-wrap__city--richmond">
              <div className="city-wrap__overlay"></div>
              <div className="city-wrap__name">Richmond</div>
            </div>
            <div className="city-wrap__city city-wrap__city--newyork">
              <div className="city-wrap__overlay"></div>
              <div className="city-wrap__name">New York City</div>
            </div>
            <div className="city-wrap__city city-wrap__city--portland">
              <div className="city-wrap__overlay"></div>
              <div className="city-wrap__name">Portland</div>
            </div>
          </div>
          <div className="city-wrap">
            <div className="city-wrap__city city-wrap__city--austin">
              <div className="city-wrap__overlay"></div>
              <div className="city-wrap__name">Austin</div>
            </div>
            <div className="city-wrap__city city-wrap__city--losangeles">
              <div className="city-wrap__overlay"></div>
              <div className="city-wrap__name">Los Angeles</div>
            </div>
            <div className="city-wrap__city city-wrap__city--seattle">
              <div className="city-wrap__overlay"></div>
              <div className="city-wrap__name">Seattle</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
