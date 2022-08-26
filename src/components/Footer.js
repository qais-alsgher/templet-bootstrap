import React from 'react';
import Container from 'react-bootstrap/Container';
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";

function Footer() {
    return (
        <div className='footer pt-5 pb-5 text-white-50 text-md-start'>
            <Container>
                <div className='row'>
                    <div className='col-lg-4 col-md-6'>
                        <img src="https://elzerowebschool.github.io/Bootstrap_5_Design_01_Bondi/imgs/logo.png" />
                        <p className=' mt-4 mb-5'>Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
                        <div className="copyright">
                            Created By <span>Qais Alsgher</span>
                            <div>&copy;2022-<span>Bondi Inc</span></div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="Links">
                            <h5 className="text-light">Links</h5>
                            <ul className="list-unstyled lh-lg">
                                <li >Home</li>
                                <li>Our Services</li>
                                <li>Portfolio</li>
                                <li>Testimonials</li>
                                <li>Support</li>
                                <li>Terms and Condition</li>
                            </ul>
                        </div>
                    </div>
                    <div className='about col-lg-2 col-md-6'>
                        <h5 className='text-light'>About Us</h5>
                        <ul className='list-unstyled lh-lg'>
                            <li>Sign In</li>
                            <li>Register</li>
                            <li>About Us</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                        <h5 className='text-light'>Contact Us</h5>
                        <p className='mt-3 mb-5'>Get in touch with us via mail phone.We are waiting for your call or message</p>
                        <a className='btn  mb-5 rounded-pill button-main w-100' href="#">qaisalsgher@gmail.com</a>
                        <ul className='list-unstyled d-flex gap-4 logo-contact'>
                            <li><BsFacebook className='facebook rounded-circle' /></li>
                            <li><AiFillTwitterCircle className='twitter rounded-circle' /></li>
                            <li><BsLinkedin className='linkedin rounded-circle' /></li>
                            <li><AiFillYoutube className='youtube rounded-circle' /></li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer;
