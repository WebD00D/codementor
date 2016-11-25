import React, { Component } from 'react';
import CitySelector from './CitySelector';
import MentorViewer from './MentorViewer';

class App extends Component {
  render() {
    return (
      <div>
        <div className="app-container">
          <CitySelector />
          <MentorViewer />
        </div>


      </div>
    );
  }
}

export default App;
