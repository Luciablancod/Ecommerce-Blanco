import { useContext, useState } from "react"
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import { Cart } from "./Cart";
import { addDoc, collection, getFirestore } from "firebase/firestore";

export const Checkout = () => {
    const { cart, clear, sumProducts, totalProducts } = useContext(CartContext);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [orderId, setOrderId] = useState();

    const generarOrden = () => {
        if (name == "" || email == "" || phone == "") {
            return false;
        }

        const day = new Date();

        const order = {
            buyer: { name: name, phone: phone, email: email },
            items: cart.map(item => ({ id: item.id, title: item.title, price: item.price })),
            total: sumProducts(),
            date: `${day.getDate()}-${day.getMonth() + 1}-${day.getFullYear()} ${day.getHours()}:${day.getMinutes()}:${day.getSeconds()}`
        }

        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, order).then(response => {
            setOrderId(response.id);
            clear();
        });
    }




    if (totalProducts() == 0 && orderId) {
        return (
            <div className="container my-5 ">
                <div className="row cart">
                    <div className="col text-center disabled ">
                        <p className="icon-bg"><span className="material-symbols-outlined icon-bg" >local_mall</span></p>
                        <h1 className="fw-light">¡Gracias por tu compra!</h1>
                        <p>Tu número de compra es: <b>{orderId}</b></p>
                        <Link to={"/"} className="btn btn-primary mt-5">Descubrir productos</Link>
                    </div>
                </div>
            </div>
        )
    }


    if (totalProducts() == 0) {
        return (
            <div className="container my-5 ">
                <div className="row cart">
                    <div className="col text-center disabled ">
                        <p className="icon-bg"><span className="material-symbols-outlined icon-bg" >local_mall</span></p>
                        <h1 className="fw-light">¡Empezá un carrito de compras!</h1>
                        <h2 className="fw-lighter">Sumá productos y conseguí envío gratis.</h2>
                        <Link to={"/"} className="btn btn-primary mt-5">Descubrir productos</Link>
                    </div>
                </div>
            </div>
        )
    }




    return (
        <div className="container ">
            <div className="row ">
                <div className="col-md-6 me-4 carrousel-products p-5  my-5">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="user-name" className="form-label">Nombre y Apellido</label>
                            <input type="text" className="form-control" name="user-name" onInput={(e) => { setName(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="user-email" className="form-label">Email</label>
                            <input type="email" className="form-control" name="user-email" onInput={(e) => { setEmail(e.target.value) }} />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="user-phone" className="form-label">Teléfono</label>
                            <input type="number" className="form-control" name="user-phone" onInput={(e) => { setPhone(e.target.value) }} />
                        </div>
                        <button type="button" className="btn btn-primary my-3" onClick={generarOrden} >Finalizar compra</button>
                    </form>
                </div>

                <div className="col-md-5  ">
                    <Cart />
                </div>
            </div>
        </div>
    )

}