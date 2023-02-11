import NavigationBar from "../../components/NavigationBar";
import Produk from "../../assets/produk.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2
        }}
    />
);

function DetailProduk() {
    return (
        <>
            <NavigationBar />
            <section className="small-section">
                <div className="container">
                    <div className="row px-5">
                        <div className="col-2 d-flex justify-content-center">
                            <div className="image-produk-detail">
                                <img src={Produk}></img>
                            </div>
                        </div>
                        <div className="col-5">
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
                            </div>
                        </div>
                        <div className="col-4">
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
                                        <a href="#"><span><i class="fa-regular fa-pen-to-square"></i>Tambah Catatan</span></a>
                                    </div>
                                    <div className="subtotal-card-checkout">
                                        <div className="row">
                                            <div className="col-6">
                                                <h4>Subtotal</h4>
                                            </div>
                                            <div className="col-6">
                                                <h3>Rp 20.000</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="button-card-checkout">
                                        <div className="row">
                                            <div className="col-6">
                                                <button className="btn-solid">+ Keranjang</button>
                                            </div>
                                            <div className="col-6">
                                                <button className="btn-outline">Beli Langsung</button>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default DetailProduk;