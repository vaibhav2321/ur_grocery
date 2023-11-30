import React from 'react'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import './Extrapages.css'

const About = () => {
  return (
    <div className='extrapage'>
        <Navbar/>
        <SingleBanner
        heading="About Us"
        bannerimage='https://images.unsplash.com/photo-1516594798947-e65505dbb29d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdyb2Nlcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
        />
        <div className="pgleft pgcommon">
            <img src="https://images.unsplash.com/photo-1516594798947-e65505dbb29d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdyb2Nlcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="noimg" />
            <div>
                <h1> Our Story</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, tempora. Esse quia impedit commodi velit perspiciatis nesciunt maiores molestiae adipisci neque maxime, iure ipsa optio ratione est aliquid quae fuga.
                Beatae dolorum cumque doloremque saepe, itaque dolores voluptatibus ab repellendus repudiandae incidunt deserunt iste quod laborum odit aut quia culpa assumenda eos modi ullam cupiditate non voluptatum numquam tenetur earum! Officiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nemo rem vitae deserunt expedita id voluptate soluta sit distinctio quidem non quos beatae sunt maxime ad, veritatis minima pariatur maiores!</p>
            </div>
        </div>
        <div className="pgright pgcommon">
            <img src="https://images.unsplash.com/photo-1516594798947-e65505dbb29d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdyb2Nlcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="noimg" />
            <div><h1> Who are we</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quas distinctio sit ratione quis id odit debitis. Quam dicta commodi totam molestias, beatae inventore exercitationem! Corporis nulla similique eligendi. Tenetur.
                Doloremqu itaque excepturi veritatis voluptatem minus a modi porro est qui voluptatum, obcaecati, illo vel esse, ipsa sit suscipit minima totam? Laboriosam placeat minus molestiae? Voluptatibus corrupti quas itaque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nemo rem vitae deserunt expedita id voluptate soluta sit distinctio quidem non quos beatae sunt maxime ad, veritatis minima pariatur maiores!</p>
            
            </div>
        </div>
        <Footer1/>
        <Footer2/>
    </div>
  )
}

export default About