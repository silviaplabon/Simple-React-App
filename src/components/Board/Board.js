import React from 'react';
import playerData from '../../data/data.json'
import Player from '../Player/Player';
import Cart from '../Cart/Cart';
import { useEffect, useState } from 'react';
import './Board.css'

function App() {
    const [players, setPlayers] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        setPlayers(playerData);
    }, [])

    const handleAddPlayer = (player) => {
        const newCart=[...cart,player]; //using spreadOperator for obtaining cart element
        setCart(newCart);
    }

    return (
        <div className="players-container container mt-4">
            <div className="details-container">
                    {
                        players.map(player => <Player handleAddPlayer={handleAddPlayer} player={player} ></Player>)
                    }
            </div>
            <div className="carts-container ">
                {/* cart component  */}
                <Cart cart={cart}></Cart>
            </div>
        </div>
    )
}

export default App;
