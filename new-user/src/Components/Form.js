import React from 'react'

export default function Form(data) {
    const { values, update, submit } = data
    
   return (
       <form onSubmit={submit}>
           <div>
               <label>Name
                   <input type='text' 
                   onChange={update} 
                   name='name' 
                   placeholder='First and Last'
                   value={values.name}/>      
               </label>

               <lable>User Name
                   <input type='text' 
                   onChange={update} 
                   name='username'
                   placeholder='Letters and Numbers' 
                   value={values.username}/>
               </lable>

               <label>Email
                   <input type='email'
                   onChange={update} 
                   name='email'
                   placeholder='email@domain.com'
                   value={values.email}/>
               </label>

               <label>Password
                   <input type='password'
                   onChange={update} 
                   name='password'
                   placeholder='min 6 characters'
                   value={values.password}/>
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
               <button>Submit</button>

           </div>
       </form>
   )
}