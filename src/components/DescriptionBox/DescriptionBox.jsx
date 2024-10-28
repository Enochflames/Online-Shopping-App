import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
        </div>
        <div className='descriptionbox-description'>
            <p>
            E-commerce refers to the buying and selling of goods and services over the internet. It has transformed the way consumers shop, offering convenience, a vast selection, and competitive prices. Shoppers can explore products from around the world, read reviews, and make purchases from the comfort of their homes. With secure payment options and fast shipping, e-commerce continues to grow, making it easier than ever for businesses to reach customers and for consumers to find exactly what they need. Embrace the digital marketplace and discover a new era of shopping!
            </p>
            <p>
            An e-commerce app is a mobile application designed to facilitate online shopping directly from your smartphone or tablet. These apps provide users with a convenient platform to browse, search, and purchase products or services from a wide range of categories, including fashion, electronics, home goods, and more.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox