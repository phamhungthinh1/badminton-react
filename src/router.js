import React from 'react';
import Home from './views/Home/Home';
import PageDetail from './views/PageDetail/PageDetail';
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
    }
];
export default routes;