import React,{useState} from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'

const ProductCard = ({data}) => {
  const [show,setshow] = useState(false)
  const [qty,setqty]= useState(1)

  const getproductid=()=>{
    alert(data.id)
  }
  return (
    <div className='product'>
        <div className='s1'>
            <img src={data.productimage} alt={"no img"} />
        </div>
        <div className='s2'>
            <h3>
              
            ₹{
                    data.productprice - (data.productprice * data.discountpercent /100 )
                }
                <span>₹{data.productprice}</span></h3>
                <p>
                  {data.productname}
                </p>
        </div>
        <div className='s3'>
            <p>{data.counttype}kg</p>
        </div>
        {
          show ? 
          <div className='addbtn'>
            <div className='qty'>
              <button onClick={()=>{
                if(qty>1){
                  setqty(qty-1)
                }
              }}>-</button>
              <p>{qty}</p>
              <button onClick={()=> setqty(qty+1)}>+</button>
              </div>
              <button className='addtocart'
              onClick={()=>{
                // setqty(1)
                alert("added to cart")
              }}
              >Add to cart</button>
            </div>
          :
          <div className='addbtn'>
       <Link
       to={'/product/${data.id}'}
       >
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
        fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"
        // onClick={()=> getproductid()}
        >
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 
  8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0
   3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122
   .183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8
    12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.
  5 3.5 0 0 1-7 0z"/>
</svg>
       </Link>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16"
      onClick={() => setshow(true)}
      >

  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>

        </div>
        }
    </div>
  )
}

export default ProductCard