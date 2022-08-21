import React from 'react'
import { TbNumber1, TbNumber2, TbNumber3 } from "react-icons/tb";
import { BsFillPencilFill } from "react-icons/bs";
import Container from 'react-bootstrap/Container';
import { CgScreen, CgSandClock } from "react-icons/cg";
function SectionNum() {
    return (
        <Container>

            <div className='row'>
                <div className='col-md-6 col-lg-4'>
                    <div className='feat'>
                        <div className='icon-holder position-relative'>
                            <TbNumber1 className='position-absolute bottom-0 number' />
                            <BsFillPencilFill className='position-absolute bottom-0 iconPen' />
                        </div>
                        <h4 className='mb-3 mt-3 text-uppercase'>Graphic Design</h4>
                        <p className='text-black-50 lh-lg '>Quickly manage the layout, alignment, and sizing of grid
                            columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.</p>
                    </div>
                </div>
                <div className='col-md-6 col-lg-4'>
                    <div className='feat'>
                        <div className='icon-holder position-relative'>
                            <TbNumber2 className='position-absolute bottom-0 number' />
                            <CgScreen className='position-absolute bottom-0 iconPen' />
                        </div>
                        <h4 className='mb-3 mt-3 text-uppercase'>Graphic Design</h4>
                        <p className='text-black-50 lh-lg '>Quickly manage the layout, alignment, and sizing of grid
                            columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.</p>
                    </div>
                </div>
                <div className='col-md-6 col-lg-4'>
                    <div className='feat'>
                        <div className='icon-holder position-relative'>
                            <TbNumber3 className='position-absolute bottom-0 number' />
                            <CgSandClock className='position-absolute bottom-0 iconPen' />
                        </div>
                        <h4 className='mb-3 mt-3 text-uppercase'>Graphic Design</h4>
                        <p className='text-black-50 lh-lg '>Quickly manage the layout, alignment, and sizing of grid
                            columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default SectionNum
