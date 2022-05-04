import React from 'react'
import {List, Datagrid, TextField, DateField, EditButton, DeleteButton} from 'react-admin'

// We pass in props that will come in
const PostList = (props) => {
  return (
    // We pass in our object in lists and spread all our props
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='title' />
        <DateField source='publishedAt' />
        <EditButton basePath='/posts'/>
        <DeleteButton basePath='/posts'/>
      </Datagrid>
    </List>
  )
}

export default PostList