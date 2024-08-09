export const NotificationWidget = () => {
    return (
        <>
            <button type="button" className="btn position-relative mt-1 p-1">
                <span className="material-symbols-outlined ">
                    notifications
                </span>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"></span>
            </button>
        </>
    )
}