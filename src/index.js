import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  {Provider} from 'react-redux'
import { Auth0Provider } from "@auth0/auth0-react";

import store from './redux/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain="dev-txm0yen2uzlltz78.us.auth0.com"
  clientId="rFp3KhsG7Nbw0jUTkd16k4ujtX2NFyd1"
  redirectUri={window.location.origin}
>
    <Provider store={store}>
    <App />
    </Provider>
    </Auth0Provider>,
   
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
