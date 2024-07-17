export const ShippingAddress = () => {
    return (
        <button type="button" className="btn px-0  ">
            <div className="row">
                <div className="col-md-4 "  >
                    <span className="material-symbols-outlined">location_on</span>
                </div>
                <div className="col-md-4 " >
                    <div className="row">
                        <p className="shipping-address-text" style={{ 'fontSize': '12px' }}>Enviar a</p>
                    </div>
                    <div className="row">
                        <p className="shipping-address-text" style={{ 'fontSize': '14px' }}>Buenos Aires 7000</p>
                    </div>
                </div>
            </div>
        </button>
    )
}