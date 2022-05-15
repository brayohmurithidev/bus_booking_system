import React from "react";
import {
  Admin,
  DashboardMenuItem,
  EditGuesser,
  ListGuesser,
  Resource,
} from "react-admin";
import restProvider from "ra-data-simple-rest";
import { BusList, BusCreate, BusEdit } from "./components/Bus/Bus";
import {
  ScheduleList,
  ScheduleEdit,
  ScheduleCreate,
} from "./components/Schedule/Schedule";
import { SaccoList } from "./components/Sacco/Sacco";
import { BookingList } from "./components/Booking/Booking";
import MyLayout from "./components/MyLayout";

const dataProvider = restProvider("http://localhost:5454");

const theme = {
  palette: {
    mode: "dark", // Switching the dark mode on is a single property value change.
  },
};

function App() {
  return (
    <Admin layout={MyLayout} container dataProvider={dataProvider}>
      {/* Resource components takes props name thats the name of the collection, and list that we have to create */}
      {/* <DashboardMenuItem></DashboardMenuItem> */}
      <Resource name="saccos" list={SaccoList} />
      <Resource name="buses" create={BusCreate} edit={BusEdit} />
      <Resource
        name="schedules"
        list={ListGuesser}
        create={ScheduleCreate}
        edit={EditGuesser}
      />

      <Resource name="bookings" list={BookingList} edit={EditGuesser} />
    </Admin>
  );
}

export default App;
