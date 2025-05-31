import React from 'react';

const PageHero = ({children, className}) => {
    return (
        <div className={`w-full h-28 bg-hero rounded-2xl ${className}`}>
            {children}
        </div>
    );
};

export default PageHero;