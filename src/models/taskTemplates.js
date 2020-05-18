import React from 'react';
import { List, Datagrid, Edit, TextField, FormDataConsumer, BooleanField, BooleanInput, ReferenceField, ReferenceInput, SelectInput, NumberField, NumberInput, Create, SimpleForm, TextInput } from 'react-admin';

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
            <ReferenceInput label="Item Template" source="itemTemplateId" reference="item-templates" disabled>
                <SelectInput optionText="title" />
            </ReferenceInput>
            <ReferenceInput label="Task Template Dependency" source="taskTemplateDependencyId" reference="task-templates" disabled allowEmpty>
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
            <FormDataConsumer
                label="Dependency"
            >
                {({
                    formData, // The whole form data
                    scopedFormData, // The data for this item of the ArrayInput
                    getSource, // A function to get the valid source inside an ArrayInput
                    ...rest
                }) => {
                    console.log("item", formData.itemTemplateId)
                    console.log("price", formData.price)
                    console.log("email", formData.customerEmail)
                    console.log("email", scopedFormData)
                    return formData && formData.itemTemplateId &&
                        <ReferenceInput
                            label="Dependency"
                            source="taskTemplateDependencyId"
                            reference="task-templates"
                            allowEmpty
                            filter={{ itemTemplateId: formData.itemTemplateId }}>
                            <SelectInput label="Task Templates" optionText="title" />
                        </ReferenceInput>
                }
                }
            </FormDataConsumer>
            <ReferenceInput label="Worker Type" source="workerTypeId" reference="worker-types">
                <SelectInput optionText="title" />
            </ReferenceInput>
            <TextInput source="title" />
            <NumberInput source="timeToComplete" />
            <BooleanInput source="isAdditional" />
        </SimpleForm>
    </Create>
);

/*
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
*/
