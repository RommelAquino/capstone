import React from 'react';
import App from '../App';
import data from '../data';

function ProductScreen(props) {
    

    const product = data.products.find(x => x._id === props.match.params.id)
    
    console.log({ product })
    return (
        <div>
            <div>
                <img src={product.image} alt="Curry" />
            </div>
            <div><h1>{product.name}</h1></div>
            {/* <div><h1>{product.category}</h1></div> */}
            <div><h1>{product.team}</h1></div>
            <div><h1>${product.price}</h1></div>
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}
export default ProductScreen;