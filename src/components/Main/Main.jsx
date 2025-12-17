    import React from 'react';
    import Tel from './images/tel.svg';
    import './Main.css';

    const Main = () => {
        return (
            <main className="main">
                <div className="container">
                    <img src={Tel} alt="tel" />
                    <span>
                        <h1 className='main__title'>Apply AI, Deep Learning and Data Sciece to solve</h1>
                        <p className='main__text'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                        <button className='main__btn'><a className='main__link' href="#">Learn More</a></button>
                    </span>

                </div>
            </main>
        );
    };

    export default Main;
