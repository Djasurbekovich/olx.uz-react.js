import React, { useState, useEffect } from 'react';
import { instance } from '../../Api/instance';
import Container from '../../Utils/Container/Container';
import CategoriesItem from './Categories-item';

const CategoriesList = () => {

    const [categoryData, setCategoryData] = useState([])

    useEffect(() => {
        instance.get('/categories')
            .then(res => setCategoryData(res.data))
        }, []);

    return (
        <section>
            <Container>
                <div className='category__item-wrapper'>
                    {
                        categoryData.map(item => 
                            <CategoriesItem key={item.id} img={item.image} title={item.name} id={item.id} />
                        )
                    }
                </div>
            </Container>
        </section>
    );
}

export default CategoriesList;