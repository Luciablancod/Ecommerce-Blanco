import "../App.css";
import { Item } from "./Item";

export const ItemList = ({items, title}) => {

    return (
        <div className="container">
            <div className="row carrousel-products">
                <h2 className="mb-4 text-capitalize">{title}</h2>
                {items.map(item => (
                    <Item key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}