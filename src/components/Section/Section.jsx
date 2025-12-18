import React from 'react'
import "../Section/Section.css"
import Rasm1 from "./images/rasm1.svg"
import Rasm2 from "./images/rasm2.svg"
import Rasm3 from "./images/rasm3.svg"
import Rasm4 from "./images/rasm4.svg"
import Rasm5 from "./images/rasm5.svg"

const Section = () => {
  return (
    <div className='section'>
        <div className='container'>
            <div className='section__container'>
              <ul className='section__list'>
                <li className='section__item'>
                  <img className='section__img' src={Rasm1} alt="" />
                  <h1 className='section__title'>Naxly as the Winners in Global Agency Awards</h1>
                  <p className='section__text'>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
                </li>
                <li className='section__item'>
                    <img className='section__img' src={Rasm2} alt="" />
                    <h1 className='section__title'>Expert Prespective Agency Awards</h1>
                    <p className='section__text'>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
                </li>
                                <li className='section__item'>
                    <img className='section__img' src={Rasm3} alt="" />
                    <h1 className='section__title'>Business Prespective Global Agency Awards</h1>
                    <p className='section__text'>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
                </li>
                                <li className='section__item'>
                    <img className='section__img' src={Rasm4} alt="" />
                    <h1 className='section__title'>Value for Results in Global Agency Awards</h1>
                    <p className='section__text'>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
                </li>
                                <li className='section__item'>
                    <img className='section__img' src={Rasm5} alt="" />
                    <h1 className='section__title'>Global Experience in Agency Awards</h1>
                    <p className='section__text'>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
                </li>
              </ul>
            </div>
        </div>
    </div>
  )
}

export default Section
