import { useParams } from "react-router-dom";
import products from "../assets/products.json"
import { ItemDetail } from "./ItemDetail";
import { useEffect, useState } from "react";

export const ItemDetailContainer = () => {
    const[item, setItem ] = useState({});
    const {id} = useParams();

    useEffect(() => {

        const promese = new Promise(resolve => {
            
            setTimeout(() => {
                resolve(products.find(item => item.id == id))
            }, 2000)
        })
        promese.then(response => {
            setItem(response)
        })
    }, [id])


    return (
        <>
           <ItemDetail item={item} />
        </>

    )

}