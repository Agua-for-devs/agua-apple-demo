import React from 'react';
import { Routes, Route } from 'react-router';
import Home from '../pages/home/home';

function RoutingApp() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
<Route path="/Home" element={<Home />} />

        </Routes>
    );

}

export default RoutingApp;