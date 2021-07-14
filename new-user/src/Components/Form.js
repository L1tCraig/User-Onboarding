import React from 'react'

export default function Form(data) {
    const { values, update, submit, disabled, errors, guess } = data
     
   return (
       <form onSubmit={submit}>
           <div>

           <h4 style={{ color: 'red' }}>{errors.name}</h4>
               <label>Name
                   <input type='text' 
                   onChange={update} 
                   name='name' 
                   placeholder='First and Last'
                   value={values.name}/>      
               </label>

               <h4 style={{ color: 'red' }}>{errors.username}</h4>
               <lable>User Name
                   <input type='text' 
                   onChange={update} 
                   name='username'
                   placeholder='Letters and Numbers' 
                   value={values.username}/>
               </lable>

               <h4 style={{ color: 'red' }}>{errors.email}</h4>
               <label>Email
                   <input type='email'
                   onChange={update} 
                   name='email'
                   placeholder='email@domain.com'
                   value={values.email}/>
               </label>

               <h4 style={{ color: 'red' }}>{errors.password}</h4>
               <label>Password
                   <input type='password'
                   onChange={update} 
                   name='password'
                   placeholder='min 6 characters'
                   value={values.password}/>
               </label>

               <h4 style={{ color: 'red' }}>{errors.confirm}</h4>
               <label>Confirm Password
                   <input type='password'
                   onChange={update}
                   name='confirm'
                   placeholder='match password'
                   value={values.confirm}/>
               </label>

               <label>
                   <a href='https://www.google.com/'>Terms of Service</a>
                   <input type='checkbox'
                   onChange={update}
                   name='terms'
                   value={values.terms}></input>
               </label>

               <label>Guess
                   <input type='text'
                   onChange={update}
                   name='guess'
                   placeholder='guess'
                   value={values.guess}></input>                
               </label>

               <button disabled={disabled}>Submit</button>

           </div>
       </form>
   )
}