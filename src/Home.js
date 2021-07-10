import React from 'react'
import "./Home.css"
import banner from './banner.jpg'
import Product from './Product'
import lean from './pr1jpg.jpg'
import shoes from './shoes.jpeg'
import tv from './tv.jpeg'
import trimmer from './trimmer.jpeg'
import phone from './iphone.jpeg'
import speaker from './speaker.jpeg'

function Home() {
    return (
        <div className="home">
            <img className="home__image" src={banner} alt=""/>

            {/* product */}
            <div className="home__row">
            <Product
             id="12324" 
             title="The lean startup : How Constant Innovation Creates Radically Successful Businesses Paperback"
             price={11.96}
             rating={5}
             image={lean}
             />
              <Product
             id="12324" 
             title="The lean startup : How Constant Innovation Creates Radically Successful Businesses Paperback"
             price={11.00}
             rating={4}
             image={shoes}
             />
        </div>
        <div className="home__row">
            <Product
             id="12324" 
             title="The lean startup : How Constant Innovation Creates Radically Successful Businesses Paperback"
             price={12.20}
             rating={3}
             image={tv}
             />
              <Product
             id="12324" 
             title="The lean startup : How Constant Innovation Creates Radically Successful Businesses Paperback"
             price={5.12}
             rating={5}
             image={trimmer}
             />
             <Product
             id="12324" 
             title="The lean startup : How Constant Innovation Creates Radically Successful Businesses Paperback"
             price={101.29}
             rating={4}
             image={phone}
             />
        </div>
        <div className="home__row">
            <Product
             id="12324" 
             title="The lean startup : How Constant Innovation Creates Radically Successful Businesses Paperback"
             price={25.91}
             rating={2}
             image={speaker}
             />
        </div>
            </div>
            
    )
}

export default Home
