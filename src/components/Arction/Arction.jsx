import React from 'react'
import "../Arction/Arction.css"
import Robo from "./images/robo.svg"

const Arction = () => {
    return (
        <div className='arction'>
            <div className='container'>
                <div className='arction__container'>
                    <ul className='arction__list'>
                        <li className='arction__item'>
                            <h1 className='arction__title'>What our clients say about our awesome solutions</h1>
                            <p className='arction__text'>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it who do not know.</p>
                            <p className='arction__text'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing .</p>
                            <p className='arction__text'>Lorem ipsum is placeholder previewing layouts and visual mockups.</p>
                            <p className='arction__text'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                        </li>
                        <li><img src={Robo} alt="" /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Arction