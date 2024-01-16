import React from 'react'
import ProductHeader from '../ProductHeader/ProductHeader'
import Products from '../Products/Products'
import CategroyComponent from '../CategoryComponent/CategroyComponent'

const CategotyProduct = () => {
  return (
    <div className="featuredWidth mx-auto">
<ProductHeader title={'Catagories'} button={'Show All'}/>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 ">
        <CategroyComponent title={'Watch of White Band'}/>
        <CategroyComponent title={'Watch of White Band'}/>
        <CategroyComponent title={'Watch of White Band'}/>
        <CategroyComponent title={'Watch of White Band'}/>
        <CategroyComponent title={'Watch of White Band'}/>
        <CategroyComponent title={'Watch of White Band'}/>
        <CategroyComponent title={'Watch of White Band'}/>
        <CategroyComponent title={'Watch of White Band'}/>
        <CategroyComponent title={'Watch of White Band'}/>
        <CategroyComponent title={'Watch of White Band'}/>
        <CategroyComponent title={'Watch of White Band'}/>
        <CategroyComponent title={'Watch of White Band'}/>
        <CategroyComponent title={'Watch of White Band'}/>
        <CategroyComponent title={'Watch of White Band'}/>
        <CategroyComponent title={'Watch of White Band'}/>
        <CategroyComponent title={'Watch of White Band'}/>
        <CategroyComponent title={'Watch of White Band'}/>
        <CategroyComponent title={'Watch of White Band'}/>

      </div>
    </div>
  )
}

export default CategotyProduct
