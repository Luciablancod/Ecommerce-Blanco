import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ItemCount = ({stock, onAdd}) =>{

    const [count, setCount] = useState(0);
    const [itemStock, setItemStock] = useState(stock);
    const [visible, setVisible] = useState(true);

    const increase = () => {
        if(count <  itemStock){
            setCount(count + 1)
        }else{
            console.log("No hay mas stock");
        }
           
    }

    const decrease = () => {
        if(count > 0){
            setCount(count - 1);
        }else{
            console.log("Agregue al menos un producto");
        }
    }

    // const onAdd = () => {
    //     if(count <= itemStock){
    //         setItemStock(itemStock - count);
    //         setCount(0);
    //         setVisible(false);
    //     }
    // }

    const addToCart = () => {
        if(count <= itemStock){
            setItemStock(itemStock - count);
            setCount(0);
            setVisible(false);
            onAdd(count);
        }
    }

    useEffect(() => {
        setItemStock(stock)
    }, [stock])

    return (
        <>
            { visible ? 
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
                    <button type="button" className="btn btn-primary"  onClick={addToCart}> Agregar al carrito</button>
                    
                </div>
            </div>
        </div> : <Link className="btn btn-primary" to="/cart"  >Terminar mi compra</Link>
        }
       
        </>
    )


}