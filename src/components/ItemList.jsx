import "../App.css";
import { Item } from "./Item";


export const ItemList = ({items, title}) => {

    return (
        <>
            
        <div className="container">
            <div className="row carrousel-products">
                <h1 className="mb-4 text-capitalize">{title}</h1>
                {items.map(item => (
                    <Item key={item.id} item={item} />
                ))}
            </div>
        </div>
        </>

    )
}