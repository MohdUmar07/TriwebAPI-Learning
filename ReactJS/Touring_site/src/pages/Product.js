
import ProductList from "../components/products/ProductList";
import { useState, useEffect } from "react";

function Product() {

    let [products, setProducts] = useState([]);
    let [isDataFetching, setIsDataFetching] = useState(true);

    useEffect(() => {
        setIsDataFetching(true);
        fetch('http://localhost:3002/product',)
            .then(response => response.json())
            .then(responseData => {
                setIsDataFetching(false);
                setProducts(responseData.data)
            })
            .catch(err => console.log(err))

    }, [])

    if (isDataFetching) {
        return <div>
            Data is loading
        </div>
    }
    return <section> <div>
        with Data
        <ProductList products={products}></ProductList>

    </div></section>

}
export default Product;