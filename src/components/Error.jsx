import React from 'react'
import errorImage from '../assets/error-page.png'
import { Link } from 'react-router-dom'
export default function Error() {
  return (
    <div className='flex justify-center items-center flex-col h-[calc(100vh-68px)]'>
      <img src={errorImage} className=''/>
      <Link to="/"><button className='text-2xl px-4 py-2 mt-3 bg-white rounded-lg hover:bg-red-500 hover:text-black'> Back To Home</button></Link>
    </div>
  )
}
