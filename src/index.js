import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import './css/style.css';
import App from './components/App';
import Main from './components/Main';
import NotFound from './components/NotFound';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match pattern="/" component={Main} /> {/* will show on every page */}
        <Match exactly pattern="/app" component={App} /> {/* will only show on 'exactly' the /app page */}
        <Miss component={NotFound} /> {/* if no url is a match */}
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.getElementById('root'));
