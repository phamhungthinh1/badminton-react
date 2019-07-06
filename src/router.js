import React from 'react';
import Home from './views/Home/Home';
import PageDetail from './views/PageDetail/PageDetail';
import ProductList from './views/ProductList/ProductList';
import SearchProduct from './views/SearchPage/SearchProduct';

const routes = [
    {
        path : '/',
        exact : true,
        main: () => <Home />
    },
    {
        path : '/detail/:id',
        exact : false,
        main: ({match}) => <PageDetail match={match} />
    },
    {
        path : '/product',
        exact : false,
        main: () => <ProductList/>
    },
    {
        path : '/searchproduct',
        exact : false,
        main: () => <SearchProduct/>
    }
];
export default routes;