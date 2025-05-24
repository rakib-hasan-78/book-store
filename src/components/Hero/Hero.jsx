import React from 'react';
import heroImg from '../../assets/hero.png';
const Hero = () => {
    return (
        <div className="hero bg-hero  min-h-[554px]">
            <div className="hero-content max-w-full flex-col lg:flex-row-reverse">
                <img
                src={heroImg}
                className="xxs:max-w-3xs lg:max-w-sm"
                />
                <div>
                <h1 className="xxs:text-3xl lg:text-5xl font-bold text-title xxs:leading-tight lg:leading-normal">Books to freshen up your bookshelf</h1>
                <button className="btn bg-project-green text-green-50 xxs:mt-5 lg:mt-12 capitalize font-serif font-bold">view the list</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;