import ProductHeader from "../ProductHeader/ProductHeader"
import Products from "../Products/Products"

const Flash = () => {
  return (
    <div className="featuredWidth mx-auto">
<ProductHeader title={'Flash Sell Offer'} button={'Show All'}/>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 ">
        <Products title={'Watch of White Band'} price={'89.99'} priceOne={'129.99'} discount={'30%'}/>
        <Products title={'Watch of White Band'} price={'89.99'} priceOne={'129.99'} discount={'30%'}/>
        <Products title={'Watch of White Band'} price={'89.99'} priceOne={'129.99'} discount={'30%'}/>
        <Products title={'Watch of White Band'} price={'89.99'} priceOne={'129.99'} discount={'30%'}/>
        <Products title={'Watch of White Band'} price={'89.99'} priceOne={'129.99'} discount={'30%'}/>
        <Products title={'Watch of White Band'} price={'89.99'} priceOne={'129.99'} discount={'30%'}/>
      </div>
    </div>
  )
}

export default Flash
