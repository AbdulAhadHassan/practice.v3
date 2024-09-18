import { useEffect, useState } from "react"
import axios from "axios"
import ProductCard from "../comp/card"






function Products() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios
            .get('https://fakestoreapi.com/products')
            .then((res) => {
               
                setProducts(res.data)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
    }, [])
    return (
        <>
            <div className="container mx-auto my-5">{
                loading ? (
                    <h1 className="text-center text-3xl">Loading...</h1>
                ) : (
                    <div className="flex flex-wrap -m-4 ">


                        {products.map((item) => <ProductCard item={item} key={item.id} />)}
                    </div>
                )

            }


            </div>
        </>
    )
}

export default Products