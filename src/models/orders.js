import React from 'react';
import { List, Datagrid, TextField, SimpleFormIterator, ArrayInput, ReferenceInput, SelectInput, NumberField, NumberInput, Create, SimpleForm, Edit, TextInput, DateField } from 'react-admin';

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
            <ArrayInput source="items">
                <SimpleFormIterator>
                    <ReferenceInput label="Item Template" source="itemTemplateId" reference="item-templates">
                        <SelectInput optionText="title" />
                    </ReferenceInput>
                    <TextInput source="info" />
                    <NumberInput source="price" />
                    <ArrayInput source="taskTemplatesIds">
                        <SimpleFormIterator>
                            <ReferenceInput label="Task Template" source="id" reference="task-templates">
                                <SelectInput optionText="id" />
                            </ReferenceInput>
                        </SimpleFormIterator>
                    </ArrayInput>
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Create>
);

