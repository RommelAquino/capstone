import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import ProductModel from '../models/productModel';



function ProductScreen(props) {
	const [product, setProduct] = useState({});
	useEffect(() => {
		const fetch = async () => {
			console.log(props.match.params.id);
			const response = await ProductModel.getProductById(props.match.params.id);
			setProduct(response);
			console.log(response);
		};
		fetch();
    }, []);

    console.log(props)
    
    const handleDelete = async () => {
        await ProductModel.deleteProduct(product._id)
          .then((product) => props.history.push('/'))
          .catch((err) => console.log(err));
        await props.getProducts();
      };


	return (
		<div>
			<div>
				<img src={product.image} alt='Curry' />
			</div>
			<div>
				<h1>{product.name}</h1>
			</div>
			<div>
				<h1>{product.team}</h1>
			</div>
			<div>
				<h1>${product.price}</h1>
			</div>
			<div>
				<button>Edit</button>
				<button onClick={handleDelete}>Delete</button>
			</div>
		</div>
	);
}
export default ProductScreen;
// export default withRouter(ProductScreen);




// import React, { component } from 'react';
// import data from '../data';



// function ProductScreen(props) {

//     const product = data.products.find(x => x._id === props.match.params.id)

//     console.log({ product })
//     return (
//         <div>
//             <div>
//                 <img src={product.image} alt="" />
//             </div>
//             <div><h1>{product.name}</h1></div>

//             <div><h1>{product.team}</h1></div>
//             <div><h1>{product.price}</h1></div>
//             <div>
//                 <button>Edit</button>
//                 <button onClick={() => this.deleteProduct(product.id)}>Delete</button>
//             </div>
//         </div>
//     )
// }
// export default ProductScreen;







