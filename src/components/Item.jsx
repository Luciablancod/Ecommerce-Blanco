import { Link } from "react-router-dom"
export const Item = ({ item }) => {


    return (
        <div key={item.id} className="col-md-2">
            <div className="card card-products">
                <img src={item.image} className="card-img-top" alt={item.title} />
                <div className="card-body">
                    <Link to={"/item/"+ item.id} className="link-style" >
                        <h5 className="card-title">{item.title}</h5>
                    </Link>
                    {item.category == "ofertas" ? (<span className="badge text-bg-primary">OFERTA DEL DÍA </span>) : ""} 
                    <p className="card-text card-price">$ {item.price}</p>
                    <p className="shipping"> {item.shipping == true ? "Envio gratis" : "" }</p>
                </div>
            </div>
        </div>
    )

}