import React from 'react'

export default function Users(data) {
    const { details } = data

    return (
        <div>
            <h2>{details.username}</h2>
            <div className='hide'>
                <p>Name: {details.name}</p>
                <p>Email: {details.email}</p>
                <p>
                    {(details.terms ? 'They have sold their soul' : 'One day they will say yes')}
                </p>
                <p>Guess: {details.guess}</p>
            </div>
        </div>
    )
}