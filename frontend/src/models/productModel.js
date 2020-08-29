const url = `http://localhost:5000`; // ??? you might need the (/)
//  url goes from this file to localhost:5000 to backend/server.js routes
class ProductModel {
    static getAllProduct = () => {
        return fetch(url).then((response) => response.json());
    };
    static getProductById = (productId) => {
        return fetch(`${url}/product/${productId}`)
            .then((response) => response.json());
    };
    static deleteProduct = (productId) => {
        return fetch(`${url}/product/${productId}`)
        .then((response) => response.json());
    }
}

export default ProductModel;