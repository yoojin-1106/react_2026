import { useState, useEffect } from "react";

function ProductList({products, onAdd}){
    //console.log(products);
    return(
        <>
            <div>
                <ul style={{listStyle:'none', margin:0, padding:0}}>
                    {products.map((product) => {
                        //console.log(product.id);
                        return(
                            <li className="product-row" key={product.id}>
                                <span className="name">{product.name}</span>
                                <span className="price">{product.price}원</span>
                                <button onClick={() => onAdd(product)}>장바구니</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default ProductList;