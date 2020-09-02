const url = `http://localhost:3001/api/v1/product`;

class PostModel {

    static createProduct = (product) => {
        return fetch(`${url}/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        })
            .then((response) => response.json());

    }



}

export default PostModel;