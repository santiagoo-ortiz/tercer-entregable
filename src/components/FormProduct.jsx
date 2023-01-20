import { useForm } from "react-hook-form"
import { useEffect } from "react"



const FormProduct = ( {createProductData, productSelectedData, updateProduct} ) => {

    const {register, handleSubmit, reset} = useForm()


    const getFormData = (data) => {

        if ( productSelectedData != null ) {

            updateProduct(data)

        } else {

 

            createProductData(data)
        }


       
    }

    useEffect (() => {
        if (productSelectedData != null) {
            reset( productSelectedData )
        } else {
            reset(
                {
                    name: "",
                    category: "",
                    price: null,
                    isAvailable: null
                }
            )
        }
    }, [productSelectedData])

   


    return(

        <div className="global">

            <form onSubmit={ handleSubmit(getFormData) } >

                <div className="input-wrapper">

                    <label htmlFor="product-name"> Nombre </label>

                        <input 
                        type ="text"
                        id = "product-name"
                        { ...register ("name") }  />

                </div>


                 <div className="input-wrapper">

                    <label htmlFor="product-category"> Categoria </label>

                        <input 
                        type ="text"
                        id = "product-category"
                        { ...register ("category") }  />

                </div>


                 <div className="input-wrapper">

                    <label htmlFor="product-price"> Precio </label>

                        <input 
                        type ="text"
                        id = "product-price"
                        { ...register ("price") }  />

                </div>

                <div className="input-wrapper">

                    <label htmlFor="product-isAvailable"> Disponible </label>

                        <input 
                        type ="checkbox"
                        id = "product-isAvailable"
                        { ...register ("isAvailable") }  />

                </div>


                <button 
                className="boton"
                type="submit">
                    Enviar
                </button>

            </form>

        </div>
    )

    
}


export default FormProduct