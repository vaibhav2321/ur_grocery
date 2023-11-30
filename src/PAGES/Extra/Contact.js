import React from 'react'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import './Extrapages.css'

const Contact = () => {
    const[rating, setrating] = React.useState(0);
  return (
    <div className='extrapage'>
        <Navbar/>
        <SingleBanner
        heading="Contact Us"
        bannerimage='https://images.unsplash.com/photo-1516594798947-e65505dbb29d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdyb2Nlcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
        />
        <div className="pgleft pgcommon">
            <img src="https://images.unsplash.com/photo-1516594798947-e65505dbb29d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdyb2Nlcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="noimg" />
            <div>
                <h1> Our Story</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, tempora. Esse quia impedit commodi velit perspiciatis nesciunt maiores molestiae adipisci neque maxime, iure ipsa optio ratione est aliquid quae fuga.
                Beatae cumque doloremque saepe, itaque dolores voluptatibus ab repellendus repudiandae incidunt deserunt iste quod laborum odit aut quia culpa assumenda eos modi ullam cupiditate non voluptatum numquam tenetur earum! Officiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nemo rem vitae deserunt expedita id voluptate soluta sit distinctio quidem non quos beatae sunt maxime ad, veritatis minima pariatur maiores!</p>
            </div>
        </div>
        <div className="pgright pgcommon">
            <img src="https://images.unsplash.com/photo-1516594798947-e65505dbb29d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdyb2Nlcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="noimg" />
            <div><h1> Who are we</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quas distinctio sit ratione quis id odit debitis. Quam dicta commodi totam molestias, beatae inventore exercitationem! Corporis nulla similique eligendi. Tenetur.
                Doloremque tempora itaque excepturi veritatis voluptatem minus a modi porro est qui voluptatum, obcaecati, illo vel esse, ipsa sit suscipit minima totam? Laboriosam placeat minus molestiae? Voluptatibus corrupti quas itaque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nemo rem vitae deserunt expedita id voluptate soluta sit distinctio quidem non quos beatae sunt maxime ad, veritatis minima pariatur maiores!</p>
            
            </div>
        </div>

        <form className='extrapageform'>
            <h1 className='formheading'>Get in Touch</h1>
              <div className="fromgroup">
                <label htmlFor="">Name</label>
                <input type="text"/>
              </div>
              <div className="fromgroup">
                <label htmlFor="">Email</label>
                <input type="text"/>
              </div>
              <div className="fromgroup">
                <label htmlFor="">Massage</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
              <div className="fromgroup">
                <label htmlFor="">Rating 
                </label>
                <div className="rating">
                  <div className="star"
                  onClick={()=>{
                    setrating(1)
                  }}
                  >
                    {
                      rating >= 1 ?
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 staractive">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                      </svg>
                      :
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 starinactive">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                      </svg>                    
                    }
                  </div>
                  <div className="star"
                  onClick={()=>{
                    setrating(2)
                  }}
                  >
                    {
                      rating >= 2 ?
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 staractive">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                      </svg>
                      :
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 starinactive">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                      </svg>                    
                    }
                  </div>
                  <div className="star"
                  onClick={()=>{
                    setrating(3)
                  }}
                  >
                    {
                      rating >= 3 ?
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 staractive">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                      </svg>
                      :
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 starinactive">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                      </svg>                    
                    }
                  </div>
                  <div className="star"
                  onClick={()=>{
                    setrating(4)
                  }}
                  >
                    {
                      rating >= 4 ?
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 staractive">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                      </svg>
                      :
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 starinactive">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                      </svg>                    
                    }
                  </div>
                  <div className="star"
                  onClick={()=>{
                    setrating(5)
                  }}
                  >
                    {
                      rating >= 5 ?
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 staractive">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                      </svg>
                      :
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 starinactive">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                      </svg>                    
                    }
                  </div>
                </div>
              </div>
              <button>Submit</button>
            </form>

        <Footer1/>
        <Footer2/>
    </div>
  )
}

export default Contact