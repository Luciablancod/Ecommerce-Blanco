const CartWidget = () => {
    return (
        <>
            <button type="button" className="btn position-relative mt-1 p-1">
                <span className="material-symbols-outlined ">
                    shopping_cart
                </span>
                <span className="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-danger">
                    3
                </span>
            </button>
        </>

    )
}

export default CartWidget