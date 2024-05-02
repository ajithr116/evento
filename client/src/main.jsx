import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from "react-dom/client"
import { Provider } from 'react-redux';
import store from './redux/store'; // Import your Redux store
import App from './App';

createRoot(document.getElementById('root')).render( // Use createRoot from "react-dom/client"
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
