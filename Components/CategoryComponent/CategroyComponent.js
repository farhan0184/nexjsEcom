import Image from 'next/image'
import React from 'react'

const CategroyComponent = ({title}) => {
  return (
  
    
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
  <figure><Image width={300} height={500} src="/image/product.webp" alt="Product" /></figure>
  <div className="card-body">
    <h2 className="card-title text-[14px]">{title}</h2>
  
  </div>
</div>
    </div>

  )
}

export default CategroyComponent
