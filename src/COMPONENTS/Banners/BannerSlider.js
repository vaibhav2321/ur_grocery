import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './BannerSlider.css';

const BannerSlider = () => {

  const bannerData = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvY2VyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: "Fresh Vegetables and Fruits at your Doorstep",
      description: "We deliver fresh Fruits and Vegetables at your Doorsteps",
      button: "https://www.google.com"
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1516594798947-e65505dbb29d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdyb2Nlcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      title: "Fresh Vegetables and Fruits at your Doorstep",
      description: "We deliver fresh Fruits and Vegetables at your Doorsteps",
      button: "https://www.google.com"
    }
  ]

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className='bannerSlider'>
      <Carousel 
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={3000}
        swipeable={true}
        draggable={true}
        infinite={true}
        arrows={false}
      >
        {
          bannerData.map(item => {
            return (
              <div className="imagecount" key={item.id}>
                <img src={item.image} alt="bannerImage" />
                <div className='content'>
                  <h1>{item.title}</h1>
                  <span>{item.description}</span>
                  <button>Shop More</button>
                </div>
              </div>
            )
          })
        }
      </Carousel>
    </div>
  )
}

export default BannerSlider;
