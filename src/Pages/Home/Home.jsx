import React from 'react';
import CategoriesList from '../../Components/Categories-list/Categories-list';
import Header from '../../Components/Header/Header';
import ProductMain from '../../Components/Product-Card/Product-Main';
import Search from '../../Components/Search/Search';

const Home = () => {
    return (
        <div>
            <Header/>
            <Search/>
            <CategoriesList/>
            <ProductMain/>
        </div>
    );
}

export default Home;