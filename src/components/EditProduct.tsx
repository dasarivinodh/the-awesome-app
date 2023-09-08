import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';// for reading url params 
import { Product } from '../model/Product';
import axios from 'axios';

function EditProduct() {

    const params = useParams();
    const prodId = params["id"];

    const [product, setProduct] = useState<Product>(new Product());
    useEffect(() => {
        // only called one time n
        fetchProduct();
    }, [])
    async function fetchProduct() {
        const url = "http://localhost:9000/products/" + prodId;
        try {
            const response = await axios.get(url);
            setProduct(response.data);
            console.log("response", product);
        }
        catch (error) {

        }
    }
    return (
        <div className='form'>
            <h4>Edit Product</h4>
            <div className="form-group" >
                <label>Name :</label>
                <input className="form-control" placeholder="Name" value='{product.name}' ></input>
            </div>
            <div className="form-group" >
                <label>Price :</label>
                <input type="number" className="form-control" value='{product.price}' placeholder="Price"></input>
            </div>
            <div className="form-group" >
                <button type="button" className="btn btn-outline-success">Save</button>
                <button type="button" className="btn btn-outline-primary">Cancel</button>
            </div>


        </div>

    )
}

export default EditProduct;