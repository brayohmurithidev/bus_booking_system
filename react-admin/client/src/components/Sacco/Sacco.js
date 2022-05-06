import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  SelectInput,
  Edit,
} from "react-admin";

// We pass in props that will come in
export const SaccoList = (props) => {
  return (
    // We pass in our object in lists and spread all our props
    <List {...props}>
      <Datagrid>
        <TextField source="sacco_name" />
        <TextField source="manager" />
        <TextField source="email" />
        <TextField source="phone_no" />
        <TextField source="reg_date" />
        <EditButton basePath="/buses" />
        <DeleteButton basePath="/buses" />
      </Datagrid>
    </List>
  );
};
