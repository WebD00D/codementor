import React from 'react';

class Navigation extends React.Component{
  render(){
    return(
      <div className="dtc v-mid tr pa3">
        <a className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="/" >How it Works</a>
        <a className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="/" >Pricing</a>
        <a className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" href="/" >About</a>
        <a className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" href="/" >Become a Mentor</a>
        <a className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba" href="/" >Sign Up</a>
      </div>
    )
  }
}

export default Navigation
