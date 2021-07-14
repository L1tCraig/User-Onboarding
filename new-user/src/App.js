import React, { useEffect, useState } from 'react'
import Form from './Components/Form'
import './App.css';
import Users from './Components/Users';
import axios from 'axios'
import * as yup from 'yup'

let schema = yup.object().shape({
  name: yup.string().required('user is required'),
  username: yup.string().required('age is required'),
  email: yup.string().email().required('email is reqired'),
  password: yup.string().min(6).required('Password is required'),
  confirm: yup.string().oneOf([yup.ref('password')], 'Missmatched passwords').required('Passwords must match'),
  terms: yup.boolean(),
  guess: yup.string().max(3)
})

const blankForm = {
  name: '',
  username: '',
  email: '',
  password: '',
  confirm: '',
  terms: false,
  guess: ''
}

export default function App() {
  const [users, setUsers] = useState([])
  const [formValues, setFormValues] = useState(blankForm)
  const [errors, setErrors] = useState(blankForm)
  const [disabled, setDisabled] = useState(true)

  const setFormErrors = (name, value) => {
    yup
    .reach(schema, name)
    .validate(value)
    .then(() => setErrors({ ...errors, [name]: '' }))
    .catch((err) => setErrors({ ...errors, [name]: err.errors[0]}))
  }

  const formUpdate = hapenstance => {
    const { name, value } = hapenstance.target
    setFormErrors(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const submitForm = (e) => {
    e.preventDefault()
    const { name, username, email, password, confirm, terms, guess} = formValues
    setUsers([
      ...users,
      {
        name: name.trim(),
        username: username.trim(),
        email: email,
        password: password,
        confirm: confirm,
        terms: terms,
        guess: guess
      }
    ])

    const userSubmission = {
      name: name.trim(),
      username: username.trim(),
      email: email,
      password: password,
      terms: terms
    }
    axios.post('https://reqres.in/api/users', userSubmission)
    .then((res) => {
      console.log(res)
      setFormValues(blankForm)

      users.map(user => {user.guess == 123 ? document.querySelectorAll('.hide').classlist.remove('hide') : console.log(guess) })

    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">
      <Form
      values={formValues}
      update={formUpdate}
      submit={submitForm}
      disabled={disabled} 
      errors={errors} />
      
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
