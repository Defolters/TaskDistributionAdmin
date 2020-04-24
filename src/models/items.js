import React from 'react';
import { List, Datagrid, TextField, ReferenceField, SimpleShowLayout, SimpleForm, Edit, TextInput, Show } from 'react-admin';

export const ItemList = props => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <ReferenceField label="orderId" source="orderId" reference="orders">
                <TextField source="id" />
            </ReferenceField>
            <TextField source="title" />
            <TextField source="info" />
            <TextField source="price" />
        </Datagrid>
    </List>
);

export const ItemEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput disabled source="title" />
            <TextInput source="info" />
            <TextInput disabled source="price" />
        </SimpleForm>
    </Edit>
);


export const ItemShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="info" />
            <TextField source="price" />
        </SimpleShowLayout>
    </Show>
);

