import React from 'react'
import Add from '../components/Add'
import List from '../components/List'


const Home = () => {
  return (
    <>
    
    <h1 className='text-center mt-3'>TO-DO LIST</h1>
    <Add/>
    <List/>

    </>
  )
}

export default Home