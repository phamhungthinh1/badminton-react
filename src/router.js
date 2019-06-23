import React from 'react';
import Home from './views/Home/Home';
import PageDetail from './views/PageDetail/PageDetail';
import ProductList from './views/ProductList/ProductList';
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
    }
];
export default routes;