import NavigationBar from "../../components/NavigationBar";
import Produk from "../../assets/produk.png";
import Profile from "../../assets/profile.jpg";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2
        }}
    />
);



// var button = document.getElementById("btn-variant").getElementsByClassName("variant-produk-detail-btn");

// for (var i = 0; i < button.length; i++) {
//     button[i].addEventListener("click", function () {
//         var current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " active";
//     });
// }

function DetailProduk() {
    return (
        <>
            <NavigationBar />
            <section className="small-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-2 col-lg-3 d-flex justify-content-center">
                            <div className="image-produk-detail">
                                <center>
                                    <img className="big-image" src={Produk} alt="gambar-produk"></img>
                                </center>
                                <div className="image-other-produk-detail d-flex justify-content-center">
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-4">
                                            <img src={Produk} alt="gambar-produk"></img>
                                        </div>
                                        <div className="col-4">
                                            <img src={Produk} alt="gambar-produk"></img>
                                        </div>
                                        <div className="col-4">
                                            <img src={Produk} alt="gambar-produk"></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-5 col-lg-5 px-4">
                            <div className="text-produk-detail">
                                <span>Discount 14%</span>
                                <h2>Snack Keripik Kaca Pedas</h2>
                            </div>
                            <div className="rating-produk-detail">
                                <span className="me-2">5.0</span>
                                <div className="stars-detail">
                                    <i className="card-icon fa-solid fa-star"></i>
                                    <i className="card-icon fa-solid fa-star"></i>
                                    <i className="card-icon fa-solid fa-star"></i>
                                    <i className="card-icon fa-solid fa-star"></i>
                                    <i className="card-icon fa-solid fa-star"></i>
                                </div>
                                <span className="ms-2">16 Terjual | 10 Penilaian</span>
                            </div>
                            <div className="harga-produk-detail">
                                <h4>Rp 20.000</h4>
                                <h3>Rp 20.000</h3>
                            </div>
                            <div className="desc-produk-detail">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet aliquet enim. Pellentesque egestas rutrum nibh. Morbi tempor lacinia eros sit amet.</p>
                                <h3>Categories : <span>Makanan Ringan</span></h3>
                            </div>
                            <div className="variant-produk-detail">
                                <h5>Variant : 25 Gram</h5>
                                <div id="btn-variant">
                                    <button className="variant-produk-detail-btn active">25 Gram</button>
                                    <button className="variant-produk-detail-btn">30 Gram</button>
                                    <button className="variant-produk-detail-btn">35 Gram</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 co-12 col-md-5 col-lg-4">
                            <div className="card-checkout">
                                <div className="container">
                                    <h2>Atur jumlah catatan</h2>
                                    <p>25gram</p>
                                    <ColoredLine color="black" />
                                    <div className="qty-card-checkout">
                                        <input className="col-6" type="number" min="1"></input>
                                        <span className="col-6">Stock 8</span>
                                    </div>
                                    <div className="note-card-checkout">
                                        <a href="#s"><span><i className="fa-regular fa-pen-to-square"></i>Tambah Catatan</span></a>
                                    </div>
                                    <div className="subtotal-card-checkout">
                                        <div className="row">
                                            <div className="col-6">
                                                <h4>Subtotal</h4>
                                            </div>
                                            <div className="col-6 text-end">
                                                <h3>Rp 20.000</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="button-card-checkout">
                                        <div className="row">
                                            <div className="col-6">
                                                <button className="btn-solid checkout">+ Keranjang</button>
                                            </div>
                                            <div className="col-6 d-flex justify-content-end">
                                                <button className="btn-outline checkout">Beli Langsung</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* review produk */}
            <section className="small-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                            <div className="col-12">
                                <h1 className="title-text">Ulasan</h1>
                            </div>
                            <div className="review-produk">
                                <div className="row">
                                    <div className="image-ulasan col-sm-3 col-sm-3 col-md-2 col-lg-1">
                                        <img className="rounded-circle" src={Profile} alt="gambar-produk"></img>
                                    </div>
                                    <div className="col-12 col-sm-12 col-lg-7 col-md-8">
                                        <div className="review-produk-text">
                                            <label>Username</label>
                                            <div className="stars">
                                                <i className="card-icon fa-solid fa-star"></i>
                                                <i className="card-icon fa-solid fa-star"></i>
                                                <i className="card-icon fa-solid fa-star"></i>
                                                <i className="card-icon fa-solid fa-star"></i>
                                                <i className="card-icon fa-solid fa-star"></i>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                            <div className="image-review">
                                                <img src={Produk} alt="gambar-produk"></img>
                                                <img src={Produk} alt="gambar-produk"></img>
                                                <img src={Produk} alt="gambar-produk"></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end review produk */}
            {/* related product */}
            <section className="small-section">
                <div className="container">
                    <div className="col-12">
                        <h1 className="title-text">Produk Serupa</h1>
                    </div>
                    <div className="row">
                        <div className="col-6 col-md-3 col-lg-3">
                            <div className="card produk">
                                <span className="text-center col-lg-3 col-md-4 col-5 card-badge">-16%</span>
                                <img src={Produk} className="card-img-top" alt="gambar-produk" />
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
                                <img src={Produk} className="card-img-top" alt="gambar-produk" />
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
                                <img src={Produk} className="card-img-top" alt="gambar-produk" />
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
                                <img src={Produk} className="card-img-top" alt="gambar-produk" />
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
            {/* end related product */}
            <Footer />
        </>
    )
}
export default DetailProduk;