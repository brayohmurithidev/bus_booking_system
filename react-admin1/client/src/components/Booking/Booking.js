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
export const BookingList = (props) => {
  return (
    // We pass in our object in lists and spread all our props
    <List {...props}>
      <Datagrid>
        <TextField source="pickup_address" />
        <TextField source="drop_address" />
        <TextField source="seat_no" />
        <TextField source="schedule.price" />
        <TextField source="ticket" />
        <TextField source="mode_of_payment" />
        <TextField source="status" />
        <EditButton basePath="/bookings" />
        <DeleteButton basePath="/bookings" />
      </Datagrid>
    </List>
  );
};
