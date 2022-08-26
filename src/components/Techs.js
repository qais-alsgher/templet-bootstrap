import React from 'react';
import Container from 'react-bootstrap/Container';
function Techs() {
    return (
        <div className='techs pt-5 pb-5 text-center'>
            <Container>
                <div className='row align-items-center'>
                    <div className='col-sm-6 col-md-4 col-lg-2 mb-3'>
                        <img className='img-fluid' src="https://elzerowebschool.github.io/Bootstrap_5_Design_01_Bondi/imgs/tech-1.png" />
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-2 mb-3'>
                        <img className='img-fluid' src="https://elzerowebschool.github.io/Bootstrap_5_Design_01_Bondi/imgs/tech-2.png" />
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-2 mb-3'>
                        <img className='img-fluid' src="https://elzerowebschool.github.io/Bootstrap_5_Design_01_Bondi/imgs/tech-3.png" />
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-2 mb-3'>
                        <img className='img-fluid' src="https://elzerowebschool.github.io/Bootstrap_5_Design_01_Bondi/imgs/tech-1.png" />
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-2 mb-3'>
                        <img className='img-fluid' src="https://elzerowebschool.github.io/Bootstrap_5_Design_01_Bondi/imgs/tech-2.png" />
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-2 mb-3'>
                        <img className='img-fluid' src="https://elzerowebschool.github.io/Bootstrap_5_Design_01_Bondi/imgs/tech-4.png" />
                    </div>
                </div>
            </Container>
            <div className='project pt-5 pb-5 text-center text-light'>
                <h2>Start Your Project Now</h2>
                <p className='text-black-50'>Leave your description and we start the engine.Don't worry,you can cancel anytime</p>
                <a className='btn mt-5 rounded-pill button-main' href="#">START Project</a>
            </div>
        </div>
    )
}

export default Techs;
