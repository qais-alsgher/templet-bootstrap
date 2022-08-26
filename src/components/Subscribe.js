import React from 'react';
import Container from 'react-bootstrap/Container';
function Subscribe() {
    return (
        <div className='text-center text-md-start pb-5 pt-5 subscribe'>
            <Container>
                <div className='row align-items-center'>
                    <div className='col-lg-3 col-md-6 fs-5 fw-bold'>
                        <p>Subscribe to our Newsletter:</p>
                    </div>
                    <form className='col-lg-7 col-md-6'>
                        <input type="text" placeholder='Enter Email Address' className='w-100 subEmail text-light bg-transparent pb-2' />
                    </form>
                    <div className='col-lg-2 col col-md-6'>
                        <a className='btn mt-5 rounded-pill subButton' href="#">Subscribe</a>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Subscribe;
