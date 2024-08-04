import { useContext } from "react"
import { ItemCount } from "./ItemCount"
import { CartContext } from "./context/CartContext"

export const ItemDetail = ({ item }) => {

    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }

    return (
        <>
            <div className="container my-3">
                <div className="alert alert-light " role="alert">
                    <div className="row mt-3 item-detail">
                        <div className="col-md-1">
                                {Array.isArray(item.thumbnails) ? (
                                    item.thumbnails.map((img, index) => (
                                        <div key={index} className="card my-3" >
                                            <img src={img} className="card-img-top" alt="..." />
                                        </div>
                                    ))
                                ) : (
                                    <p>Cargando imagenes...</p>
                                )}
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex justify-content-center">
                            <img src={item.image} alt={item.title} className="img-fluid" />
                            </div>
                            
                        </div>
                        <div className="col-md-5">
                            <h1>{item.title}</h1>
                            
                            {item.category == "ofertas" ? (<button type="button " className="btn btn-primary btn-sm">OFERTA DEL DÍA </button>) : ""} 

                            <p className="item-detail-price"><b>${item.price}</b></p>
                            <p className="shipping"> {item.shipping == true ? "Envio gratis" : "" }</p>
                            <div className="alert alert-light" role="alert">Hasta 6 cuotas sin interés con todos los bancos</div>


                            <ul>
                                {Array.isArray(item.description) ? (
                                    item.description.map((des, index) => (
                                        <li key={index}>{des}</li>
                                    ))
                                ) : (
                                    <li>No description available</li>
                                )}
                            </ul>
                            
                            <ItemCount stock={item.stock} onAdd={onAdd} />
                        </div>
                    </div>
                </div>
            </div>

        </>


    )
}