import React from 'react';
import Header from './Header';

class Authentication extends React.Component{
  render(){
    return(
        <div>
          <button onClick={()=> this.props.onLogin('facebook')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" >Sign Up with Facebook</button>
        </div>
    )
  }
}

export default Authentication;
