import React from 'react'
import './HomeCategories.css'
import vegitables from '../../ASSETS/vegitables.png'
import grocery from '../../ASSETS/grocery.png'
import fruits from '../../ASSETS/fruits.png'
import lentils from '../../ASSETS/lentils.png'
import Non_veg from '../../ASSETS/Non veg.png'
import dry_fruits from '../../ASSETS/dry fruits.png'
const HomeCategories = () => {
  return (
    <div className='homecategories'>
        <div className='container'>
          <img src={vegitables} alt="vegitables" width={300} height={373}/>
          <div className='content'>
            <h1> vegitables at your doorstep</h1>
            <span>shop vegitables now</span>
          </div>
        </div>
        <div className='container'>
          <img src={grocery} alt="grocery"  width={300} height={400}/>
          <div className='content'>
            <h1> grocery at your doorstep</h1>
            <p>shop grocery now</p>
          </div>
        </div>
        <div className='container'>
          <img src={fruits} alt="fruits"  width={300} height={400} />
          <div className='content'>
            <h1> fruits at your doorstep</h1>
            <p>shop fruits now</p>
          </div>
        </div>
        <div className='container'>
          <img src={lentils} alt="lentils"  width={300} height={400} />
          <div className='content'>
            <h1> lentils at your doorstep</h1>
            <p>shop lentils now</p>
          </div>
        </div>
        <div className='container'>
          <img src={Non_veg} alt="Non veg"  width={300} height={400}ju />
          <div className='content'>
          <h1> Non-veg at your doorstep</h1>
            <p>shop Non-veg now</p>
          </div>
        </div>
        <div className='container'>
          <img src={dry_fruits} alt="dry fruits" width={300} height={418}/>
          <div className='content'>
            <h1> dry fruits at your doorstep</h1>
            <span>shop dry fruits now</span>
          </div>
        </div>
    </div>
  )
}

export default HomeCategories