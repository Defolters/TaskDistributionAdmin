// in src/App.js
import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser, fetchUtils } from 'react-admin';
import authProvider from './authProvider';
import superDataProvider from './superDataProvider'

import MyLoginPage from './MyLoginPage';
import MyLogoutButton from './MyLogoutButton'
import { ItemTemplateList, ItemTemplateCreate, ItemTemplateEdit} from './models/itemTemplates'
import { OrderList, OrderCreate, OrderEdit } from './models/orders'
import {WorkerTypesList, WorkerTypesCreate, WorkerTypesEdit} from './models/workerTypes'


const App = () => (
  <Admin loginPage={MyLoginPage} logoutButton={MyLogoutButton} authProvider={authProvider} dataProvider={superDataProvider} >
    <Resource name="orders" list={OrderList} edit={OrderEdit} create={OrderCreate}/>
    <Resource name="items" list={ListGuesser} />
    <Resource name="tasks" list={ListGuesser} />
    <Resource name="item-templates" list={ItemTemplateList} edit={ItemTemplateEdit} create={ItemTemplateCreate} />
    <Resource name="task-templates" list={ListGuesser} />
    <Resource name="worker-types" list={WorkerTypesList} edit={WorkerTypesEdit} create={WorkerTypesCreate} />
  </Admin >
);

export default App;