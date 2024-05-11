import React from 'react';
import MainLayout from "../components/mainLayout";
import Button from "../components/button";
import Home from '../components/home';
import Services from '../components/services';
import WhyUs from '../components/whyus';
import Testimonial from '../components/testimonial';
import Kontainer from '../components/container';
import Faq from '../components/faq';
import Footer from '../components/Footer';

const Tampilan = () => (
    <MainLayout>
        <Home />
        <Services />
        <WhyUs />
        <Testimonial />
        <Kontainer />
        <Faq />
        <Footer />
    </MainLayout>
);

export default Tampilan;
