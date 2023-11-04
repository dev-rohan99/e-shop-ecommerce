import React, { useEffect } from 'react';
import Header from '../../components/header/Header';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../../components/footer/Footer';
import HeroSection from '../../components/hero-section/HeroSection';


const Home = () => {

    const dispatch = useDispatch();
    const { error, message, user } = useSelector((state) => state.auth);

    useEffect(() => {
        if(user){
            console.log(user);
        }
    }, [user]);

    return (
        <>
        
            <Header/>

            <HeroSection/>

            <Footer/>
        
        </>
    )
}

export default Home;
