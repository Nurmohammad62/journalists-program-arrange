import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Journalist from '../Journalist/Journalist';
import './Main.css';

const Main = () => {
    const [journalists, setJournalists] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./journalistsList.JSON')
        .then(res => res.json())
        .then(data => setJournalists(data))
    }, []);

    const handleAddToList = journalist => {
        const newCart = [...cart, journalist];
        setCart(newCart);
    }
    return (
        <main>
            <div className='journalists'>
                {
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

export default Main;