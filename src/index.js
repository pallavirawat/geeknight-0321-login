import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Modal from 'react-modal';

// import reportWebVitals from './reportWebVitals';

function bootstrap(id) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById(id)
  );
  Modal.setAppElement('#'+id);
}
window.loginBootstrap = bootstrap;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
