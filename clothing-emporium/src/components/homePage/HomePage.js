import React from 'react';
import NavBar from '../navBar/NavBar';
import CarouselComponent from '../homePage/CarouselComponent';
import NewestItemCard from './NewestItemCard';
import styles from '../../styles/HomePage.css';

const HomePage = () => {

    return (

        <div>
            <NavBar />
            <h2>Featured Products:</h2>
            <CarouselComponent />
            <h2>Newest Products:</h2>
            <NewestItemCard />
        </div>

    )
}

export default HomePage;