import { Link } from "react-router-dom"
export const Item = ({ item }) => {
    const formattedPrice = item.price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });


    return (
        <div key={item.id} className="col-md-2">
            <div className="card card-products">
                <img src={item.image} className="card-img-top object-fit-contain" alt={item.title} />
                <div className="card-body">
                    <Link to={"/item/" + item.id} className="link-style" >
                        <h5 className="card-title">{item.title}</h5>
                    </Link>
                    {item.category == "ofertas" ? (<span className="badge text-bg-primary">OFERTA DEL DÍA </span>) : ""}
                    <p className="card-text card-price">{formattedPrice}</p>
                    <p className="shipping"> {item.shipping == true ? "Envio gratis" : ""}</p>
                </div>
            </div>
        </div>
    )

}