import { useEffect, useState } from "react";

export const ItemCount = ({stock}) =>{

    const [count, setCount] = useState(0);
    const [itemStock, setItemStock] = useState(stock);

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

    const onAdd = () => {
        if(count <= itemStock){
            setItemStock(itemStock - count);
            setCount(0);
        }

    }

    useEffect(() => {
        setItemStock(stock)
    }, [stock])

    return (
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
                    <button type="button" className="btn btn-primary"  onClick={onAdd}> Agregar al carrito</button>
                    
                </div>
            </div>
        </div>
    )


}