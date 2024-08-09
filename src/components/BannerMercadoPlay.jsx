export const BannerMercadoPlay = () => {
    return (
        <div className="container my-3  position-relative banner" >
            <div className="row bg-black rounded">
                <img src="https://http2.mlstatic.com/D_NQ_803027-MLU74643615266_022024-OO.webp" className="object-fit-cover rounded " alt="..." />
            </div>

            <div className="row">
                <div className="col-md-4 position-absolute  top-50 start-0 translate-middle-y ps-5 ">
                    <img className="my-3" src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/touchpoint_trailer/logo-mercado-play-v3.png" width={120} />

                    <h2>Ahora podés ver</h2>
                    <h3>series y películas</h3>
                    <button className="btn badge rounded-pill text-bg-success m-1">GRATIS</button>
                    <br></br>
                    <button className="btn btn-dark mt-3">Ir a Mercado Play </button>
                </div>
                <div className="col-md-7 position-absolute top-50 start-50 translate-middle-y ps-5">
                    <img src="https://http2.mlstatic.com/D_NQ_931271-MLA77634210499_072024-OO.webp" width={400} />
                </div>
            </div>
        </div>
    )
}