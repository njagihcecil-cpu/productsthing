import { useEffect, useState } from 'react'

import ProductList from "./components/ProductList"

function App() {
    const [products, setProducts]  = useState([])
    const [cart, setCart] = useState([]);

    useEffect(
      () => {fetch ("https://mockerjson.xyz/api/v1/products/")
        .then(res => res.json())
        // .then(data => setProducts(data))
        .then((data) => setProducts(data.data))
      },[]
    );

    fu
    const handleSelectChange = (e) => {
      const productId = e.target.value;
      const foundProduct = products.find(p => p.id.toString() === productId)
      setSelectedProduct(foundProduct);
    }
  return (
    <>
      <div>
          <select onChange={(e) => handleSelectChange(e)} defaultValue=""
          >

            {products.map((product) => (
              
              <option key={product.id} value={product.id}>
                {product.title}
              </option>
            ))}
          </select>
          <ProductList setCart={setCart} products={products}/>
      </div>
      <div>
        <h1>PRODUCTS</h1>
        <ol>
          {cart.map(item => (
            <li key={item}>
               {item}  
          </li>))}
        </ol>
      
      </div>
    </>
  )
}

export default App
