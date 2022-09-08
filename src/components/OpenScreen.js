import React from 'react'

export default function OpenScreen({startTest}) {
    return (
        <div className='os-container'>
        <h1 className='title'> Quizzical </h1>
        <h3 className='description'> Test your knowledge!</h3>
        <button className='start-test' onClick={startTest}>Start quiz</button>
    </div>

    )
}