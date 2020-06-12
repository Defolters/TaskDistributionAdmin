import React from 'react';
import { List, Datagrid, TextField, BooleanField, BooleanInput,Create, SimpleShowLayout, SimpleForm, Edit, TextInput, Show } from 'react-admin';

export const WorkerTypeList = props => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="title" />
            <BooleanField source="isActive" />
        </Datagrid>
    </List>
);

export const WorkerTypeEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="title" />
            <BooleanInput source="isActive" />
        </SimpleForm>
    </Edit>
);

export const WorkerTypeCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />
        </SimpleForm>
    </Create>
);

export const WorkerTypeShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="title" />
            <BooleanField source="isActive" />
        </SimpleShowLayout>
    </Show>
);

