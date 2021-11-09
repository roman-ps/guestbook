import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {DATA} from './Data';

const ROOT_ELEMENT = document.querySelector('#root');

const renderData = () => {
  ReactDOM.render(<App data={DATA}/>, ROOT_ELEMENT);
};

export {renderData};
