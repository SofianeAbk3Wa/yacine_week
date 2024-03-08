import React from "react";
import { Outlet } from 'react-router-dom';
import Header from "../../components/public/Header";
import Footer from "../../components/public/Footer";


const LayoutAdmin = () => {
    return (
        <div className="LayoutAdmin">
            <div className="content">
                <Header />

                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default LayoutAdmin;