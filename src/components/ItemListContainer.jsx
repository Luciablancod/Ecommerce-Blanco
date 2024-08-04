import { useEffect, useState } from "react";
import { ItemList } from "./ItemList"
import products from "../assets/products.json"
import { useParams } from "react-router-dom";
import Hero from "./Hero";
import { collection, getDocs, getFirestore, query, where} from "firebase/firestore";
import { Loading } from "./Loading";

const ItemListContainer = ({ title }) => {

    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    const { id } = useParams();

    // useEffect(() => {
    //     setItems([]);
    //     const promese = new Promise(resolve => {
    //         setTimeout(() => {
    //             resolve(id ? products.filter(item => item.category == id) : products)
    //         }, 2000)
    //     })

    //     promese.then(response => {
    //         setItems(response)
    //     })
    // }, [id])

    // useEffect(() => {
    //     const db = getFirestore();
    //     const itemsCollection = collection(db , "items");

    //     products.forEach(item => {
    //         addDoc(itemsCollection, item)
    //     })

    // }, [])

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const q = id ? query(itemsCollection, where("category", "==", id)) : itemsCollection;
        getDocs(q).then(snapShot => {
            if (snapShot.size > 0) {
                setItems(snapShot.docs.map(documento => ({id:documento.id, ...documento.data()})));
                setLoading(false);
            } else {
                console.error("Error! No existe la Colección 'items'!");
            }
        })
    }, [id])

    return (
        <>  
            {id ? "" : <Hero /> }

            {loading ? <Loading /> : <ItemList items={items} title={ title ? title : "Comprá por categoría - " + id}  /> }
            
        </>
    )
}

export default ItemListContainer