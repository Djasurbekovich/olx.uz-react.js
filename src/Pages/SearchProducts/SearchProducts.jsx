import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { instance } from '../../Api/instance';
import Header from '../../Components/Header/Header';
import './SearchProducts.scss';

const SearchProducts = () => {
    const { searchtitle } = useParams()
    const [resultSearch, setResultSearch] = useState([])

    useEffect(() => {
        instance.get(`products/?title=${searchtitle}`)
            .then(res => setResultSearch(res.data))
    }, []);

    return (
        <div>
            <Header />
            <div className="products">
                {
                    resultSearch.map(product =>
                        <article className='products__item' key={product.id}>
                            <Link to={`/singleproduct/${product.id}`}>
                                <img className='products__img' src={product.images.at(0)} alt="" />
                            </Link>
                            <div>
                                <h1 className='products__title'>{product.title}</h1>
                                <p className='products__text'>{product.description}</p>
                                <strong className='products__price'>${product.price}</strong>
                            </div>
                        </article>
                    )
                }
            </div>
        </div>
    );
}

export default SearchProducts;