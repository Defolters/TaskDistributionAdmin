// in src/App.js
import React from 'react';
import { Admin, Resource } from 'react-admin';

import MyLoginPage from './MyLoginPage';
import authProvider from './authProvider';
import MyLogoutButton from './MyLogoutButton'
import superDataProvider from './superDataProvider'

import { ItemList, ItemEdit, ItemShow } from './models/items'
import { TaskList, TaskEdit, TaskShow } from './models/tasks'
import { OrderList, OrderCreate, OrderEdit } from './models/orders'
import { TaskTemplateList, TaskTemplateCreate, TaskTemplateEdit } from './models/taskTemplates'
import { ItemTemplateList, ItemTemplateCreate, ItemTemplateEdit } from './models/itemTemplates'
import { WorkerTypeList, WorkerTypeCreate, WorkerTypeEdit, WorkerTypeShow } from './models/workerTypes'


const App = () => (
  <Admin loginPage={MyLoginPage} logoutButton={MyLogoutButton} authProvider={authProvider} dataProvider={superDataProvider} >
    <Resource name="orders" list={OrderList} edit={OrderEdit} create={OrderCreate} />
    <Resource name="items" list={ItemList} show={ItemShow} edit={ItemEdit} />
    <Resource name="tasks" list={TaskList} show={TaskShow} edit={TaskEdit} />
    <Resource name="worker-types" list={WorkerTypeList} show={WorkerTypeShow} edit={WorkerTypeEdit} create={WorkerTypeCreate} />
    <Resource name="item-templates" list={ItemTemplateList} edit={ItemTemplateEdit} create={ItemTemplateCreate} />
    <Resource name="task-templates" list={TaskTemplateList} edit={TaskTemplateEdit} create={TaskTemplateCreate} />
  </Admin >
);

export default App;