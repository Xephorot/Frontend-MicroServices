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
                    <Route path="/admin" element={<AdminView />} />

                    <Route path="/admin/new" element={<ProductForm onSave={() => {}} />} />

                    <Route path="/admin/edit/:id" element={<ProductForm onSave={() => {}} />} />

                    <Route path="/" element={<MainView />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
