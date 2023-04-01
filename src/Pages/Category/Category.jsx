import React, { useState ,useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { instance } from '../../Api/instance';
import Header from '../../Components/Header/Header';
import Search from '../../Components/Search/Search';
import Container from '../../Utils/Container/Container';
import './Category.scss';

const Category = () => {
    const { categoryId } = useParams()
    const [data, setData] = useState([]);

    useEffect(() => {
        instance.get(`/products/?categoryId=${categoryId}`)
            .then(res => setData(res.data))
    }, [categoryId]);

    return ( <>
        <Header/>
        <Search/>
        <main>
            <section className='products'>
                <Container>
                    {
                        data && data.map(product => {
                            return <article className='products__item' key={product.id}>
                            <Link to={`/singleproduct/${product.id}`}>
                                <img className='products__img' src={product.images.at(0)} alt="" />
                            </Link>
                            <div>
                                <h1 className='products__title'>{product.title}</h1>
                                <p className='products__text'>{product.description}</p>
                                <strong className='products__price'>${product.price}</strong>
                            </div>
                        </article>
                        })
                    }
                </Container>
            </section>
        </main>
    </> );
}

export default Category;