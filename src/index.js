import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import './css/style.css';
import App from './components/App';
import Home from './components/Home';
import NotFound from './components/NotFound';
import MentorSignup from './components/MentorSignup';
import Authentication from './containers/Authentication';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match  pattern="/" component={App} /> {/* will show on every page */}
        <Miss component={NotFound} /> {/* if no url is a match */}
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.getElementById('root'));
