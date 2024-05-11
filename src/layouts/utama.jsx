import React from 'react';
import MainLayout from "../components/mainLayout";
import Button from "../components/button";
import Home from '../components/home';
import Services from '../components/services';

const Tampilan = () => (
    <MainLayout>
        <Home />
        <Services />
    </MainLayout>
);

export default Tampilan;
