import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
  Edit,
  SimpleForm,
  TextInput,
  Create,
} from "react-admin";

// We pass in props that will come in
export const ScheduleList = (props) => {
  return (
    // We pass in our object in lists and spread all our props
    <List {...props}>
      <Datagrid>
        <TextField source="busNo" />
        <TextField source="from" />
        <TextField source="to" />
        <TextField source="price" />
        <TextField source="departure_date" />
        <TextField source="departure_time" />
        <TextField source="available_slots" />
        <EditButton basePath="/buses" />
        <DeleteButton basePath="/buses" />
      </Datagrid>
    </List>
  );
};

export const ScheduleEdit = (props) => {
  return (
    <Edit title="Edit Post" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        {/* <TextInput source="title" />
        <TextInput source="body" />
        <TextInput multiline label="Published" source="publishedAt" /> */}
      </SimpleForm>
    </Edit>
  );
};

export const ScheduleCreate = (props) => {
  return (
    <Create title="Create a post" {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput multiline source="body" />
        {/* <DateInput label="Published" source="publishedAt" /> */}
      </SimpleForm>
    </Create>
  );
};
