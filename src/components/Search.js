import React from 'react';
import UnAuth from './unAuthenticated';
import { BrowserRouter, Match, Miss, Redirect } from 'react-router';
import Mentor from './Mentor';

class Search extends React.Component{


  componentWillMount(){
    console.log(this.props);
  }

  render(){

    if ( !this.props.uid ){
        return (
          <Redirect to={'/home'} />
        )
    }
    return(
      <div className="app-container app-container__search">
        <div className="home-page">
          <div className="home-page__sub-header avenir">Salt Lake City</div>
          <div className="mentors">
            {
              Object
              .keys(this.props.mentors)
                .map(key => <Mentor key={key} details={this.props.mentors[key]} />)
            }
          </div>
        </div>
      </div>
    )
  }
}


export default Search;
