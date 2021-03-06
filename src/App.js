import React from 'react';
import { Route } from 'react-router-dom'
import { Admin, Resource } from 'react-admin';

import Menu from './Menu';
import SignIn from './SignIn';
import authProvider from './authProvider';
import MyLogoutButton from './MyLogoutButton'
import superDataProvider from './superDataProvider'

import Basic from './schedule/Basic'
import { ItemList, ItemEdit, ItemShow } from './models/items'
import { TaskList, TaskEdit, TaskShow } from './models/tasks'
import { OrderList, OrderCreate, OrderEdit } from './models/orders'
import { TaskTemplateList, TaskTemplateCreate, TaskTemplateEdit } from './models/taskTemplates'
import { ItemTemplateList, ItemTemplateCreate, ItemTemplateEdit } from './models/itemTemplates'
import { WorkerTypeList, WorkerTypeCreate, WorkerTypeEdit, WorkerTypeShow } from './models/workerTypes'


const App = () => (
  <Admin
    loginPage={SignIn}
    logoutButton={MyLogoutButton}
    authProvider={authProvider}
    dataProvider={superDataProvider}
    menu={Menu}
    customRoutes={[
      <Route
        exact
        path="/schedule"
        component={Basic}
        noLayout
      />,
    ]}>
    <Resource name="orders" list={OrderList} edit={OrderEdit} create={OrderCreate} />
    <Resource name="items" list={ItemList} show={ItemShow} edit={ItemEdit} />
    <Resource name="tasks" list={TaskList} show={TaskShow} edit={TaskEdit} />
    <Resource name="worker-types" list={WorkerTypeList} show={WorkerTypeShow} edit={WorkerTypeEdit} create={WorkerTypeCreate} />
    <Resource name="item-templates" list={ItemTemplateList} edit={ItemTemplateEdit} create={ItemTemplateCreate} />
    <Resource name="task-templates" list={TaskTemplateList} edit={TaskTemplateEdit} create={TaskTemplateCreate} />
  </Admin >
);

export default App;