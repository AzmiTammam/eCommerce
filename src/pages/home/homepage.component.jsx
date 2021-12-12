import React from 'react'
import "./homepage.styles.css"
import FeaturedProducts from '../../components/featured-products/featured-products.component'
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage'
import Testimonials from '../../components/Testimonials/Testimonials'
import About from '../../components/about/about.component'
import YouTube from "../../components/youtube-api/youtube.component"
import { Link } from 'react-router-dom'



const HomePage = ({items,currentUser,addToCart}) => {
    return (
        <div>
            <BackgroundImage />
            <div className="featured-products">
            <h1 className="featured-products-title">Our Feautured Products</h1>
            </div>   
            <div className="featured-products-container">
                {items.filter((element,index) => index<3).map(item => <FeaturedProducts key={item.id} item={item} addToCart={addToCart} currentUser={currentUser}/>)}
            </div>
            <div className='go-to-shop-container'>
                <Link to="/shop" ><button className='go-to-shop-from-home'>Shop</button></Link>
            </div>
            <About />
            <div className="video">
            <YouTube />
            </div>
            <Testimonials />
        </div>
    )
}

export default HomePage
