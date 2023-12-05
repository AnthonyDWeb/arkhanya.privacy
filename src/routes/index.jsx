import React from 'react'
import { Homepage } from '../pages'
import Gameraid from '../pages/gameraid';

export function Navigation({ path }) {
    const baseUrl = path === "/arkhanya.privacy" || path === "/arkhanya.privacy/";
    const isGameraid = path === `/arkhanya.privacy/gameraid` || path === `/arkhanya.privacy/gameraid/`;


    return baseUrl ? <Homepage /> : isGameraid ? <Gameraid /> : null;
}
