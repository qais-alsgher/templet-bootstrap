
import React from 'react';
import Container from 'react-bootstrap/Container';
import { FaAngellist } from "react-icons/fa";
import Card from 'react-bootstrap/Card';

function Blog() {
    return (
        <div className='blog pt-5 pb-5'>
            <Container>
                <div className='conanGood mt-5 mb-5 position-relative'>
                    <FaAngellist className='icon-good' />
                    <h2>Read Our Blog</h2>
                    <p className='text-black-50 text-upperCasee'>NEW STORIES</p>
                </div>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 gap-1' >
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://elzerowebschool.github.io/Bootstrap_5_Design_01_Bondi/imgs/blog-3.jpg" />
                            <Card.Body>
                                <p className='text-black-50 text-start'>Jan 17, 2022</p>
                                <Card.Title className='text-start'>Some Awesome Blog Title Here</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-lg-4 col-md-6 gap-1' >
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://elzerowebschool.github.io/Bootstrap_5_Design_01_Bondi/imgs/blog-3.jpg" />
                            <Card.Body>
                                <p className='text-black-50 text-start'>Jan 17, 2022</p>
                                <Card.Title className='text-start'>Some Awesome Blog Title Here</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-lg-4 col-md-6 gap-1' >
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://elzerowebschool.github.io/Bootstrap_5_Design_01_Bondi/imgs/blog-3.jpg" />
                            <Card.Body>
                                <p className='text-black-50 text-start'>Jan 17, 2022</p>
                                <Card.Title className='text-start'>Some Awesome Blog Title Here</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Blog;
