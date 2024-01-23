import React from 'react'

const Card = ({ task }) => {
  return (
    <div className='bg-[#494242] p-5 rounded-lg grid'>
      <div className='flex flex-col gap-5'>
        <span className='text-xl'>{task.title}</span>
        <span className='text-lg'>{task.subtitle}</span>
        <button className='bg-indigo-500 rounded'>{task.status}</button>
      </div>
    </div>
  )
}

export default Card
