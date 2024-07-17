import { useEffect, useState } from "react";
import { ItemList } from "./ItemList"
import products from "../assets/products.json"
import { useParams } from "react-router-dom";
import Hero from "./Hero";


const ItemListContainer = ({ title }) => {

    const [items, setItems] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        setItems([]);
        const promese = new Promise(resolve => {
            setTimeout(() => {
                resolve(id ? products.filter(item => item.category == id) : products)
            }, 2000)
        })

        promese.then(response => {
            setItems(response)
        })
    }, [id])


    return (
        <>
            {id ? "" : <Hero /> }
            <ItemList items={items} title={ title ? title : "Comprá por categoría - " + id}  />
            
        </>

    )
}

export default ItemListContainer