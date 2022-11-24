import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../../asset/furniture/banner.jpg'

const Footer = () => {
    return (
        <footer
        // style={{
        //     background: `url(${footer})`,
        //     backgroundSize: 'cover'
        // }}
    className="p-10">
        <div className='footer'>
            <div>
                <span className="footer-title">All Service</span>
                <Link to="/" className="link link-hover">Branding</Link>
                <Link to="/" className="link link-hover">Design</Link>
                <Link to="/" className="link link-hover">our Priducts</Link>
                <Link to="/" className="link link-hover">Advertisement</Link>
            </div>
            <div>
                <span className="footer-title">Pertex</span>
                <Link to="/" className="link link-hover">About us</Link>
                <Link to="/" className="link link-hover">Contact Us</Link>
                <Link to="/" className="link link-hover">Categories</Link>
                <Link to="/" className="link link-hover">Our Team</Link>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link to="/" className="link link-hover">Terms of use</Link>
                <Link to="/" className="link link-hover">Privacy policy</Link>
                <Link to="/" className="link link-hover">Cookie policy</Link>
            </div>
        </div>
        <div className='text-center mt-32'>
            <p>Copyright © 2022 - All right reserved by Partex Resale Company LTD. </p>
        </div>
    </footer>
    );
};

export default Footer;