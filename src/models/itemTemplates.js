import React from 'react';
import { List, Datagrid, TextField, Create, SimpleForm, Edit, TextInput } from 'react-admin';

export const ItemTemplateList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
        </Datagrid>
    </List>
);

export const ItemTemplateEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="title" />
        </SimpleForm>
    </Edit>
);

export const ItemTemplateCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />
        </SimpleForm>
    </Create>
);

