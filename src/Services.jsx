import React from "react";
import "./services.css";
import { useState } from "react";
import serviceImage from "./assets/webdesign.png";
import client1 from "./assets/testP1.jpeg";
import client2 from "./assets/testP2.jpeg";
import client3 from "./assets/testp3.jpg";
import client4 from "./assets/testp4.jpg";
import { useParams } from "react-router-dom";

const servicesData = [
  {
"web-development":{

  
  title: "Website Design & Development",
  desc : 'We build high-performance websites, mobile apps, and eCommerce platforms with a focus on UI/UX, security, and seamless functionality.',
  items: [
    "We specialize in Website Design & Development, offering a complete range of digital solutions to bring your ideas to life. From building dynamic websites and mobile apps to crafting seamless eCommerce platforms, our services cater to businesses of all sizes. We provide custom web applications, ensuring tailored solutions that align with your needs. With a strong focus on UI/UX design, we create visually appealing and user-friendly interfaces. Whether it’s WordPress development, landing page design, or reliable hosting services, we ensure high performance, security, and a smooth user experience. Let’s build something extraordinary together",
  ],
}
  },
  {
    "digital-marketing":{

      title: "Digital Marketing",
      desc: "Content Marketing emphasizes valuable and engaging content, whereas SMM leverages social media platforms for brand awareness.",
      items: [
        "SEO (Search Engine Optimization), SEM (Search Engine Marketing), Pay Per Click (PPC), Content Marketing, Social Media Marketing (SMM), Email Marketing, Influencer Marketing, and Affiliate Marketing are all key digital marketing strategies. Each plays a crucial role in enhancing online visibility, driving traffic, and increasing conversions. While SEO focuses on optimizing websites for organic search rankings, SEM and PPC involve paid advertising to attract immediate traffic. Content Marketing emphasizes valuable and engaging content, whereas SMM leverages social media platforms for brand awareness. Email Marketing helps in direct communication with potential customers, Influencer Marketing utilizes popular personalities to promote products, and Affiliate Marketing rewards partners for driving sales through their networks."
      ],
    }
  },
  {
  "branding" :{

      title: "Branding",
      desc:"We provide logo and graphic design, content creation, and label design to enhance brand identity. Our services also include eCommerce photoshoots, brochure & flyer design, corporate branding, and business card design for a professional and cohesive look.",
      items: [
        "We offer a comprehensive range of branding services, including logo designing and graphic designing to create a strong visual identity. Our content creation ensures engaging and impactful messaging, while label designing and eCommerce photoshoots enhance product presentation. Additionally, we specialize in brochure & flyer design, corporate branding, and business card design, helping businesses establish"
    ],
  }
  },
  {
    "Ecommerce Seller":{

      title: "Ecommerce Seller Account Management",
      desc: "Efficient Order & Inventory Management, Ad Campaign Management, and Customer Support Handling further enhance sales and customer satisfaction.",
      items: [
      "Amazon, Flipkart, and Meesho Seller Account Management, along with Product Listing Optimization and Ecommerce Store Setup, are essential for a successful online business. Efficient Order & Inventory Management, Ad Campaign Management, and Customer Support Handling further enhance sales and customer satisfaction."
    ],
  }
  },
];

const clientReviews = [
  {
    image: client1,
    review: "Excellent service! Helped our business grow online.",
    name: "Michael Johnson",
  },
  {
    image: client2,
    review: "Highly professional team. Great results!",
    name: "Emma Williams",
  },
  {
    image: client3,
    review: "Exceptional service. They exceeded my expectations!",
    name: "David Brown",
  },
  {
    image: client4,
    review: "Fantastic support and high-quality work!",
    name: "Sophia Miller",
  },
];

const Services = () => {
const {category} = useParams();
const service = servicesData.find((item)=>item[category])
const { title,desc, items } = service[category];
// const serviceDetails = service[category]; 
if (!service) {
  return <h2>Service not found</h2>;
}
  return (
    <div className="services-container">
      <div className="services-header">
        <h1>{title}</h1>
        <p>
        {desc}
        </p>
      </div>
      <div className="services-image-container">
        <img src={serviceImage} alt="Service" className="service-image" />
      </div>
      <div className="web-page">
       
  
            <div className="service-category" >
              <div className="service-content">
                <h2>{title}</h2>
                <ul>
                  {items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              
              </div>
            </div>
         
  
      </div>
      <div className="client-reviews">
        <h2>Client Reviews</h2>
        <div className="reviews-grid">
          {clientReviews.map((review, index) => (
            <div className="review" key={index}>
              <img src={review.image} alt={review.name} className="review-image" />
              <p>"{review.review}"</p>
              <span>- {review.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
