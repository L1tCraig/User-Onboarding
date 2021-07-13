import React from 'react'

export default function Form(data) {
    const { values, update, submit } = data
    
    const onChange = evt => {
        const name = evt.target.name
        const value = evt.target.value
        update(name, value)
    }
    
    const onSubmit = event => {
        event.preventDefault()
        submit()
    }
debugger
   return (
       <form onSubmit={onSubmit}>
           <div>
               <label>Name
                   <input type='text' 
                   onChange={onChange} 
                   name='name' 
                   placeholder='First and Last'
                   value={values.name}/>      
               </label>

               <lable>User Name
                   <input type='text' 
                   onChange={onChange} 
                   name='username'
                   placeholder='Letters and Numbers' 
                   value={values.username}/>
               </lable>

               <label>Email
                   <input type='email'
                   onchange={onChange} 
                   name='email'
                   placeholder='email@domain.com'
                   value={values.email}/>
               </label>

               <label>Password
                   <input type='password'
                   onChange={onChange} 
                   name='password'
                   placeholder='min 6 characters'
                   value={values.password}/>
               </label>
               
               <label>
                   <a href='https://www.google.com/'>Terms of Service</a>
                   <input type='checkbox'
                   onChange={onChange}
                   name='terms'
                   value={values.terms}></input>
               </label>

               <label>Guess
                   <input type='text'
                   onChange={onChange}
                   name='guess'
                   placeholder='guess'
                   value={values.guess}></input>                
               </label>
               <button>Submit</button>

           </div>
       </form>
   )
}