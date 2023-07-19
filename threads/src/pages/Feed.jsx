import React ,{useEffect, useState} from 'react'
import Thread from '../components/Thread'
function Feed() {
    
  return (
    <div className='container mx-auto w-[600px]'>
      <Thread/>
      <Thread/>
      <Thread/>
      <Thread/>
      <Thread/>
     
    </div>
  )
}

export default Feed
