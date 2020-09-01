import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';


function HomeScreen({ cards }) {
	let cardsList;
	if (cards) {
		cardsList = cards.map((product) => {
			return (
				<li>
					<div className='product'>
						<div className='product-image'>
							<Link to={'/product/' + product._id}>
								<img src={product.image} alt='Curry' />
							</Link>
						</div>
						<div className='product.name'>
							<Link to={'/product/' + product._id}>{product.name}</Link>
						</div>
						<div className='product-team'>{product.team}</div>
						<div className='product-price'>${product.price}</div>
					</div>
				</li>
			);
		});
	}
	return <ul className='products'>{cardsList}</ul>;
}

export default HomeScreen;




// ---------- PREVIOUS FUNCTION ----------- //
// 
// 
// function HomeScreen(props) {
//     const productList = props.cards.map((product) => {
//         return (
//             <ul className="products">
//                 {
//                     data.products.map(product =>
//                         <li>
//                             <div className="product">
//                                 <Link to={'/product/' + product._id}><img src={product.image} alt="Curry" /></Link>

//                                 <div className="product.name">
//                                     <Link to={'/product/' + product._id}>{product.name}</Link>
//                                 </div>
//                                 <div className="product-team">{product.team}</div>
//                                 <div className="product-price">${product.price}</div>
//                             </div>
//                         </li>)
//                 }
//             </ul>
//         );

//     });
//     return {productList}
// }