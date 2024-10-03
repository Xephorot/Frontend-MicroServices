import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminView from './views/AdminView';
import MainView from './views/MainView';
import ProductForm from './views/ProductForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <div className="container-fluid">
                <Routes>
                    {/* Ruta para la vista del Administrador */}
                    <Route path="/admin" element={<AdminView />} />

                    {/* Ruta para crear un nuevo producto */}
                    <Route path="/admin/new" element={<ProductForm onSave={() => {}} />} />

                    {/* Ruta para editar un producto existente */}
                    <Route path="/admin/edit/:id" element={<ProductForm onSave={() => {}} />} />

                    {/* Ruta para la vista principal del usuario */}
                    <Route path="/" element={<MainView />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
