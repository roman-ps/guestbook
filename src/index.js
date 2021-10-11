import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const ROOT_ELEMENT = document.querySelector('#root');

const DATA = [
  {id: 1, name: 'roman', mail: 'dfr@3453.ru', city: 'Atlanta', text: 'Be cool'},
  {id: 2, name: 'lonor', mail: 'dfr@33.ru', city: 'Durac', text: 'Be shine'},
  {id: 3, name: 'rodger', mail: 'df535r@453.ru', city: 'Atlan', text: 'Bl dfgdfgdf'},
  {id: 4, name: 'ferrer', mail: 'dfr@3453.com', city: 'Atta', text: 'Be coofdgl'},
  {id: 5, name: 'matsn', mail: 'd1fr@3453.cr', city: 'Atghgfta', text: '44 gdfgdfg'},
  {id: 6, name: 'drak', mail: 'd00fr@345fdg3.4u', city: 'Atladfga', text: 'Be co5464l'},
  {id: 7, name: 'quil', mail: 'df45r@3fg.gdu', city: 'Atlay56', text: 'Be cool4564'},
];

const getLastId = () => {
  return DATA.length + 1;
};

const renderData = () => {
  ReactDOM.render(<App data={DATA}/>, ROOT_ELEMENT);
};

renderData();

export {getLastId, renderData};
