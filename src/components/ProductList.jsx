import ProductCard from "./ProductCard";
import "./ProductList.css"

export default function ProductList({products, setCart}){

    return(

        <div className="row">
            {
                products.map((product, index)=> (<ProductCard key={index} product={product} setCart={setCart}/>))
            }
        </div>
    )
}