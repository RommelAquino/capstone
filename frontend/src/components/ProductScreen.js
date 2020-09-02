import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import ProductModel from '../models/productModel';
import Modal from 'react-modal';

function ProductScreen(props) {
    const [product, setProduct] = useState({}); //product gets updated by setProduct
    const [modalIsOpen, setModalIsOpen] = useState(false); //modalIsOpen gets updated by setModalIsOpen
    const [imageText, setImageText] = useState(""); //text gets updated by setText
    const [nameText, setName] = useState(""); //text gets updated by setText
    const [teamText, setTeamText] = useState(""); //product gets updated by setProduct
    const [priceText, setPriceText] = useState(""); //product gets updated by setProduct
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
    const submitProduct = (event) => {
        event.preventDefault();
        const data = {
            name: nameText,
            team: teamText,
            price: parseFloat(priceText),
        };
        ProductModel.updateProduct(data, product._id)
            .then((response) => {
                setProduct(response)
                setModalIsOpen(false);
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
                        onRequestClose={() => setModalIsOpen(false)}

                        style={{
                            overlay: {
                                position: 'fixed',
                                display: 'flex',
                                justifyContent: 'center',
                                paddingTop: '100px',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: 'rgba(255, 255, 255, 0.75)'
                            },
                            content: {
                                position: 'relative',
                                border: '1px solid #ccc',
                                background: '#fff',
                                overflow: 'auto',
                                WebkitOverflowScrolling: 'touch',
                                borderRadius: '4px',
                                outline: 'none',
                                padding: '20px',
                                height: '300px',
                                width: '500px'
                            }
                        }}
                    >
                        <form onSubmit={submitProduct}>
                            <label>Player:</label>
                            <input onChange={(e) => setName(e.target.value)} type="text" value={nameText} name="name" />
                            <label>Team:</label>
                            <input onChange={(e) => setTeamText(e.target.value)} type="text" value={teamText} name="team" />
                            <label>Price:</label>
                            <input onChange={(e) => setPriceText(e.target.value)} type="text" value={priceText} name="price" />
                            <button type="submit">Update</button>
                        </form>

                        <div className='modalCloseBtn'>
                            <button onClick={() => setModalIsOpen(false)}>X</button>
                        </div>


                    </Modal>
                </div>
                <button onClick={() => setModalIsOpen(true)}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
}
export default ProductScreen;