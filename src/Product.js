import React from 'react'
import "./Product.css";
function Product({ id, title, image, price, rating}) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {/* <p>⭐</p> */}

                    <p> {"⭐".repeat(rating)}</p>
                </div>
            </div>
            <img src={image} />
            <button>Add to Cart</button>
        </div>
    )
}

export default Product
