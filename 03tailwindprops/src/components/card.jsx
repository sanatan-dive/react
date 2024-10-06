import React from 'react'

function Card({username = "sanatan"}) {
  return (
    <div className='flex flex-col justify-center items-center h-[300px] w-[300px]'><div className=' bg-gray-900 p-3 rounded'>
        <img className='rounded' src='https://images.pexels.com/photos/27195708/pexels-photo-27195708/free-photo-of-meal-with-vegetables-on-dark-plate.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='Card Image' />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. hi my name is {username}</p>
      <h1 className='text-3xl bg-gray-500 p-3 rounded'>Card</h1>
    </div>
    </div>
  )
}

export default Card