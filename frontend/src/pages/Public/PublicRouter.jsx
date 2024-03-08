import React from "react";
import { Routes, Route } from 'react-router-dom';

import Error from '../../_utils/Error';

import { Layout, Home, Test } from '.';

const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={<Home />} />
                <Route path='/test' element={<Test />} />
                <Route path='*' element={<Error />} />
            </Route>
        </Routes>
    );
};

export default PublicRouter;
