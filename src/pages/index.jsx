import React from 'react'
import '../App.css';
import { Link } from "react-router-dom";

export function Homepage() {
    const LinkApp = ({ link, name }) => {
        return (
            <li>
                <Link className='link' to={link}>{name}</Link>
            </li>
        )
    }
    return (
        <div className='app-container'>
            <h1>Arkhanya Privacy</h1>
            <div className="app-list">
                <LinkApp link="./gameraid/" name="Gamer Aid App" />
                <LinkApp link="./gameraid/" name="Gamer Aid App" />
                <LinkApp link="./gameraid/" name="Gamer Aid App" />
                <LinkApp link="./gameraid/" name="Gamer Aid App" />
                <LinkApp link="./gameraid/" name="Gamer Aid App" />
                <LinkApp link="./gameraid/" name="Gamer Aid App" />
                <LinkApp link="./gameraid/" name="Gamer Aid App" />
            </div>
        </div>
    )
}