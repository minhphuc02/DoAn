import React, {useContext } from "react";
import { Link } from "react-router-dom";
import "./ProductItem.css"
import { GlobalState } from "../../../../GlobalState" 
import axios from "axios";

function ProductItem({ product,products, isAdmin, callback , setCallback, setProducts}) {
  const state = useContext(GlobalState);
  const addCart = state.userAPI.addCart
  const [token] = state.token;

  const deleteProduct =async  () => {

    
    try {
        const destroyImg = axios.post(`/api/destroy`, {public_id: product.images.public_id},{
            headers: {Authorization: token}
        })
        const deleteProduct = axios.delete(`/api/products/${product._id}`,{
            headers: {Authorization: token}
        })
        await destroyImg
        await deleteProduct
        setCallback(!callback)
    } catch (err) {
        alert(err.response.data.msg)
    }
}
  const handleCheck = (id) => {
    products.forEach(product =>{
      if(product._id===id) product.checked =!product.checked
    })
    setProducts([...products])
  }
  return (
    <div className="product_card">
      {
        isAdmin && <input type="checkbox" checked={product.checked} onChange={()=>handleCheck(product._id)}/>
      }
      <img src={product.images.url} alt=""/>

      <div className="product_box">
        <h2>{product.title}</h2>
        <h1>{product.price}</h1>
        <p>{product.description}</p>
      </div>
      <div className="row_btn">
        { isAdmin ? <>
        <Link id="btn_buy" to="#!" onClick={deleteProduct}>
          DELETE
        </Link>
        <Link id="btn_view" to={`/edit_product/${product._id}`}>
          EDIT
        </Link>
        </>:
        <>
        <Link  id="btn_buy" to="#!" onClick={()=>addCart(product)}>
          Add to Cart
        </Link>
        <Link id="btn_view" to={`/detail/${product._id}`}>
          Detail
        </Link>
        </>
        }
      </div>
    </div>
  );
}

export default ProductItem;
