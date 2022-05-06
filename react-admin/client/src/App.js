import React from "react";
import { Admin, EditGuesser, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import { BusList, BusCreate, BusEdit } from "./components/Bus/Bus";
import {
  ScheduleList,
  ScheduleEdit,
  ScheduleCreate,
} from "./components/Schedule/Schedule";
import { SaccoList } from "./components/Sacco/Sacco";
import { BookingList } from "./components/Booking/Booking";

const dataProvider = restProvider("http://localhost:5454");
function App() {
  return (
    <Admin container dataProvider={dataProvider}>
      {/* Resource components takes props name thats the name of the collection, and list that we have to create */}
      <Resource name="saccos" list={SaccoList} />
      <Resource name="buses" list={BusList} create={BusCreate} edit={BusEdit} />
      <Resource
        name="schedules"
        list={ScheduleList}
        create={BusCreate}
        edit={ScheduleEdit}
      />
      <Resource name="bookings" list={BookingList} edit={EditGuesser} />
    </Admin>
  );
}

export default App;
