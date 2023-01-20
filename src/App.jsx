
import './App.css'
import FormProduct from './components/FormProduct'
import productData from './data/ProductData'
import { useState, useEffect } from "react"
import ProductsList from './components/ProductsList'
import axios from 'axios'





function App() {

  const [products, setProducts] = useState( [] )

  const [productDataselected, setProductDataselected ] = useState(null)


  useEffect( () => {
    axios.get("https://products-crud.academlo.tech/products/")
    .then( respuesta => { setProducts(respuesta.data) })
    .catch ( error => {console.error(error)} )
  },[]  )


  const getApiProduct =  () => {
    axios.get("https://products-crud.academlo.tech/products/")
    .then( respuesta => { setProducts(respuesta.data) })
    .catch( error => {console.error(error)} )
  }


  
  const addProduct = (data) => {

   axios.post( "https://products-crud.academlo.tech/products/", data )
   .then ( getApiProduct() )
   .catch ( error => {console.error(error)} )


  }

  const deleteProduct = (productId) => {

    axios
    .delete(`https://products-crud.academlo.tech/products/${productId}/`)
    .then( () =>  getApiProduct() )
    .catch ( error => {console.error(error)} )
  }

  const selectProduct = (productData) => { 

    setProductDataselected( productData )

   }

  const updateProduct = (newProductData) => {

    axios
    .put(`https://products-crud.academlo.tech/products/${newProductData.id}/`, newProductData)
    .then( () => getApiProduct() )
    .catch ( error => {console.error(error)} )
    
    setProductDataselected(null)
  }

  

  return (
    <div className="App">
      
      <FormProduct
      createProductData = { (data) =>  addProduct(data) }
      productSelectedData = {productDataselected}
      updateProduct = {updateProduct}
      />

      <ProductsList
      products={products}
      deleteProduct={ deleteProduct }
      selectProduct = {selectProduct}
      />

    </div>
  )
}

export default App
