import NavigationBar from "../../components/NavigationBar";
import CardBg from "../../assets/bg-card1.png";
import Produk from "../../assets/produk.png";
import CardKategori from "../../components/CardKategori";
import Motor1 from "../../assets/motor1.png";
import Motor2 from "../../assets/motor2.png";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Landing() {
    return (
        <>
            <NavigationBar />
            {/* header */}
            <div className="container header-container">
                <div id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={CardBg} className="d-block w-100" alt="Wikrama Shop" />
                            <div className="container-fluid">
                                <div className="col-5 carousel-caption">
                                    <h1>Selamat Datang di</h1>
                                    <h1>Wikrama Shop</h1>
                                    <p>Kini Kami Hadir Secara Online !</p>
                                    <div className="header-sosmed">
                                        <a href="#"><span><i className="rounded-circle fa-brands fa-tiktok"></i></span></a>
                                        <a href="#"><span><i className="rounded-circle fa-brands fa-instagram"></i></span></a>
                                        <a href="#"><span><i className="rounded-circle fa-brands fa-youtube"></i></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={CardBg} className="d-block w-100" alt="Wikrama Shop" />
                        </div>
                    </div>
                </div>
            </div>
            {/* end header */}
            {/* rekomendasi produk */}
            <section className="small-section">
                <div className="container">
                    <div className="col-12">
                        <h1 className="title-text">Rekomendasi Produk</h1>
                    </div>
                    <div className="row">
                        <div className="col-6 col-md-3 col-lg-3">
                            <div className="card produk">
                                <span className="text-center col-lg-3 col-md-4 col-5 card-badge">-16%</span>
                                <img src={Produk} className="card-img-top" />
                                <div className="card-body">
                                    <h6 className="card-categories">Snack</h6>
                                    <h5 className="card-title">Keripik Kaca Pedas</h5>
                                    <div className="stars d-flex">
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <h6 className="card-sold">100 Terjual</h6>
                                    </div>
                                    <p className="card-by">by <span>BDP Wikrama</span></p>
                                    <div className="card-button">
                                        <div className="row">
                                            <div className="col-7">
                                                <h5 className="card-harga">Rp 20.000</h5>
                                            </div>
                                            <div className="col-5">
                                                <button className="card-button"><FontAwesomeIcon className="icon-shop" icon={faCartShopping} /> Add</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 col-lg-3">
                            <div className="card">
                                <span className="text-center col-lg-3 col-md-4 col-5 card-badge">-16%</span>
                                <img src={Produk} className="card-img-top" />
                                <div className="card-body">
                                    <h6 className="card-categories">Snack</h6>
                                    <h5 className="card-title">Keripik Kaca Pedas</h5>
                                    <div className="stars d-flex">
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <h6 className="card-sold">100 Terjual</h6>
                                    </div>
                                    <p className="card-by">by <span>BDP Wikrama</span></p>
                                    <div className="card-button">
                                        <div className="row">
                                            <div className="col-7">
                                                <h5 className="card-harga">Rp 20.000</h5>
                                            </div>
                                            <div className="col-5">
                                                <button className="card-button"><FontAwesomeIcon className="icon-shop" icon={faCartShopping} /> Add</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 col-lg-3">
                            <div className="card">
                                <span className="text-center col-lg-3 col-md-4 col-5 card-badge">-16%</span>
                                <img src={Produk} className="card-img-top" />
                                <div className="card-body">
                                    <h6 className="card-categories">Snack</h6>
                                    <h5 className="card-title">Keripik Kaca Pedas</h5>
                                    <div className="stars d-flex">
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <h6 className="card-sold">100 Terjual</h6>
                                    </div>
                                    <p className="card-by">by <span>BDP Wikrama</span></p>
                                    <div className="card-button">
                                        <div className="row">
                                            <div className="col-7">
                                                <h5 className="card-harga">Rp 20.000</h5>
                                            </div>
                                            <div className="col-5">
                                                <button className="card-button"><FontAwesomeIcon className="icon-shop" icon={faCartShopping} /> Add</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 col-lg-3">
                            <div className="card">
                                <span className="text-center col-lg-3 col-md-4 col-5 card-badge">-16%</span>
                                <img src={Produk} className="card-img-top" />
                                <div className="card-body">
                                    <h6 className="card-categories">Snack</h6>
                                    <h5 className="card-title">Keripik Kaca Pedas</h5>
                                    <div className="stars d-flex">
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <h6 className="card-sold">100 Terjual</h6>
                                    </div>
                                    <p className="card-by">by <span>BDP Wikrama</span></p>
                                    <div className="card-button">
                                        <div className="row">
                                            <div className="col-7">
                                                <h5 className="card-harga">Rp 20.000</h5>
                                            </div>
                                            <div className="col-5">
                                                <button className="card-button"><FontAwesomeIcon className="icon-shop" icon={faCartShopping} /> Add</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end rekomendasi produk */}
            <CardKategori />
            {/* cta motor */}
            <section className="small-section d-flex ">
                <div className="container bg-blue ">
                    <div className="card-cta">
                        <div className="row">
                            <div className="col-3 col-md-4 col-lg-4">
                                <img src={Motor1} />
                            </div>
                            <div className="col-6 col-md-4 col-lg-4 text-center txt-cta-motor">
                                <h1>Motor Listrik</h1>
                                <p>lorem ipsum dolar sit amet</p>
                                <button className="btn-white">Gasken !</button>
                            </div>
                            <div className="col-3 col-md-4 col-lg-4 d-flex justify-content-end">
                                <img src={Motor2} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end cta motor */}
            {/* produk lainnya */}
            <section className="half-section">
                <div className="container">
                    <div className="col-12">
                        <h1 className="title-text">Produk Lainnya</h1>
                    </div>
                    <div className="row">
                        <div className="col-6 col-md-3 col-lg-3">
                            <div className="card produk">
                                <span className="text-center col-lg-3 col-md-4 col-5 card-badge">-16%</span>
                                <img src={Produk} className="card-img-top" />
                                <div className="card-body">
                                    <h6 className="card-categories">Snack</h6>
                                    <h5 className="card-title">Keripik Kaca Pedas</h5>
                                    <div className="stars d-flex">
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <h6 className="card-sold">100 Terjual</h6>
                                    </div>
                                    <p className="card-by">by <span>BDP Wikrama</span></p>
                                    <div className="card-button">
                                        <div className="row">
                                            <div className="col-7">
                                                <h5 className="card-harga">Rp 20.000</h5>
                                            </div>
                                            <div className="col-5">
                                                <button className="card-button"><FontAwesomeIcon className="icon-shop" icon={faCartShopping} /> Add</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 col-lg-3">
                            <div className="card">
                                <span className="text-center col-lg-3 col-md-4 col-5 card-badge">-16%</span>
                                <img src={Produk} className="card-img-top" />
                                <div className="card-body">
                                    <h6 className="card-categories">Snack</h6>
                                    <h5 className="card-title">Keripik Kaca Pedas</h5>
                                    <div className="stars d-flex">
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <h6 className="card-sold">100 Terjual</h6>
                                    </div>
                                    <p className="card-by">by <span>BDP Wikrama</span></p>
                                    <div className="card-button">
                                        <div className="row">
                                            <div className="col-7">
                                                <h5 className="card-harga">Rp 20.000</h5>
                                            </div>
                                            <div className="col-5">
                                                <button className="card-button"><FontAwesomeIcon className="icon-shop" icon={faCartShopping} /> Add</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 col-lg-3">
                            <div className="card">
                                <span className="text-center col-lg-3 col-md-4 col-5 card-badge">-16%</span>
                                <img src={Produk} className="card-img-top" />
                                <div className="card-body">
                                    <h6 className="card-categories">Snack</h6>
                                    <h5 className="card-title">Keripik Kaca Pedas</h5>
                                    <div className="stars d-flex">
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <h6 className="card-sold">100 Terjual</h6>
                                    </div>
                                    <p className="card-by">by <span>BDP Wikrama</span></p>
                                    <div className="card-button">
                                        <div className="row">
                                            <div className="col-7">
                                                <h5 className="card-harga">Rp 20.000</h5>
                                            </div>
                                            <div className="col-5">
                                                <button className="card-button"><FontAwesomeIcon className="icon-shop" icon={faCartShopping} /> Add</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 col-lg-3">
                            <div className="card">
                                <span className="text-center col-lg-3 col-md-4 col-5 card-badge">-16%</span>
                                <img src={Produk} className="card-img-top" />
                                <div className="card-body">
                                    <h6 className="card-categories">Snack</h6>
                                    <h5 className="card-title">Keripik Kaca Pedas</h5>
                                    <div className="stars d-flex">
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <h6 className="card-sold">100 Terjual</h6>
                                    </div>
                                    <p className="card-by">by <span>BDP Wikrama</span></p>
                                    <div className="card-button">
                                        <div className="row">
                                            <div className="col-7">
                                                <h5 className="card-harga">Rp 20.000</h5>
                                            </div>
                                            <div className="col-5">
                                                <button className="card-button"><FontAwesomeIcon className="icon-shop" icon={faCartShopping} /> Add</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 col-lg-3">
                            <div className="card">
                                <span className="text-center col-lg-3 col-md-4 col-5 card-badge">-16%</span>
                                <img src={Produk} className="card-img-top" />
                                <div className="card-body">
                                    <h6 className="card-categories">Snack</h6>
                                    <h5 className="card-title">Keripik Kaca Pedas</h5>
                                    <div className="stars d-flex">
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <h6 className="card-sold">100 Terjual</h6>
                                    </div>
                                    <p className="card-by">by <span>BDP Wikrama</span></p>
                                    <div className="card-button">
                                        <div className="row">
                                            <div className="col-7">
                                                <h5 className="card-harga">Rp 20.000</h5>
                                            </div>
                                            <div className="col-5">
                                                <button className="card-button"><FontAwesomeIcon className="icon-shop" icon={faCartShopping} /> Add</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 col-lg-3">
                            <div className="card">
                                <span className="text-center col-lg-3 col-md-4 col-5 card-badge">-16%</span>
                                <img src={Produk} className="card-img-top" />
                                <div className="card-body">
                                    <h6 className="card-categories">Snack</h6>
                                    <h5 className="card-title">Keripik Kaca Pedas</h5>
                                    <div className="stars d-flex">
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <h6 className="card-sold">100 Terjual</h6>
                                    </div>
                                    <p className="card-by">by <span>BDP Wikrama</span></p>
                                    <div className="card-button">
                                        <div className="row">
                                            <div className="col-7">
                                                <h5 className="card-harga">Rp 20.000</h5>
                                            </div>
                                            <div className="col-5">
                                                <button className="card-button"><FontAwesomeIcon className="icon-shop" icon={faCartShopping} /> Add</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 col-lg-3">
                            <div className="card">
                                <span className="text-center col-lg-3 col-md-4 col-5 card-badge">-16%</span>
                                <img src={Produk} className="card-img-top" />
                                <div className="card-body">
                                    <h6 className="card-categories">Snack</h6>
                                    <h5 className="card-title">Keripik Kaca Pedas</h5>
                                    <div className="stars d-flex">
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <h6 className="card-sold">100 Terjual</h6>
                                    </div>
                                    <p className="card-by">by <span>BDP Wikrama</span></p>
                                    <div className="card-button">
                                        <div className="row">
                                            <div className="col-7">
                                                <h5 className="card-harga">Rp 20.000</h5>
                                            </div>
                                            <div className="col-5">
                                                <button className="card-button"><FontAwesomeIcon className="icon-shop" icon={faCartShopping} /> Add</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 col-lg-3">
                            <div className="card">
                                <span className="text-center col-lg-3 col-md-4 col-5 card-badge">-16%</span>
                                <img src={Produk} className="card-img-top" />
                                <div className="card-body">
                                    <h6 className="card-categories">Snack</h6>
                                    <h5 className="card-title">Keripik Kaca Pedas</h5>
                                    <div className="stars d-flex">
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <i className="card-icon fa-solid fa-star"></i>
                                        <h6 className="card-sold">100 Terjual</h6>
                                    </div>
                                    <p className="card-by">by <span>BDP Wikrama</span></p>
                                    <div className="card-button">
                                        <div className="row">
                                            <div className="col-7">
                                                <h5 className="card-harga">Rp 20.000</h5>
                                            </div>
                                            <div className="col-5">
                                                <button className="card-button"><FontAwesomeIcon className="icon-shop" icon={faCartShopping} /> Add</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        <button className="btn-solid mt-2">Lihat Lebih Banyak</button>
                    </div>
                </div>
            </section>
            {/* end produk lainnya */}
            <Footer />
        </>
    )
}

export default Landing;