import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Product_card } from './components/Product_card'
import {Detail_component} from './components/Details_component.jsx'


const Product_arr = [
{
  image:"https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-1.jpg",
  title:"Golden easy spot chair",
  price:"$210.00"
},
{
  image:"https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-2.jpg",
  title:"Golden easy spot chair",
  price:"$250.00"
},
{
  image:"https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-3.jpg",
  title:"Golden easy spot chair",
  price:"$310.00"
},
{
  image:"https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-4.jpg",
  title:"Golden easy spot chair",
  price:"$350.00"
}
]





function App() {
  const [current_data,setcurrent_data]= useState(null)
const show_detail_handle =(data)=>{
  setcurrent_data(data)
}
const go_back = ()=>{
  setcurrent_data(false)
}
  return <>
  {current_data ? (
  <Detail_component 
  go_back_handle={go_back}
  image={current_data.image}
  title={current_data.title}
  price={current_data.price}  
   />
  ):(
<div className='flex gap-10 ' >
  {Product_arr.map((current_object,index)=>{
    return <>
    <Product_card
    key={index}
    click_handle={show_detail_handle}
    image={current_object.image}
    title={current_object.title}
    price={current_object.price}
    />
    </>
  })
 
  }

</div>
 )
}
  </>

}

export default App
