import React from 'react';
import MainLayout from "../components/mainLayout";
import Home from '../components/home';
import SearchCar from '../components/searchCar';
import Footer from '../components/Footer';

const Search = () => (
    <MainLayout>
        <Home />
        <SearchCar />
        <Footer />
    </MainLayout>
);

export default Search;
