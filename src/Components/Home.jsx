import React from 'react'
import Header from './Header'

const Home = () => {
  return (
    <div className='p-4'>
      <Header/>
      <div className='mt-5'>
        <h1>Overview</h1>
        <div className="grid grid-cols-4 gap-12 mt-4">
          <span className='px-4 py-10 rounded-md bg-white'>Col 1</span>
          <span className='px-4 py-10 rounded-md bg-white'>Col 2</span>
          <span className='px-4 py-10 rounded-md bg-white'>Col 3</span>
          <span className='px-4 py-10 rounded-md bg-white'>Col 4</span>
        </div>
      </div>
    </div>
  )
}

export default Home