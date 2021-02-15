import React, { useContext} from 'react';
import CartContext from '../cart/CartContext';
import NavBar from '../navBar/NavBar';
import CarouselComponent from '../homePage/CarouselComponent';
import NewestItemCard from './NewestItemCard';
import styles from '../../styles/HomePage.module.css';

const HomePage = () => {

    const cartContext = useContext(CartContext);

    console.log(cartContext);

    return (

        <div>
            <NavBar />
            <h2 className={styles.align}>Featured Products:</h2>
            <CarouselComponent />
            <h2 className={styles.align}>Newest Products:</h2>
            <NewestItemCard />
        </div>

    )
}

export default HomePage;