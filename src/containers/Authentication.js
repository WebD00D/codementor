import React from 'react';
import Auth from '../components/Authentication';
import base from '../base';

class Authentication extends React.Component{

  state = {
    uid: null,
  }

  componentDidMount(){
    base.onAuth((user) => {
      if (user){
        this.authHandler(null, {user});
      }
    })
  }

  authenticate = (provider) => {
    base.authWithOAuthPopup(provider, this.authHandler);
  };

  authHandler = (err, authData) =>{

    if (err){
      console.error(err);
      return
    }

    console.log(authData);

    this.setState({
        uid: authData.user.uid,
      })

  }

  render(){
    return(
        <div>
          <Auth onLogin={this.authenticate} />
        </div>
    )
  }
}

export default Authentication;
