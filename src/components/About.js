import React from 'react'
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
export default function About() {
  return (
    <div className='about-wrapper'>
      <Link to="/"><FaHome  className='home-link'></FaHome></Link>
      <h2 className='about'>About Us</h2>
      <p className='about-desc'>
      Welcome to Furniture Store!

We are a team of professionals who take pride in presenting to you a wide range of high-quality furniture for your home. Our mission is to create a cozy, functional, and stylish space for your life.

Our Principles:

Quality and Reliability: We strive to offer furniture that will serve you for many years. All our products undergo strict quality control, ensuring the reliability and durability of each piece.

Individual Approach: We understand that every customer is unique. Therefore, we offer a variety of furniture options, as well as the possibility of customization to meet your individual preferences.

Modern Design: Our designers constantly keep an eye on the latest trends in the world of furniture art to offer you products that combine style, aesthetics, and functionality.

Sustainability: We value nature and use only eco-friendly materials in crafting our furniture. This ensures safety for you and your loved ones.

Our Collections:

We offer a wide range of furniture for all rooms in your home - from cozy living rooms to functional kitchens and comfortable bedrooms. Our collections embody a variety of styles - from modern minimalism to classic elegance.

Our Team:

First Name and Last Name, founder of Your Company Name, with number of years of experience in the furniture industry, leads a team of talented designers and skilled craftsmen.

We take pride in our work and aim for every customer to be satisfied with the results of their collaboration with us.

Thank you for choosing Your Company Name. We look forward to the opportunity to create a space that reflects your style and comfort.

For further information or consultation, please feel free to contact us link to contact page.
<br />
Warm regards,
First Name and Last Name
Founder, Your Company Name
      </p>
    </div>
  )
}
