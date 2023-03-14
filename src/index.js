import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './Store';
import { Provider } from 'react-redux';
// import {ErrorBoundary} from 'react-error-boundary'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <ErrorBoundary fallback={<div>ERROR</div>}>
      <Provider store={store}>
          <App />
      </Provider>
  /* </ErrorBoundary> */
);
