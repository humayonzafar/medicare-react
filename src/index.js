import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
ReactDOM.render(
    <App/>,
  document.getElementById('root')
);
const configuration = {
    onUpdate: (registration) => {
        if (registration && registration.waiting) {
            if (window.confirm('New version available!  refresh to update your app?')) {
                registration.waiting.postMessage({ type: 'SKIP_WAITING' });
                window.location.reload();
            }
        }
    }
};
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register(configuration);
