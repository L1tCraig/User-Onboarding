import React, { useState } from 'react'
import Form from './Form';
import './App.css';

const blankForm = {
  name: '',
  email: '',
  password: '',
  terms: false
}

export default function App() {
  const [formValues, setFormValues] = useState(blankForm)
  return (
    <div className="App">
      <Form
      values={formValues}
      update={formUpdate}
      submit={submitForm} />
    </div>
  );
}
