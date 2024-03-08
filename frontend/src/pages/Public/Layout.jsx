import React from "react";
import { Outlet } from 'react-router-dom'
import Header from "../../components/public/Header";
import Footer from "../../components/public/Footer";
import './Layout.css';

const Layout = () => {
    return (
        <div className="Layout">
            <div className="content">
                <Header />

                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
