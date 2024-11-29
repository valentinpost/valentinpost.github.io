import React from 'react';
import ReactDOM from 'react-dom';
import App  from './components/App';
import reportWebVitals from './components/reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
  <BrowserRouter>
    <App /> {/* The various pages will be displayed by the `Main` component. */}
  </BrowserRouter>
  ), document.getElementById('root')
)