import React from 'react'
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
export default function Contacts() {
  return (
   <div class="contact-info">
         <Link to="/"><FaHome  className='home-link-contacts'></FaHome></Link>
        <h2>Contact Us</h2>
        <p>Phone: <a href="tel:+11234567890">+1 (123) 456-7890</a></p>
        <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
        <p>Address: 123 Main Street, Cityville, USA</p>
        <p>Business Hours: Mon-Fri, 9:00 AM - 6:00 PM</p>
    </div>
  )
}
