import React from 'react'
import { FaAngellist } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
function OurWork() {
    return (
        <div className='OurWork'>
            <Container>
                <div className='conanGood mt-5 mb-5 position-relative'>
                    <FaAngellist className='icon-good' />
                    <h2>We Make This</h2>
                    <p className='text-black-50 text-upperCasee'>Prepare To Be Amazed</p>
                </div>
                <ul className='list-unstyled d-flex justify-content-center mt-5 mb-5 gap-2'>
                    <li className='active rounded-pill'>All</li>
                    <li>Desin</li>
                    <li>Code</li>
                    <li>Photo</li>
                    <li>App</li>
                </ul>
                <div className='row'>
                    <div className='col-sm-6 col-md-4 col-lg-3'>
                        <div className='box mb-3 bg-white' data-work="Application">
                            <img className='img-fluid' src='https://elzerowebschool.github.io/Bootstrap_5_Design_01_Bondi/imgs/work-01.jpg' />
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3'>
                        <div className='box mb-3 bg-white' data-work="Application">
                            <img className='img-fluid' src='https://elzerowebschool.github.io/Bootstrap_5_Design_01_Bondi/imgs/work-01.jpg' />
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3'>
                        <div className='box mb-3 bg-white' data-work="Application">
                            <img className='img-fluid' src='https://elzerowebschool.github.io/Bootstrap_5_Design_01_Bondi/imgs/work-01.jpg' />
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3'>
                        <div className='box mb-3 bg-white' data-work="Application">
                            <img className='img-fluid' src='https://elzerowebschool.github.io/Bootstrap_5_Design_01_Bondi/imgs/work-01.jpg' />
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3'>
                        <div className='box mb-3 bg-white' data-work="Application">
                            <img className='img-fluid' src='https://elzerowebschool.github.io/Bootstrap_5_Design_01_Bondi/imgs/work-01.jpg' />
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3'>
                        <div className='box mb-3 bg-white' data-work="Application">
                            <img className='img-fluid' src='https://elzerowebschool.github.io/Bootstrap_5_Design_01_Bondi/imgs/work-01.jpg' />
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3'>
                        <div className='box mb-3 bg-white' data-work="Application">
                            <img className='img-fluid' src='https://elzerowebschool.github.io/Bootstrap_5_Design_01_Bondi/imgs/work-01.jpg' />
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3'>
                        <div className='box mb-3 bg-white' data-work="Application">
                            <img className='img-fluid' src='https://elzerowebschool.github.io/Bootstrap_5_Design_01_Bondi/imgs/work-01.jpg' />
                        </div>
                    </div>
                </div>
                <a className='btn mt-5 rounded-pill button-main' href="#">I WANT MORE</a>
            </Container>
        </div>
    )
}

export default OurWork;
