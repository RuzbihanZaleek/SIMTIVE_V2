import React from 'react'
import Breadcrumb from './Breadcrumb'

const Body:React.FC = () => {
  return (
    <div className='p-5 flex flex-col gap-4'>
      <Breadcrumb />
      <div>Grid</div>
    </div>
  )
}

export default Body
