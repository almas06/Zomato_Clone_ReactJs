import React from 'react';
import CallToAction from '../../components/CallToAction';
import Collections from '../../components/Collections';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Localities from '../../components/Localities';
import Navbar from '../../components/Navbar';
import Services from '../../components/Services';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <Services/>
            <Collections/>
            <Localities/>
            <CallToAction/>
            <Footer/>
        </div>
    );
}

export default Home;
