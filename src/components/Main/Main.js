import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Journalist from '../Journalist/Journalist';
import './Main.css';

/* main component start */
const Main = () => {
    // state for display journalist information
    const [journalists, setJournalists] = useState([]);

    // state for display selected journalist on cart component
    const [cart, setCart] = useState([]);

    // effect for load data
    useEffect(() => {
        fetch('./journalistsList.JSON')
        .then(res => res.json())
        .then(data => setJournalists(data))
    }, []);

    // handler for add journalist to cart component
    const handleAddToList = journalist => {
        const newCart = [...cart, journalist];
        setCart(newCart);
    }
    return (
        <main>
            <div className='journalists'>
                {
                    /* maping data to send as single data */
                    journalists.map(journalist => <Journalist 
                        key={journalist.id}
                        journalist={journalist}
                        handleAddToList = {handleAddToList}
                        ></Journalist>)
                }
            </div>
            <div className='cart'>
                <Cart cart={cart}></Cart>
            </div>
        </main>
    );
};
/* main component end */

export default Main;