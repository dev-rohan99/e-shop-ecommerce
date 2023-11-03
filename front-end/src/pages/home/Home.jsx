import React, { useEffect } from 'react';
import Header from '../../components/header/Header';
import { useDispatch, useSelector } from 'react-redux';


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
        
        </>
    )
}

export default Home;
