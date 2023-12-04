import React from 'react'
import '../App.css';
import { Link } from "react-router-dom";

export function Homepage() {
    return (
        <div className='app-container'>
            <h1>Arkhanya Privacy</h1>
            <div className="app-list">
                <Link to="./gameraid/">Gamer Aid</Link>
            </div>
        </div>
    )
}
