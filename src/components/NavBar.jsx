import { Link, NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"
import { NotificationWidget } from "./NotificationWidget"
import { ShippingAddress } from "./ShippingAddress"


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg p-3">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <div className="container ">
                    <div className="row">
                        <div className="col-md-2">
                            <Link to={"/"} className="navbar-brand">
                                <img src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.6.59/mercadolibre/logo_large_25years@2x.png" alt="Mercado Libre Argentina" width={120} />
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <form className="form input-search " role="search">
                                <div className="input-group mb-2  ">
                                    <input type="text " className="form-control" placeholder="Buscar productos, marcas y más..." aria-label="Recipient's username" aria-describedby="basic-addon2" disabled />
                                    <span className="input-group-text material-symbols-outlined" id="basic-addon2">search</span>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-4 position-absolute end-0">
                            <Link className="navbar-brand">
                                <img src="https://http2.mlstatic.com/D_NQ_983407-MLA77032071380_062024-OO.webp" alt="Por 3.999 pesos ¡Suscribite al nivel 6!, Disney+ Incluído" width={340} />
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 ">
                            <ShippingAddress />
                        </div>
                        <div className="col-md-7">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                                <li className="nav-item dropdown ">
                                    <NavLink className="nav-link dropdown-toggle pt-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" disabled>
                                        Categorías
                                    </NavLink>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown-item"><NavLink className="nav-link" href="/vehiculos">Vehículos</NavLink></li>
                                        <li className="dropdown-item"><NavLink className="nav-link" href="/inmuebles">Inmuebles</NavLink></li>
                                        <li className="dropdown-item"><NavLink className="nav-link" href="supermercado">Supermercado</NavLink></li>
                                        <li className="dropdown-item"><NavLink className="nav-link" href="tecnologia">Tecnología</NavLink></li>
                                        <li className="dropdown-item"><NavLink className="nav-link" href="/hogar-y- muebles">Hogar y Muebles</NavLink></li>
                                        <li className="dropdown-item"><NavLink className="nav-link" href="/electrodomesticos">Electrodomésticos</NavLink></li>
                                        <li className="dropdown-item"><NavLink className="nav-link" href="/herramientas">Herramientas</NavLink></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"/category/ofertas"} className="nav-link  pt-3" >Ofertas</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link pt-3" disabled>Historial</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"/category/supermercado"} className="nav-link pt-3" >Supermercado</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"/category/moda"} className="nav-link pt-3" >Moda</NavLink>
                                </li>
                                <li className="nav-item">
                                    <span className="badge rounded-pill text-bg-success position-absolute ">GRATIS</span>
                                    <NavLink className="nav-link position-relative pt-3" href="/mercado-play">Mercado Play</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link pt-3" href="/vender">Vender</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link pt-3" href="/ayuda">Ayuda</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 position-absolute end-0">


                            <ul className="navbar-nav ">
                                <li className="nav-item">
                                    <NavLink className="nav-link  pt-3" >Creá tu cuenta</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link  pt-3" >Ingresá</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link  pt-3" >Mis compras</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NotificationWidget />
                                </li>
                                <li className="nav-item">
                                    <CartWidget />
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar