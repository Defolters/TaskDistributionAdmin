// in src/App.js
import React from 'react';
import { Admin, Resource, ListGuesser, fetchUtils } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from './authProvider';
import simpleRestProvider from 'ra-data-simple-rest';
import superDataProvider from './superDataProvider'

import MyLoginPage from './MyLoginPage';
import MyLogoutButton from './MyLogoutButton'
/*
const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  const token = localStorage.getItem('token');
  options.credentials = 'include';
  options.headers.set('Authorization', `Bearer ${token}`);
  var response = fetchUtils.fetchJson(url, options);
  console.log(response)
  return response
  //.then((response) => {
  //const {headers, json} = response;
  //console.log(headers, json)
//})
};*/
//const dataProvider = simpleRestProvider('http://localhost:8080/v1/', httpClient);//simpleRestProvider


const App = () => (
  <Admin loginPage={MyLoginPage} logoutButton={MyLogoutButton} authProvider={authProvider} dataProvider={superDataProvider} >
    <Resource name="orders" list={ListGuesser} />
    <Resource name="items" list={ListGuesser} />
    <Resource name="tasks" list={ListGuesser} />
    <Resource name="item-templates" list={ListGuesser} />
    <Resource name="task-templates" list={ListGuesser} />
  </Admin >
);

export default App;

/*
return fetchUtils.fetchJson(url, options)
  .then((response) => {
    const {headers, json} = response;
    //admin on rest needs the {data} key
    const data = {data: json}
    if (headers.get('x-total-count')) {
      data.total = parseInt(headers.get('x-total-count').split('/').pop(), 10)
    }
    // handle get_list responses
    if (!isNaN(parseInt(headers.get('x-total-count'), 10))) {
      return {data: json,
              total: parseInt(headers.get('x-total-count').split('/').pop(), 10)}
    } else {
      return data
    }
})
*/