import { useEffect, useState } from "react";
import { ItemList } from "./ItemList"
import { useParams } from "react-router-dom";
import Hero from "./Hero";
import { collection, getDocs, getFirestore, query, addDoc, where } from "firebase/firestore";
import { Loading } from "./Loading";
import { BannerMercadoPlay } from "./BannerMercadoPlay";
import { BannerMercadoPuntos } from "./BannerMercadoPuntos";


const ItemListContainer = () => {

    const [loading, setLoading] = useState(true);
    const [items, setItemsCategories] = useState({});
    const [itemsCategory, setItemsCategory] = useState([]);
    const [itemsOnSale, setItemsOnSale] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        const fecthData = async () => {
            const db = getFirestore();
            const itemsCollection = collection(db, "items");
            const q = id ? query(itemsCollection, where("category", "==", id)) : itemsCollection;
            getDocs(q).then(snapShot => {
                if (snapShot.size > 0) {

                    if (id) {
                        setItemsCategory(snapShot.docs.map(documento => ({ id: documento.id, ...documento.data() })));
                    } else {
                        const items = snapShot.docs.map(documento => ({ id: documento.id, ...documento.data() }));
                        setItemsCategories(items.reduce((acc, item) => {
                            acc[item.category] = acc[item.category] ? [...acc[item.category], item] : [item];
                            return acc;
                        }, {}))

                    }
                    setLoading(false);

                } else {
                    console.error("Error! No existe la Colección 'items'!");
                }
            })

        };
        fecthData();
    }, [id])

    useEffect(() => {
        if (items["ofertas"]) {
            setItemsOnSale(items["ofertas"]);

            const { "ofertas": _, ...itemsWithoutSales } = items;
            setItemsCategories(itemsWithoutSales);
        }

    }, [items]);

    return (
        <>

            {id ? "" : <Hero />}

            {loading ? <Loading /> : (<>

                {id ? "" : <ItemList items={itemsOnSale} title={"Ofertas imperdibles"} category={"ofertas"} />}

                {id ? "" : <BannerMercadoPlay />}

                {id ? (<ItemList items={itemsCategory} title={"Comprá por categoría - " + id} />)
                    :
                    (
                        Object.keys(items).map(category => (
                            <ItemList key={category} items={items[category]} title={`Más vendidos en  ${category}`} category={category} />
                        ))
                    )}

                {id ? "" : <BannerMercadoPuntos />}
            </>)}
        </>
    )
}

export default ItemListContainer