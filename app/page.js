import Category from '@/Components/Category/Category'
import CategotyProduct from '@/Components/CategoryProduct/CategotyProduct'
import Feature from '@/Components/Feature/Feature'
import Flash from '@/Components/Flash/Flash'
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'
import Just from '@/Components/Just/Just'

import Recent from '@/Components/Recent/Recent'

import Navbar from "@/Components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Feature/>
      <Category/>
      <Flash/>
      <CategotyProduct/>
      <Just/>
      <Recent/>
      <Footer/>
    </div>
  )
}
 