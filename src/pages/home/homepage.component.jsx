import React from 'react'
import "./homepage.styles.css"
import FeaturedProducts from '../../components/featured-products/featured-products.component'
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage'
import Testimonials from '../../components/Testimonials/Testimonials'
import About from '../../components/about/about.component'
import Youtube from "../../components/youtube-api/youtube.component"
const HomePage = ({items,currentUser,addToCart}) => {
    return (
        <div>
            <BackgroundImage />
            <h1 className="featured-products-title">OUR FEATURED PRODUCTS</h1>
            <div className="featured-products-container">
                {items.filter((element,index) => index<3).map(item => <FeaturedProducts key={item.id} item={item} addToCart={addToCart} currentUser={currentUser}/>)}
            </div>
            <About />
            <div className="video">
            <Youtube />
            </div>
            <Testimonials />
        </div>
    )
}

export default HomePage
