import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ItemCount = ({ stock, onAdd }) => {

    const [count, setCount] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        setItemStock(stock)
    }, [stock])

    const increase = () => {
        if (count < itemStock) {
            setCount(count + 1)
        } else {
            console.log("No hay mas stock");
        }

    }

    const decrease = () => {
        if (count > 1) {
            setCount(count - 1);
        } else {
            console.log("Agregue al menos un producto");
        }
    }


    const addToCart = () => {
        console.log(count)
        console.log(itemStock)
        if (count <= itemStock) {
            setItemStock(itemStock - count);
            setCount(0);
            setVisible(false);
            onAdd(count);
            console.log(itemStock)
        }
    }



    return (
        <>
            {visible ?
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="btn-group" role="group">
                                <button type="button" className="btn btn-light" onClick={decrease}>-</button>
                                <button type="button" className="btn btn-light"> {count}</button>
                                <button type="button" className="btn btn-light" onClick={increase}>+</button>
                            </div>
                        </div>
                    </div>
                    <div className="row my-1">
                        <div className="col">
                            <button type="button" className="btn btn-primary my-3" onClick={addToCart}> Agregar al carrito</button>

                        </div>
                    </div>
                </div> : <Link className="btn btn-primary" to="/cart"  >Terminar mi compra</Link>
            }
        </>
    )
}