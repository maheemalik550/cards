


export const Product_card =(props)=>{
    const set_data_handle = ()=>{
        props.click_handle(props)
    }
  return <>
    <div onClick={set_data_handle} className='mx-12' >
        <img src={props.image} alt="" />
        <p>{props.title}</p>
        <h2>{props.price}</h2>
        </div></>
}