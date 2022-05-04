import React from 'react';
import { Edit, SimpleForm, TextInput, DateInput} from 'react-admin';

const PostEdit = () => {
  return (
    <Edit title='Edit Post' {...props}>
      <SimpleForm>
<TextInput disabled source='id' />
<TextInput source='title' />
<TextInput source='body' />
<TextInput multiline label='Published'
source='publishedAt' />

      </SimpleForm>

    </Edit>
  )
}

export default PostEdit