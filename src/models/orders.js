import React from 'react';
import { List, Datagrid, TextField, SimpleFormIterator, ArrayInput, FormDataConsumer, 
    SelectArrayInput, ReferenceArrayInput, ReferenceInput, SelectInput, NumberField,
     NumberInput, Create, SimpleForm, Edit, TextInput, DateField, BooleanField } from 'react-admin';

export const OrderList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="customerName" />
            <TextField source="customerEmail" />
            <NumberField source="price" />
            <DateField source="createdAt" />
            <BooleanField source="isReady" />
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
                    <TextInput label="Info" source="info" />
                    <NumberInput label="Price" source="price" />
                    <FormDataConsumer
                        label="Task Templates"
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
                            return scopedFormData && scopedFormData.itemTemplateId &&
                                <ReferenceArrayInput
                                    label="Task Templates"
                                    source={getSource("taskTemplatesIds")}
                                    reference="task-templates"
                                    {...rest}
                                    filter={{ isAdditional: true, itemTemplateId: scopedFormData.itemTemplateId }}>
                                    <SelectArrayInput label="Task Templates" optionText="title" />
                                </ReferenceArrayInput>
                        }
                        }
                    </FormDataConsumer>
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Create>
);

/*
<ReferenceArrayInput
    source="taskTemplatesIds"
    reference="task-templates"
    filter={{ isAdditional: true, itemTemplateId:2 }}>
    <SelectArrayInput optionText="title" />
</ReferenceArrayInput>
*/
/*
<FormDataConsumer>
    {({ getSource, formData, ...rest }) => //formData.hasEmail &&
        <ReferenceInput label="Task Template" source={getSource('id')} reference="task-templates" filter={{ isAdditional: true, itemTemplateId: formData.itemTemplateId}}>
            <SelectInput optionText="title" />
        </ReferenceInput>
    }
</FormDataConsumer>*/
/*<ArrayInput source="taskTemplatesIds">
    <SimpleFormIterator>
        <ReferenceInput label="Task Template" source="id" reference="task-templates" filter={{ isAdditional: true}}>
            <SelectInput optionText="title" />
        </ReferenceInput>
    </SimpleFormIterator>
</ArrayInput>*/