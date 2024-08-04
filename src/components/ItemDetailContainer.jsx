import { useParams } from "react-router-dom";
import products from "../assets/products.json"
import { ItemDetail } from "./ItemDetail";
import { useEffect, useState } from "react";
import {addDoc, collection, doc, getDoc, getDocs, getFirestore, limit, query, where} from "firebase/firestore";
import { Loading } from "./Loading";


export const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true);
    const[item, setItem ] = useState({});
    const {id} = useParams();

    // useEffect(() => {

    //     const promese = new Promise(resolve => {
            
    //         setTimeout(() => {
    //             resolve(products.find(item => item.id == id))
    //         }, 2000)
    //     })
    //     promese.then(response => {
    //         setItem(response)
    //     })
    // }, [id])

    useEffect(() => {
        const db = getFirestore();
        const docRef= doc(db, "items", id);
        getDoc(docRef).then(snapShot => {
            if (snapShot.exists()) {
                setItem({id:snapShot.id, ...snapShot.data()});
                setLoading(false);
            } else {
                console.error("Error! No existe el producto");
            }
        })
    },[id])


    return (
        <>
        {loading ? <Loading /> : <ItemDetail item={item} /> }
           
        </>

    )

}