import React from 'react'
import CreationCard from './CreationCard'
import { creationData } from '../data/data'

const CreationSection = () => {
  return (
    <div className='container'>
     <div className='d-flex justify-content-between align-items-center py-3'>
        <h3>OUR CREATIONS</h3>
        <div>
            <button className='btn btn-white border border-dark text-dark'>SEE ALL</button>
        </div>
    </div>   
    <div className='d-flex justify-content-center align-items-center gap-3 flex-wrap py-3 py-md-5'>
        {creationData.map(item => (
           <CreationCard key={item.id} name={item.name} image={item.image}/> 
        ))}
        
    </div>
    </div>
    
  )
}

export default CreationSection