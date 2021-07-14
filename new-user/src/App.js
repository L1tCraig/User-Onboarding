import React, { useState } from 'react'
import Form from './Components/Form'
import './App.css';
import Users from './Components/Users';

const blankForm = {
  name: '',
  username: '',
  email: '',
  password: '',
  terms: false
}

export default function App() {
  const [users, setUsers] = useState([])
  const [formValues, setFormValues] = useState(blankForm)

  const formUpdate = hapenstance => {
    const { name, value } = hapenstance.target
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const submitForm = (e) => {
    e.preventDefault()
    const { name, username, email, password, terms } = formValues
    setUsers([
      ...users,
      {
        name: name.trim(),
        username: username.trim(),
        email: email,
        password: password,
        terms: terms
      }
    ])
  }

  return (
    <div className="App">
      <Form
      values={formValues}
      update={formUpdate}
      submit={submitForm} />
      {
        users.map(user => {
          return (
            <Users key={user.id} details={user} />
          )
        })
      }
    </div>
  );
}
