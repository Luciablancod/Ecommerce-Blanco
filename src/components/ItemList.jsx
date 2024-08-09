import "../App.css";
import { Item } from "./Item";
import { Link } from "react-router-dom";


export const ItemList = ({ items, title, category }) => {

    return (
        <div className="container">
            <div className="row carrousel-products my-3">
                <h1 className="mb-4 text-capitalize">{title} {category ? <Link to={`/category/${category}`} className="btn btn-light-blue" role="button" >Ir <span className="text-lowercase"> a {category}</span>  </Link> : ""} </h1>
                {items.map(item => (
                    <Item key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}