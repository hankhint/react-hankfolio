import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//like/similar jquery .append method
//take this stuff, render it and put it in the address
ReactDOM.render(
    <React.StrictMode>
        {/* JSX requires a / on self closing tags */}
        <App />
        </React.StrictMode>,
        document.getElementById('root')
        
);