import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const ROOT_ELEMENT = document.querySelector('#root');

const DATA = [
  {name: 'roman', mail: 'dfr@3453.ru', city: 'Atlanta', text: 'Be cool'},
  {name: 'lonor', mail: 'dfr@33.ru', city: 'Durac', text: 'Be shine'},
  {name: 'rodger', mail: 'df535r@453.ru', city: 'Atlan', text: 'Bl dfgdfgdf'},
  {name: 'ferrer', mail: 'dfr@3453.com', city: 'Atta', text: 'Be coofdgl'},
  {name: 'matsn', mail: 'd1fr@3453.cr', city: 'Atghgfta', text: '44 gdfgdfg'},
  {name: 'drak', mail: 'd00fr@345fdg3.4u', city: 'Atladfga', text: 'Be co5464l'},
  {name: 'quil', mail: 'df45r@3fg.gdu', city: 'Atlay56', text: 'Be cool4564'},
];

const getLastId = (arr) => {
  return arr.length + 1;
}

ReactDOM.render(<App data={DATA}/>, ROOT_ELEMENT);

export {getLastId};
