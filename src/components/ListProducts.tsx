import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../model/Product";
import './ListProducts.css'
import { useNavigate } from 'react-router-dom';// this is a hook and not available in class component only available in functional component


function ListProducts() {

    // hooks should be invoked at the start of the finctiona  not later point
    useEffect(() => {
        // only called one time n
        fetchProducts();
    }, [])
    const [products, setProducts] = useState<Product[]>([]);
    const navigate = useNavigate();
    async function fetchProducts() {
        const url = "http://localhost:9000/products"
        // axios.get(url)
        //     .then((response) => {
        //         console.log("response", response);
        //     }, (err) => {
        //         console.log(err);
        //     })
        try {
            const response = await axios.get(url);
            setProducts(response.data)
            console.log("response", response);
        }
        catch (error) {

        }
    }
    async function remove(del: Product) {
        try {
            const url = "http://localhost:9000/products/" + del.id;
            await axios.delete(url);
            console.log("record deleted")
            fetchProducts();

        }
        catch (err) {

        }
    }
    function edit(edit: Product) {
        navigate("/product/" + edit.id);
    }
    return (
        <div style={{ display: "flex", flexFlow: "row wrap", justifyContent: "center" }}>

            {
                products.map((item, index) => {
                    return (
                        <div key={index} className="product">
                            <p>ID: {item.id}</p>
                            <p>Name: {item.name}</p>

                            <div>
                                <button onClick={() => { remove(item) }}>Remove</button>&nbsp;
                                <button onClick={() => edit(item)}>Edit</button>
                            </div>
                        </div>

                    )
                })
            }

        </div>
    )

}

export default ListProducts;