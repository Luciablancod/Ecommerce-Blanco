import CartWidget  from "./CartWidget"
const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg p-3">
                <div className="container-fluid">

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <a href="https://www.mercadolibre.com.ar/" className=""> <img src="/images\logo-ml.png" alt="Mercado Libre Argentina" width={120} />  </a>
                            </li>

                            <li className="nav-item dropdown ">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorías
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/vehiculos">Vehículos</a></li>
                                    <li><a className="dropdown-item" href="/inmuebles">Inmuebles</a></li>
                                    <li><a className="dropdown-item" href="supermercado">Supermercado</a></li>
                                    <li><a className="dropdown-item" href="tecnologia">Tecnología</a></li>
                                    <li><a className="dropdown-item" href="/hogar-y- muebles">Hogar y Muebles</a></li>
                                    <li><a className="dropdown-item" href="/electrodomesticos">Electrodomésticos</a></li>
                                    <li><a className="dropdown-item" href="/herramientas">Herramientas</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/ofertas">Ofertas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/historial">Historial</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/supermercado">Supermercado</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/moda">Moda</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/mercado-play">Mercado Play</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/vender">Vender</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/ayuda">Ayuda</a>
                            </li>
                        </ul>
                        <span class="material-symbols-outlined ">
                            notifications
                        </span>
                        <CartWidget />
                    </div>
                </div>
            </nav>
        </>

    )
}

export default NavBar