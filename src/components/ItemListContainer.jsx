const ItemListContainer = ({ texto }) => {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <div className="alert alert-light " role="alert">
                            <h1 className="text-center  border border-warning border-3"  style={{ color: "black", padding: "30px", textTransform: "uppercase" }}>{texto} 💛 </h1> 

                            

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ItemListContainer