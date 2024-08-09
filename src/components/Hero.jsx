const Hero = () => {
    return (
        <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true" >

            <div className="carousel-inner ">
                <div className="carousel-item active">
                    <img src="https://http2.mlstatic.com/D_NQ_722183-MLA77275293524_072024-OO.webp" className="d-block w-100 object-fit-cover" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://http2.mlstatic.com/D_NQ_688536-MLA77430786100_072024-OO.webp" className="d-block w-100 object-fit-cover" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://http2.mlstatic.com/D_NQ_677301-MLA78275982465_082024-OO.webp" className="d-block w-100 object-fit-cover" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://http2.mlstatic.com/D_NQ_945514-MLA77600731745_072024-OO.webp" className="d-block w-100 object-fit-cover" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://http2.mlstatic.com/D_NQ_994387-MLA77382061508_072024-OO.webp" className="d-block w-100 object-fit-cover" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://http2.mlstatic.com/D_NQ_775118-MLA78226085789_082024-OO.webp" className="d-block w-100 object-fit-cover" alt="..." />
                </div>
            </div>


            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            <div className="gradient"></div>
        </div>
    )
}

export default Hero