import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import Test from './Test';
import App from './App';
import HelloComponent from './components/HelloComponent';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import StateFullComponent from './container/StateFullComponent';

ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(<HelloComponent />, document.getElementById('root'));


// ReactDOM.render(<StateFullComponent />, document.getElementById('root'));

// Stateless Component
// function HelloComponent() {
//     return <p>Hello Component</p>
// }

// ReactDOM.render(<HelloComponent />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
