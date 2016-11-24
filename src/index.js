import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import './css/style.css';
import App from './components/App';
import Home from './components/Home';
import NotFound from './components/NotFound';
import MentorSignup from './components/MentorSignup';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={Home} /> {/* will show on every page */}
        <Match exactly pattern="/app" component={App} /> {/* will only show on 'exactly' the /app page */}
        <Match exactly pattern="/mentor-signup" component={MentorSignup} />
        <Miss component={NotFound} /> {/* if no url is a match */}
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.getElementById('root'));
