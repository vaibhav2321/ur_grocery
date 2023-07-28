import React from 'react'
import vegitables from '../../ASSETS/vegitables.png'
import grocery from '../../ASSETS/grocery.png'
import fruits from '../../ASSETS/fruits.png'
import lentils from '../../ASSETS/lentils.png'
import Non_veg from '../../ASSETS/Non veg.png'
import dry_fruits from '../../ASSETS/dry fruits.png'
import './CategorySidebar.css'
const CategorySidebar = () => {
    const data = [
        {
            id:1,
            categoryimage : vegitables,
            categoryname : "Category 1"
        },
        {
            id:2,
            categoryimage : grocery,
            categoryname : "Category 2"
        },
        {
            id:3,
            categoryimage : fruits,
            categoryname : "Category 3"
        },
        {
            id:4,
            categoryimage : lentils,
            categoryname : "Category 4"
        },
        {
            id:5,
            categoryimage : Non_veg,
            categoryname : "Category 5"
        },
        {
            id:6,
            categoryimage : dry_fruits,
            categoryname : "Category 6"
        },
        {
            id:7,
            categoryimage : vegitables,
            categoryname : "Category 7"
        },
        {
            id:8,
            categoryimage : vegitables,
            categoryname : "Category 8"
        },
        {
            id:9,
            categoryimage : vegitables,
            categoryname : "Category 9"
        },
        {
            id:10,
            categoryimage : vegitables,
            categoryname : "Category 10"
        },
    ]
  return (
    <div className='categorysidebar'>
        {
            data.map((item) => {
                return(
                    <div className='category'>
                    <img src={item.categoryimage} alt="categoryimage" />
                    <h3>{item.categoryname}</h3>
                </div>
                )
            })
        }
    </div>
  )
}

export default CategorySidebar