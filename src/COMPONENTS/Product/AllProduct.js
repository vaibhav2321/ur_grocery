import React from 'react'
import ProductCard from './ProductCard'
import './AllProduct.css'
import vegitables from '../../ASSETS/vegitables.png'
import grocery from '../../ASSETS/grocery.png'
import fruits from '../../ASSETS/fruits.png'
import lentils from '../../ASSETS/lentils.png'
import Non_veg from '../../ASSETS/Non veg.png'
import dry_fruits from '../../ASSETS/dry fruits.png'
const AllProduct = () => {
    const products = [
        {
            id: 1,
            productimage: vegitables,
            productname: "Product 1",
            productprice: 100,
            counttype:"1 each",
            discountpercent:12
        },
        {
            id: 2,
            productimage: fruits,
            productname: "Product 2",
            productprice: 100,
            counttype:"1 per kg",
            discountpercent:12
        },
        {
            id: 3,
            productimage: Non_veg,
            productname: "Product 3",
            productprice: 300,
            counttype:"1 per kg",
            discountpercent:11
        },
        {
            id: 4,
            productimage: lentils,
            productname: "Product 4",
            productprice: 50,
            counttype:"1 per kg",
            discountpercent:12
        },
        {
            id: 5,
            productimage: grocery,
            productname: "Product 5",
            productprice: 1000,
            counttype:"1 each pack",
            discountpercent:20
        },
        {
            id: 6,
            productimage: dry_fruits,
            productname: "Product 6",
            productprice: 800,
            counttype:"1 per kg",
            discountpercent:9
        },
        {
            id: 7,
            productimage: vegitables,
            productname: "Product 7",
            productprice: 100,
            counttype:"1 each",
            discountpercent:12
        },
        {
            id: 8,
            productimage: fruits,
            productname: "Product 8",
            productprice: 100,
            counttype:"1 per kg",
            discountpercent:12
        },
        {
            id: 9,
            productimage: Non_veg,
            productname: "Product 9",
            productprice: 300,
            counttype:"1 per kg",
            discountpercent:11
        },
        {
            id: 10,
            productimage: lentils,
            productname: "Product 10",
            productprice: 50,
            counttype:"1 per kg",
            discountpercent:12
        },
        {
            id: 11,
            productimage: grocery,
            productname: "Product 11",
            productprice: 1000,
            counttype:"1 each pack",
            discountpercent:20
        },
        {
            id: 12,
            productimage: dry_fruits,
            productname: "Product 11",
            productprice: 800,
            counttype:"1 per kg",
            discountpercent:9
        }
    ]
  return (
    <div className='Allproducts'>
        <h1>All Products</h1>
        <div className='products'>
            {
                products.map((item) => {
                    return (
                        <ProductCard data={item} key={item.id} />
                    )
                }
                )
            }
        </div>
    </div>
  )
}

export default AllProduct