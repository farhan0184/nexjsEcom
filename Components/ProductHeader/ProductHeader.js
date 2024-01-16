import React from 'react'

const ProductHeader = ({title, button}) => {
  return (
    <div className='mb-10'>
            <div className="flex justify-between pt-20">
        <h2 className="text-3xl">{title}</h2>
        <button className="btn btn-outline btn-warning">{button}</button>
      </div>
    </div>
  )
}

export default ProductHeader
