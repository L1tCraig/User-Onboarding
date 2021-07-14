import React from 'react'

export default function Users(data) {
    const { details } = data

    return (
        <div>
            <h2>{details.username}</h2>
            <div className='a'>
                <p>Name: {details.name}</p>
                <p>Email: {details.email}</p>
                <p>
                    {(details.terms ? 'They have sold their soul' : 'One day they will say yes')}
                </p>
                <p>Password: {details.password}</p>
            </div>
        </div>
    )
}