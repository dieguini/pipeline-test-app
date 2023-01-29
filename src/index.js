import React from 'react';
import ReactDOM from 'react-dom/client';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './base.css';
import './index.css';
import App from './App';
import { Auth } from 'aws-amplify';


Auth.configure({
    Auth: {
        identityPoolId: "us-east-1:20b9566e-0c43-4562-85b7-7cda2cc52fa2",
        region: "us-east-1"
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);