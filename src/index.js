import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const ROOT_ELEMENT = document.querySelector('#root');

const DATA = [];

const getNextId = () => {
  return DATA.reduce(function(a,b) {
    return (Math.max(a,b.id) + 1)
  }, 0);
};

const renderData = () => {
  ReactDOM.render(<App data={DATA}/>, ROOT_ELEMENT);
};

renderData();

export {getNextId, renderData};
