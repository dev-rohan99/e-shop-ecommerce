import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Outlet  } from "react-router-dom";


const PageLayout = () => {



    return (
        <>
        
            <div className="page-wrapper">
                <Header/>

                <Outlet/>

                <Footer/>
            </div>

        </>
    )
}

export default PageLayout;
