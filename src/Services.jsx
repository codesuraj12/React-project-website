import React from "react";
import "./services.css";
import serviceImage from "./assets/service.png";
import client1 from "./assets/testP1.jpeg";
import client2 from "./assets/testP2.jpeg";
import client3 from "./assets/testp3.jpg";
import client4 from "./assets/testp4.jpg";

const servicesData = [
  {
    title: "Website Design & Development",
    items: [
      "Website Development",
      "Mobile App Development",
      "Ecommerce App Development",
      "Hosting Service",
      "Custom Web Applications",
      "UI/UX Design",
      "WordPress Development",
      "Landing Page Design",
    ],
  },
  {
    title: "Digital Marketing",
    items: [
      "SEO (Search Engine Optimization)",
      "SEM (Search Engine Marketing)",
      "Pay Per Click (PPC)",
      "Content Marketing",
      "Social Media Marketing (SMM)",
      "Email Marketing",
      "Influencer Marketing",
      "Affiliate Marketing",
    ],
  },
  {
    title: "Branding",
    items: [
      "Logo Designing",
      "Graphic Designing",
      "Content Creation",
      "Label Designing",
      "Ecommerce Photoshoot",
      "Brochure & Flyer Design",
      "Corporate Branding",
      "Business Card Design",
    ],
  },
  {
    title: "Ecommerce Seller Account Management",
    items: [
      "Amazon Seller Account Management",
      "Flipkart Seller Account Management",
      "Meesho Seller Account Management",
      "Product Listing Optimization",
      "Ecommerce Store Setup",
      "Order & Inventory Management",
      "Ad Campaign Management",
      "Customer Support Handling",
    ],
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
  return (
    <div className="services-container">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>
          We offer a wide range of professional services to help you grow your
          business in the digital world. From development to branding and
          marketing, we have got you covered.
        </p>
      </div>
      <div className="services-image-container">
        <img src={serviceImage} alt="Service" className="service-image" />
      </div>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-category" key={index}>
            <div className="service-content">
              <h2>{service.title}</h2>
              <ul>
                {service.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
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
