import React from 'react';
import ReactDOM from 'react-dom';
import TunesContainer from './containers/TunesContainer.jsx';

window.addEventListener('load', () => {
  const targetDiv = document.getElementById('app');
  ReactDOM.render(<h1> iTunes Top 20 </h1>, targetDiv);
});
