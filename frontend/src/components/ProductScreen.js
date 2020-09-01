import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import ProductModel from '../models/productModel';
import Modal from 'react-modal';



function ProductScreen(props) {
    const [product, setProduct] = useState({}); //product gets updated by setProduct
    const [modalIsOpen, setModalIsOpen] = useState(false); //modalIsOpen gets updated by setModalIsOpen
    const [text, setText] = useState(""); //test gets updated by setText
    const [teamText, setTeamText] = useState(""); //product gets updated by setProduct
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

    // const handleInputChange = (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })
    // }


    const submitProduct = (event) => {
        event.preventDefault();
        // const {state}=this
        // const {image, name, team, price}=state
        const data = {
            name: text
            // team: team,
            // image: image,
            // price: parseFloat(price),
        };
        ProductModel.updateProduct(data, product._id)
            .then((response) => {
                setProduct(response)
                setModalIsOpen(false);
                // this.setState({
                //   modalIsOpen: false
                // })
                // this.props.history.push()
                // this.setState({ cards: [...this.state.cards, response] });
            });
    }




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
                <div>

                    <Modal
                        isOpen={modalIsOpen}
                        shouldCloseOnOverlayClick={true}
                        onRequestClose={() => setModalIsOpen(false)}>
                        <form onSubmit={submitProduct}>
                            <label>Player:</label>
                            <input onChange={(e) => setText(e.target.value)} type="text" value={text} name="name" />
                            <button type="submit">Update</button>
                        </form>


                    </Modal>
                </div>
                <button onClick={() => setModalIsOpen(true)}>Edit</button>
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







