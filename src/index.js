import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div>
    <p>"Hello <strong>Bilal"!</strong></p>
    <p>My age is {10+9} years</p>
    <h1>List of pre-requisite languages for this bootcamp</h1>
    <ol>
      <li>HTML</li>
      <li>CSS</li>
      <li>javaScript</li>
    </ol>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
