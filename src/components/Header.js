import CardBg from "../assets/bg-card1.png"

const Header = () => {
    return (
        <section className="small-section">
            <div className="container">
                <div id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={CardBg} className="d-block w-100" alt="..."></img>
                            <div className="container-fluid">
                                <div className="col-5 carousel-caption">
                                    <h1>Selamat Datang di</h1>
                                    <h1>Wikrama Shop</h1>
                                    <p>Kini Kami Hadir Secara Online !</p>
                                    <div className="header-sosmed">
                                            <a><span><i className="rounded-circle fa-brands fa-tiktok"></i></span></a>
                                            <a><span><i className="rounded-circle fa-brands fa-instagram"></i></span></a>
                                            <a><span><i className="rounded-circle fa-brands fa-youtube"></i></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={CardBg} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header