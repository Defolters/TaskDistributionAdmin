import React from 'react';
import { List, Datagrid, TextField, SimpleFormIterator, ArrayInput, ReferenceInput, SelectInput, NumberField, NumberInput, Create, SimpleForm, Edit, TextInput, DateField } from 'react-admin';

export const WorkerTypesList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
        </Datagrid>
    </List>
);

export const WorkerTypesEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="title" />
        </SimpleForm>
    </Edit>
);

export const WorkerTypesCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />
        </SimpleForm>
    </Create>
);

