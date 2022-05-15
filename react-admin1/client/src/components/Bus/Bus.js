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
export const BusList = (props) => {
  return (
    // We pass in our object in lists and spread all our props
    <List {...props}>
      <Datagrid>
        <TextField source="busNo" />
        <TextField source="sacco" />
        <TextField source="driver" />
        <TextField source="phone" />
        <EditButton basePath="/buses" />
        <DeleteButton basePath="/buses" />
      </Datagrid>
    </List>
  );
};

export const BusCreate = (props) => {
  return (
    <Create title="Create a post" {...props}>
      <SimpleForm>
        <TextInput source="bus_no" />
        <SelectInput
          source="sacco"
          choices={[
            { id: "62743c0df51b6783d814097a", name: "Kukena" },
            { id: "627442ff47133de99295f90e", name: "Mark One" },
            { id: "6274437e47133de99295f914", name: "Enique Shuttle" },
          ]}
        />
        <TextInput source="driver_name" />
        <TextInput source="driver_no" />
      </SimpleForm>
    </Create>
  );
};

export const BusEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="_id" disabled />
      {/* <TextInput source="" />
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="address.street" label="Address" />
      <TextInput source="phone" />
      <TextInput source="website" />
      <TextInput source="company.name" label="Company" /> */}
    </SimpleForm>
  </Edit>
);
