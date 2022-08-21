import React from 'react'
import { FaAngellist } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
function Stuff() {
    return (
        <Container>
            <div className='stuff'>
                <div className='conanGood mt-5 mb-5 position-relative'>
                    <FaAngellist className='icon-good' />
                    <h2>Some Stuff About Us</h2>
                    <p className='text-black-50 text-upperCasee'>The Great Team</p>
                </div>
                <p className='description text-center mb-5 text-black-50 m-auto'>Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt
                    nibh pulvinar a. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada.</p>
                <div className='row align-items-center'>
                    <div className='col-lg-4 mb-4 text-center text-md-start'>
                        <div>
                            <h3>Retina Design</h3>
                            <p className='text-black-50'>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
                            <p className='text-black-50 mb-5'>Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada.</p>
                            <a className='btn rounded-pill button-main' href="#">ORDER ME ONE</a>
                        </div>
                    </div>
                    <div className='col-lg-8'>
                        <img className="img-fluid" src="https://elzerowebschool.github.io/Bootstrap_5_Design_01_Bondi/imgs/laptop.png" />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Stuff
