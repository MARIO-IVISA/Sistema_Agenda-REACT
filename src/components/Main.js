import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AcessarConta from './pages/AcessarConta';
import CrieSuaConta from './pages/CrieSuaConta';

export default function Main() {

    return (
        <Routes>
            <Route
                path="/acessar-conta"
                element={<AcessarConta />}
            />
            <Route
                path="/crie-sua-conta"
                element={<CrieSuaConta />}
            />
        </Routes>
    )
}