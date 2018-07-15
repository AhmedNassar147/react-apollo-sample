import React from 'react';
import Form from './Form';
import Names from './Names';

const AddAndDelete = () => (
  <div>
    <h1 className="avenir f4 bold center mw5">Add A Person</h1>
    <Form />
    <h1 className="avenir f4 bold center mw5">Names</h1>
    <Names />
  </div>
);

export default AddAndDelete;