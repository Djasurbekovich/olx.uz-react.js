import React, {useState, useEffect} from 'react';
import { instance } from '../../Api/instance';
import Container from '../../Utils/Container/Container';
import ProductCard from './Product-Card';
import './Product-Card.scss';

const ProductMain = () => {

    const [productData, setProductData] = useState([]);

    useEffect(() => {
        instance.get('/products?offset=0&limit=24')
            .then(res => setProductData(res.data))
    }, []);

    return (
        <section>
            <Container>
                <div className='product__main-wrapper'>
                    {
                        productData.map(item => {
                            return <ProductCard key={item.id} data={item}/>
                        })
                    }
                </div>
            </Container>
        </section>
    );
}

export default ProductMain;