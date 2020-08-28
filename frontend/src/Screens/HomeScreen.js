import React from 'react';
import {Link} from 'react-router-dom';
import data from '../data';

function HomeScreen(props) {
    return (
        <ul className="products">
            {
                data.products.map(product =>
                    <li>
                        <Link to ={'/product/' + product._id}><img src={product.image} alt="Curry" /></Link>
                        
                        <div className={product.name}>
                            <Link to ={'/product/' + product._id}>{product.name}</Link>
                        </div>
                        <div className="product-team">{product.team}</div>
                        <div className="product-price">${product.price}</div>
                    </li>)
            }
        </ul>
    )
}
export default HomeScreen;