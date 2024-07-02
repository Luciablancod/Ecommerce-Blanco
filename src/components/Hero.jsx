const Hero = () => {
    return (
        <>
            <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true" >

                <div className="carousel-inner ">
                    <div className="carousel-item active">
                        <img src="/images\hero-1.JPG" className="d-block w-100 object-fit-cover" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/images\hero-2.JPG" className="d-block w-100 object-fit-cover" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/images\hero-3.JPG" className="d-block w-100 object-fit-cover" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/images\hero-4.JPG" className="d-block w-100 object-fit-cover" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/images\hero-5.JPG" className="d-block w-100 object-fit-cover" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/images\hero-6.JPG" className="d-block w-100 object-fit-cover" alt="..." />
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
            </div>


        </>

    )
}

export default Hero