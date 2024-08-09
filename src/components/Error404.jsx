import { Link } from "react-router-dom"
export const Error404 = () => {
    return (

        <section className="py-3 py-md-5 min-vh-100 d-flex justify-content-center align-items-center bg-body ">
            <div className="container ">
                <div className="row ">
                    <div className="col-12 ">
                        <div className="text-center">
                            <h2 className="d-flex justify-content-center align-items-center gap-2 mb-4">
                                <img src="./images/error404.JPG" alt="Por 3.999 pesos ¡Suscribite al nivel 6!, Disney+ Incluído" width={340} />
                            </h2>
                            <h3 className="h2 mb-2">Ups!</h3>
                            <p className="mb-5">Parece que esta página no existe</p>
                            <Link to={"/"} className="btn bsb-btn-5xl btn-primary  px-5 fs-6 m-0 " href="#!" role="button">Ir a la página principal</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}