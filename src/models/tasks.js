import React from 'react';
import {
    List, Datagrid, TextField, NumberField, ReferenceField, SimpleShowLayout,
    SimpleForm, Edit, Show, BooleanField, BooleanInput
} from 'react-admin';

export const TaskList = props => (
    <List {...props} bulkActionButtons={false}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <ReferenceField label="itemId" source="itemId" reference="items">
                <TextField source="id" />
            </ReferenceField>
            <ReferenceField label="taskDependencyId" source="taskDependencyId" reference="tasks">
                <TextField source="title" />
            </ReferenceField>
            <ReferenceField label="workerTypeId" source="workerTypeId" reference="worker-types">
                <TextField source="title" />
            </ReferenceField>
            <TextField source="title" />
            <NumberField source="timeToComplete" />
            <TextField source="status" />
            <BooleanField source="isActive" />
        </Datagrid>
    </List>
);

export const TaskEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextField source="id" />
            <ReferenceField label="itemId" source="itemId" reference="items">
                <TextField source="title" />
            </ReferenceField>
            <ReferenceField label="taskDependencyId" source="taskDependencyId" reference="tasks">
                <TextField source="title" />
            </ReferenceField>
            <ReferenceField label="workerTypeId" source="workerTypeId" reference="worker-types">
                <TextField source="title" />
            </ReferenceField>
            <TextField source="title" />
            <NumberField source="timeToComplete" />
            <BooleanInput source="isActive" />
        </SimpleForm>
    </Edit>
);

export const TaskShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <ReferenceField label="itemId" source="itemId" reference="items">
                <TextField source="title" />
            </ReferenceField>
            <ReferenceField label="taskDependencyId" source="taskDependencyId" reference="tasks">
                <TextField source="title" />
            </ReferenceField>
            <ReferenceField label="workerTypeId" source="workerTypeId" reference="worker-types">
                <TextField source="title" />
            </ReferenceField>
            <TextField source="title" />
            <NumberField source="timeToComplete" />
            <BooleanField source="isActive" />
        </SimpleShowLayout>
    </Show>
);

