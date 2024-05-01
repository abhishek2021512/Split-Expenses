import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Modal, Button } from 'react-bootstrap';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import Logo from '../assets/logo.svg';
import FeedBack from './FeedBack'; // Import the FeedBack component

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <footer className="text-black py-8" style={{ backgroundColor: '#f5f5dc' }}>
  <div className="container mx-auto flex justify-between">
    {/* Column 1 - WI$E */}
    <div className="footer-column">
      <h3 className="font-bold mb-4">WI$E</h3>
      <ul className="list-none">
        <li className="mb-2 hover:text-gray-400">
          <Link to="/About">About</Link>
        </li>
        <li className="mb-2 hover:text-gray-400">
          <Link to={"/Dashboard"}>Home</Link>
        </li>
      </ul>
    </div>
    {/* Column 2 - Account */}
    <div className="footer-column">
      <h3 className="font-bold mb-4">Account</h3>
      <ul className="list-none">
        <li className="mb-2 hover:text-gray-400">
          <Link to={"/Login"}>Login</Link>
        </li>
        <li className="mb-2 hover:text-gray-400">
          <Link to={"/Signup"}>Sign up</Link>
        </li>
        {/* <li className="mb-2 hover:text-gray-400">Reset Password</li> */}
      </ul>
    </div>
    {/* Column 3 - More */}
    <div className="footer-column relative"> {/* Add relative class */}
      <h3 className="font-bold mb-4">More</h3>
      <ul className="list-none">
        <li className="mb-2 ">Contact Us 
        <li>Email : support@gmail.com</li>
        <li>Phone : 10000007</li>
        </li>
        <li className="mb-2 hover:text-gray-400">
          <Link to="/FeedBack">Feedback</Link>
        </li>
        <li className="flex items-center justify-end absolute bottom-0 right-0 mb-2 hover:text-gray-400"> {/* Position the icons at bottom right */}
          <img width="32" height="32" src="https://img.icons8.com/dusk/32/instagram-new--v1.png" alt="instagram-new--v1" />
          <img width="32" height="32" src="https://img.icons8.com/plasticine/32/facebook-new.png" alt="facebook-new" />
        </li>
      </ul>
    </div>
  </div>
</footer>

  );
};

export default Footer;
