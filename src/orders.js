import React from 'react';
import { List, Datagrid, TextField, NumberField, Create, SimpleForm, Edit, TextInput, DateField } from 'react-admin';

export const OrderList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="customerName" />
            <TextField source="customerEmail" />
            <NumberField source="price" />
            <DateField source="createdAt" />
        </Datagrid>
    </List>
);

export const OrderEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="customerName" />
            <TextInput source="customerEmail" />
            <NumberField source="price" />
        </SimpleForm>
    </Edit>
);

export const OrderCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="customerName" />
            <TextInput source="customerEmail" />
            <NumberField source="price" />
        </SimpleForm>
    </Create>
);

