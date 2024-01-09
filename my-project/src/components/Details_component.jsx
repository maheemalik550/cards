
const Detail_component = (props)=>{
return <>
<div className="flex" > 
    <div className="w-300">
      <img src={props.image} alt="" />
       
    </div>
    <div className="ps-20 pe-34 p-20 gap-5"  >
        <h1>{props.title}</h1>
        <div className="flex text-pink-300 gap-1 pt-6">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>

        </div>
<h2 className="pt-6 text-2xl" >color:</h2>
<div  className="flex gap-2 text-2xl pt-6" >
<i class="fa fa-circle text-green-300"></i>
<i class="fa fa-circle text-yellow-300"></i>
<i class="fa fa-circle text-red-500"></i>
<i  class="fa fa-circle text-blue-500"></i>

</div>
<h2 className="text-3xl pt-6 " >{props.price}</h2>
<button className="border-red-600 mt-6" onClick={props.go_back_handle} >go back</button>
    </div>
</div>
</>
}
export {Detail_component}