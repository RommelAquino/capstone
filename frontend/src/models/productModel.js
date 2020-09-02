const url = `http://localhost:3001/api/v1/product`; 
class ProductModel {

    static getAllProduct = () => {
        return fetch(url).then((response) => response.json());
    };

    
    static getProductById = (productId) => {
		return fetch(`${url}/${productId}`).then((response) => response.json());
	};
    static createProduct = (productId) => {
        return fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productId),
        })
            .then((response) => response.json());
    }

    static updateProduct = (product, id) => {
        return fetch(`${url}/product/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        })
            .then((response) => response.json());
    }

    static deleteProduct = (productId) => {
        return fetch(`${url}/product/${productId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => response.json());
    }
}

export default ProductModel;