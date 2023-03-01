import React from 'react'
import NavBar from '../../components/NavBar/NavBar';
import Banner from '../../components/Banner/Banner';
import SideBar from '../../components/SideBar/SideBar';
import Dashboard from '../../components/Dashboard/Dashboard';
import './HomePage.scss'
const HomePage = () => {
    return (
        <div className='home-page'>
            <Banner />
            <NavBar />
            <div className='main-page'>
                <SideBar />
                <Dashboard />
            </div>
        </div>
    )
};
export default HomePage;

