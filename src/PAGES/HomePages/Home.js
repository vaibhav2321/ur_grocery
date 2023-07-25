import React from "react";
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import BannerSlider from "../../COMPONENTS/Banners/BannerSlider";
import HomeCategories from "../../COMPONENTS/Category/HomeCategories";

const Home =() => {
    return(
        <div>
            <Navbar/>
            <BannerSlider/>
            <HomeCategories/>
        </div>
    )
}

export default Home