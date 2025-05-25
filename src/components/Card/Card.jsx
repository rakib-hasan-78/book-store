import PropTypes from 'prop-types';
import React from 'react';

const Card = ({book}) => {
    const {author, bookName, category, image, rating, tags } = book;
    return (
        <div className="card bg-base-100 w-80 shadow-sm border border-gray-200/60">
            <figure className='bg-hero h-56 m-5 mb-0 rounded-lg'>
                <img
                className='w-28 h-40'
                src={image}
                alt={bookName} />
            </figure>
            <div className="card-body">
                <div 
                className='w-full flex items-start justify-start space-x-5 pb-5'>
                    {
                        tags.map(tag=>(
                            <div key={tag} className="badge badge-soft badge-success">
                              <span className='text-project-green font-bold'>
                                {tag}
                              </span>  
                                
                            </div>
                        ))
                    }
                </div>
                <h2 className="card-title font-serif font-bold xxs:text-xl lg:text-2xl text-title">
                {bookName}
                </h2>
                <h3 className='font-bold xxs:text-xs lg:text-base text-title/75'>By: {author}</h3>
                <div className="w-full border-t border-dashed border-t-title/15 mt-1.5 mb-2"></div>
                <div className="card-actions justify-between">
                    <div className="badge ">{category}</div>
                    <div className='flex items-center justify-center space-x-1.5'>
                        <div className='font-bold text-base'>{rating}</div>
                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star" aria-label="1 star" />
                        </div>    

                    </div>
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