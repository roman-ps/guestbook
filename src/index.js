import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const ROOT_ELEMENT = document.querySelector('#root');

const DATA = [];

const getLastId = () => {
  return DATA.length + 1;
};

const renderData = () => {
  ReactDOM.render(<App data={DATA}/>, ROOT_ELEMENT);
};

renderData();

export {getLastId, renderData};
