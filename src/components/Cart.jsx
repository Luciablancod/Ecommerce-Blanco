import { useContext } from "react"
import { CartContext } from "./context/CartContext"
import { Link, useLocation } from "react-router-dom";

export const Cart = () => {
    const { cart, removeItem, clear, sumProducts, totalProducts } = useContext(CartContext);
    const location = useLocation();


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
        <div className="container my-5 ">
            <div className="row cart">
                <div className="col carrousel-products p-5">
                    <h1 className="">Resumen de compra</h1>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td colSpan={5} className="text-end"><a className="btn btn-light-blue" role="button" onClick={clear}>Vaciar carrito</a></td>
                            </tr>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td className="align-middle">
                                        <img src={item.image} alt={item.title} width={90} />
                                    </td>
                                    <td className="align-middle">
                                        <div className="row item-title">
                                            <Link to={"/item/" + item.id} className="link-style">{item.title}</Link>
                                        </div>

                                        <a className="btn btn-light-blue r" id="liveToastBtn" role="button" onClick={() => { removeItem(item.id) }}>Eliminar</a>
                                    </td>
                                    <td className="align-middle text-center">${item.price} X {item.quantity}</td>
                                    <td className="align-middle text-end">${item.price * item.quantity}</td>
                                </tr>
                            ))}
                            <tr>
                                <td className="align-middle text-center  fw-bolder" colSpan={3}>Total</td>
                                <td className="align-middle text-center fw-bolder">${sumProducts()}</td>
                            </tr>

                            {(location.pathname != "/checkout") ?
                                <tr>
                                    <td colSpan={5} className="text-end">
                                        <Link className="btn btn-primary mt-5" to={"/checkout"}> Continuar compra </Link>
                                    </td>
                                </tr> : ""}

                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}