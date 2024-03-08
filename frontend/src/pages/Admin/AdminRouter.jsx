import React from "react";
import { Routes, Route } from 'react-router-dom';

import Error from '../../_utils/Error';

import { Dashboard, User, UserAdd, UserEdit, Post, PostAdd, PostEdit, LayoutAdmin } from '.';

const AdminRouter = () => {
    return (
        <Routes>
            <Route element={<LayoutAdmin />}>
                <Route path='/dashboard' element={<Dashboard />} />

                <Route path='/users' element={<User />} />
                <Route path='/users/add' element={<UserAdd />} />
                <Route path='/users/edit/:id' element={<UserEdit />} />

                <Route path='/posts' element={<Post />} />
                <Route path='/posts/add' element={<PostAdd />} />
                <Route path='/posts/edit/:id' element={<PostEdit />} />


                <Route path='*' element={<Error />} />
            </Route>
        </Routes>
    );
};

export default AdminRouter;
