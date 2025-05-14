import React,{useState,useEffect} from "react";
import ProductCard from "./ProductCart";
import './style.css'
function App(){
    const [product,update] = useState([]);


    useEffect(()=>{
        getProduct();
    },[]);

    async function getProduct(){
        let result = await fetch('https://fakestoreapi.com/products');
        let productList = await result.json();
        update(productList);

    }
    console.log(product);


    if(product==0){
        return (<h1>Fetcheing.....</h1>)
    }
    return (
        <>
            
            <div className="product-list">
            {
            product.map((p)=>{
                return <ProductCard {...p}></ProductCard>

            })}

            </div>
        
        </>
    )
}
export default App;
