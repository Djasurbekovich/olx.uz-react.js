import React from 'react';
import { Link } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';
import './Product-Card.scss';

const ProductCard = ({data}) => {
    return (
        <div className='product__card'>
            <Link to={`/singleproduct/${data.id}`} className='product__link'>
                <img className='product__img' src={data.images[0]} alt="Image" />
                <h3 className='product__title'>
                   {data.title}
                </h3>
            </Link>
            <p className='product__desc'>
                {data.description}
            </p>
            <div className='product__price-wrapper'>
                <strong className='product__price'>
                    $ {data.price}
                </strong>
                <FiHeart />
            </div>
        </div>
    );
}

export default ProductCard;