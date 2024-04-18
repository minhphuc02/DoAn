import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from './products/Products';
import Login from './auth/Login';
import Register from './auth/Register';
import Cart from './cart/Cart';
import NotFound from './untils/not_found/NotFound';
import DetailProduct from './products/detailProduct/DetailProduct';
import Categories from './categories/Categories';
import CreateProduct from './createProduct/CreateProduct';
import {GlobalState} from "../../GlobalState"


function Pages() {
    return (
        <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/category" element={<Categories />} />
            <Route path="/create_product" element={<CreateProduct />} />
            <Route path="/edit_product/:id" element={<CreateProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="detail/:id" element={<DetailProduct/>}/>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default Pages;
