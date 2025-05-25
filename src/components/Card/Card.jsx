import PropTypes from 'prop-types';
import React from 'react';

const Card = ({book}) => {
    const {author, bookName, category, image, rating, tags } = book;
    return (
        <div className="card bg-base-100 w-80 shadow-sm border border-gray-200/60 p-5">
            <figure className='bg-hero h-56'>
                <img
                className='w-28 h-40'
                src={image}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                Card Title
                <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
                </div>
            </div>
       </div>
    );
};
Card.propTypes ={
    book:PropTypes.shape({
        author: PropTypes.string.isRequired,
        bookName: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string)
    }).isRequired,
    
}

export default Card;