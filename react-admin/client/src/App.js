import React from 'react';
import {Admin, Resource} from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import  PostList from './components/PostList';
import PostCreate from './components/PostCreate.js';
import PostEdit from './components/PostCreate.js';


function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      {/* Resource components takes props name thats the name of the collection, and list that we have to create */}
      <Resource name='posts' list={PostList} create={PostCreate} edit={PostEdit} />
      </Admin>
  );
}

export default App;
