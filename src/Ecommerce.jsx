import React from 'react'
import serviceImage from "./assets/service.png"

import { useParams } from "react-router-dom";
import './Ecommerce.css'

const EcommerceData = 
    {
        'Amezon': {
            "title": "Amezon Seller Management",
            "desc": "Amazon Seller Management refers to the process of handling and optimizing an Amazon seller account to maximize sales, improve product visibility, and enhance customer satisfaction. It includes various tasks such as product listing optimization, inventory management, pricing strategies, order fulfillment, customer service, and performance monitoring. Effective Amazon seller management helps businesses scale their online presence, maintain high seller ratings, and stay competitive in the marketplace by leveraging Amazon's tools and data-driven strategy",
            "item" : " It includes various tasks such as product listing optimization, inventory management, pricing strategies, order fulfillment, customer service, and performance monitoring. Effective Amazon seller management helps businesses scale their online presence, maintain high seller ratings, and stay competitive in the marketplace by leveraging Amazon's tools and data-driven strategy"
        },
        'Flipkart': {
            "title": "Flipkart Seller Management",
            "desc": "Flipkart Seller Management refers to the system and tools provided by Flipkart to help sellers manage their online business on the platform. It includes features like product listing, inventory management, order processing, payments, promotions, and customer support. Sellers can track their sales performance, analyze data, and optimize their strategies to boost growth.",
            "item" : "It includes features like product listing, inventory management, order processing, payments, promotions, and customer support. Sellers can track their sales performance, analyze data, and optimize their strategies to boost growth."
        },
        'store': {
            "title": "Store Setup",
            "desc": " Efficient inventory management prevents stockouts or overstocking, while streamlined order processing enhances customer satisfaction and business efficiency. ",
            "item":"This includes tracking stock levels, updating product availability, processing orders, managing returns, and ensuring timely shipping. Efficient inventory management prevents stockouts or overstocking, while streamlined order processing enhances customer satisfaction and business efficiency."
        },
        'Inventory': {
            "title": "Order & Inventory Management",
            "desc": "This includes tracking stock levels, updating product availability, processing orders, managing returns, and ensuring timely shipping. Efficient inventory management prevents stockouts or overstocking, while streamlined order processing enhances customer satisfaction and business efficiency.",
            "item" : "Efficient inventory management prevents stockouts or overstocking, while streamlined order processing enhances customer satisfaction and business efficiency."
        },
        'adcampaign': {
            "title": "Ad Campaign Management ",
            "desc": "",
            "item":"Running successful ad campaigns involves creating targeted advertisements, setting budgets, selecting the right audience, and optimizing ad performance based on data insights. Effective campaign management increases product visibility, attracts potential buyers, and maximizes return on investment (ROI)."
        },
        
    }


const Ecommerce = () => {
 
    const {menu} = useParams()
    const {title, desc,item} = EcommerceData[menu]


    return (
        <div className="ecommerce-container">
            <div className="ecommerce-header">
                <h1>{title}</h1>
                <p>
                    {desc}
                </p>
            </div>
            <div className="ecommerce-image-container">
                <img src={serviceImage} alt="Service" className="service-image" />
            </div>
            <div className="web-page">


                <div className="ecommerce-category" >
                    <div className="ecommerce-content">
                        <h2>{title}</h2>
                        <p>{item}</p>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ecommerce