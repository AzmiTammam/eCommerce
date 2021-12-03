import React from 'react'
import "./homepage.styles.css"
import FeaturedProducts from '../../components/featured-products/featured-products.component'

const HomePage = ({items}) => {
    return (
        <div>
            <h1 className="featured-products-title">OUR FEATURED PRODUCTS</h1>
            <div className="featured-products-container">
                {items.filter((element,index) => index<3).map(item => <FeaturedProducts key={item.id} item={item}/>)}
            </div>
        </div>
    )
}

export default HomePage
