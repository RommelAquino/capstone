import React from 'react';
import data from '../data';

function ProductScreen(props) {
    console.log(props.match.params.id)

    const product = data.products.find(x => x._id === props.match.params.id)
    console.log({ product })
    return (
        <div>

            <div><h1>{product.name}</h1></div>
            <div><h1>{product.category}</h1></div>
            <div>
                <img src={product.image} alt="Curry" />
            </div>
            <div><h1>{product.team}</h1></div>
            <div><h1>{product.price}</h1></div>
        </div>
    )
}
export default ProductScreen;