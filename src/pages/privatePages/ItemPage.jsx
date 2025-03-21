import React from 'react';
import { Routes, Route, Outlet, useParams } from 'react-router-dom';

function ItemPage(){

    return(
        <>
        <Outlet></Outlet>
        </>
    );

}

export default ItemPage;