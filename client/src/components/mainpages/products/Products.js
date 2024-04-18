import React, { useContext , useEffect} from 'react'
import { GlobalState } from "../../../GlobalState"
import ProductItem from '../untils/Product_item/ProductItem'
import "./Product.css"
import axios from 'axios'

function Products(){
    const state = useContext(GlobalState)
    const [products, setProducts] = state.productsAPI.products
    const [isAdmin] = state.userAPI.isAdmin
    const addCart = state.userAPI.addCart
    const [callback, setCallback] = state.productsAPI.callback

    useEffect(()=>{
        const getProducts = async()=>{
            const res = await axios.get(`/api/products`)
            setProducts(res.data.products)
        }
        
        getProducts()
    },[])
    return (
        <>
        <div className="products">
        {
            products.map(product =>{
                return <ProductItem key={product._id} product={product} setProducts={setProducts}
                isAdmin={isAdmin} callback={callback} setCallback={setCallback}/>
            })
        }
        </div>
        </>
    )
}

export default Products