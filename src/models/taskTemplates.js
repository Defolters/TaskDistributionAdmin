import React from 'react';
import { List, Datagrid, Edit, TextField, BooleanField, BooleanInput, ReferenceField, ReferenceInput, SelectInput, NumberField, NumberInput, Create, SimpleForm, TextInput } from 'react-admin';

export const TaskTemplateList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField label="itemTemplateId" source="itemTemplateId" reference="item-templates">
                <TextField source="title" />
            </ReferenceField>
            <ReferenceField label="taskTemplateDependencyId" source="taskTemplateDependencyId" reference="task-templates">
                <TextField source="title" />
            </ReferenceField>
            <ReferenceField label="workerTypeId" link="show" source="workerTypeId" reference="worker-types">
                <TextField source="title" />
            </ReferenceField>
            <TextField source="title" />
            <NumberField source="timeToComplete" />
            <BooleanField source="isAdditional" />
        </Datagrid>
    </List>
);


export const TaskTemplateEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <ReferenceInput label="Item Template" source="itemTemplateId" reference="item-templates">
                <SelectInput optionText="title" />
            </ReferenceInput>
            <ReferenceInput label="Task Template Dependency" source="taskTemplateDependencyId" reference="task-templates" allowEmpty>
                <SelectInput optionText="title" />
            </ReferenceInput>
            <ReferenceInput label="Worker Type" source="workerTypeId" reference="worker-types">
                <SelectInput optionText="title" />
            </ReferenceInput>
            <TextInput source="title" />
            <NumberInput source="timeToComplete" />
            <BooleanInput source="isAdditional" />
        </SimpleForm>
    </Edit>
);

export const TaskTemplateCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="Item Template" source="itemTemplateId" reference="item-templates">
                <SelectInput optionText="title" />
            </ReferenceInput>
            <ReferenceInput label="Task Template Dependency" source="taskTemplateDependencyId" reference="task-templates" allowEmpty>
                <SelectInput optionText="title" />
            </ReferenceInput>
            <ReferenceInput label="Worker Type" source="workerTypeId" reference="worker-types">
                <SelectInput optionText="title" />
            </ReferenceInput>
            <TextInput source="title" />
            <NumberInput source="timeToComplete" />
            <BooleanInput source="isAdditional" />
        </SimpleForm>
    </Create>
);

