import React from 'react';
import Header from './Header';
import {Link} from 'react-router';

class MentorSignup extends React.Component{
  render(){
    return(
      <div>
        <Header>
          <div className="tc-l mt4 mt5-m mt6-l ph3">
            <h1 className="f2 f1-l fw2 white-90 mb0 lh-title">Become a Mentor</h1>
            <h2 className="fw1 f3 white-80 mt3 mb4 lh-title">Share your passion and knowledge for code <br /> with people right in your city.</h2>
          </div>
        </Header>
        <div className="content-container content-container--form">

          <article className="pa4 black-80">
            <form action="sign-up_submit" method="get">
              <h3 className="fw1 f5 black-80 mt3 mb4 lh-title form-title">To join our mentor Beta program, fill out the short form below.</h3>
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <div className="mt3">
                  <label className="db fw4 lh-copy f6">First Name</label>
                  <input className="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address"  id="email-address" />
                </div>
                <div className="mt3">
                  <label className="db fw4 lh-copy f6">Last Name</label>
                  <input className="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address"  id="email-address" />
                </div>
                <div className="mt3">
                  <label className="db fw4 lh-copy f6">City</label>
                  <select className="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address"  id="email-address">
                    <option>Richmond, VA</option>
                    <option>Salt Lake City, UT</option>
                  </select>
                </div>

                <div className="mt3">
                  <label className="db fw4 lh-copy f6">Email address</label>
                  <input className="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address"  id="email-address" />
                </div>
                <div className="mt3">
                  <label className="db fw4 lh-copy f6">Password</label>
                  <input className="b pa2 input-reset ba bg-transparent" type="password" name="password"  id="password"/>

                </div>
              </fieldset>
              <div className="mt3"><input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Sign Up"/></div>
            </form>
          </article>
        </div>
      </div>
    )
  }
}

export default MentorSignup;
