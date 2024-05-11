import React from 'react';
import MainLayout from "../components/mainLayout";
import Home from '../components/home';
import Services from '../components/services';
import WhyUs from '../components/whyus';
import Testimonial from '../components/testimonial';
import Kontainer from '../components/container';
import Faq from '../components/faq';
import Footer from '../components/Footer';
import SearchCar from '../components/searchCar';

const Tampilan = () => (
    <MainLayout>
        <Home />
        <Services />
        <WhyUs />
        <Testimonial />
        <Kontainer />
        <Faq />
        <Footer />
        <SearchCar />
    </MainLayout>
);

export default Tampilan;
