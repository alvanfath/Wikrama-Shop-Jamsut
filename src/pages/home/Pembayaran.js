import Footer from "../../components/Footer";
import NavPembayaran from "../../components/NavPembayaran";
import Produk from "../../assets/produk.png";
import BCA from "../../assets/logo-bca.png";
import { Link } from "react-router-dom";

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2,

        }}
    />
);

function Pembayaran() {
    return (
        <>
            <NavPembayaran />
            <section className="small-section">
                <div className="container">
                    <div className="card-alamat col-12">
                        <div className="card-alamat-title">
                            <div className="col-12">
                                <h1>Alamat Lengkap :</h1>
                            </div>
                        </div>
                    </div>
                    <div className="card-pesanan col-12">
                        <div className="card-alamat-title">
                            <div className="col-12">
                                <h1>Produk Dipesan :</h1>
                            </div>
                        </div>
                        <div className="card-pesanan-produk col-12">
                            <div className="container">
                                <div className="row">
                                    <div className="col-2">
                                        <div className="image-produk-pembayaran d-flex justify-content-center">
                                            <img src={Produk}></img>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="nama-produk-pembayaran">
                                            <h3>Keripik Kaca Pedas</h3>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="nama-produk-pembayaran">
                                            <span>Variasi</span>
                                            <h4>45 Gram</h4>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="nama-produk-pembayaran">
                                            <span>Harga Satuan</span>
                                            <h4>Rp 20.000</h4>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="nama-produk-pembayaran">
                                            <span>Jumlah</span>
                                            <h4>1</h4>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="nama-produk-pembayaran">
                                            <span>Subtotal</span>
                                            <p><span>Rp. </span>40.000</p>
                                        </div>
                                    </div>
                                </div>
                                <ColoredLine color="#C1C1C1" />
                                <div className="row">
                                    <div className="col-2">
                                        <div className="image-produk-pembayaran d-flex justify-content-center">
                                            <img src={Produk}></img>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="nama-produk-pembayaran">
                                            <h3>Keripik Kaca Pedas</h3>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="nama-produk-pembayaran">
                                            <span>Variasi</span>
                                            <h4>45 Gram</h4>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="nama-produk-pembayaran">
                                            <span>Harga Satuan</span>
                                            <h4>Rp 20.000</h4>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="nama-produk-pembayaran">
                                            <span>Jumlah</span>
                                            <h4>1</h4>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="nama-produk-pembayaran">
                                            <span>Subtotal</span>
                                            <p><span>Rp. </span>40.000</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card-metode-pembayaran col-12">
                            <div className="container">
                                <div className="col-12">
                                    <h1>Metode Pembayaran :</h1>
                                </div>
                                <div className="metode-pembayaran">
                                    <div className="row d-flex justify-content-center">
                                        <div class="card-m-pembayaran col-2 d-flex justify-content-center">
                                            <Link>
                                                <img src={BCA}></img>
                                            </Link>
                                        </div>
                                        <div class="card-m-pembayaran col-2 d-flex justify-content-center">
                                            <Link>
                                                <img src={BCA}></img>
                                            </Link>
                                        </div>
                                        <div class="card-m-pembayaran col-2 d-flex justify-content-center">
                                            <Link>
                                                <img src={BCA}></img>
                                            </Link>
                                        </div>
                                        <div class="card-m-pembayaran col-2 d-flex justify-content-center">
                                            <Link>
                                                <img src={BCA}></img>
                                            </Link>
                                        </div>
                                        <div class="card-m-pembayaran col-2 d-flex justify-content-center">
                                            <Link>
                                                <img src={BCA}></img>
                                            </Link>
                                        </div>
                                        <div class="card-m-pembayaran col-2 d-flex justify-content-center">
                                            <Link>
                                                <img src={BCA}></img>
                                            </Link>
                                        </div>
                                        <div class="card-m-pembayaran col-2 d-flex justify-content-center">
                                            <Link>
                                                <img src={BCA}></img>
                                            </Link>
                                        </div>
                                        <div class="card-m-pembayaran col-2 d-flex justify-content-center">
                                            <Link>
                                                <img src={BCA}></img>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <section className="small-section">
                            <div className="row">
                                <div className="col-6 ">
                                    <div className="card-total-pembayaran">
                                        <div className="container">
                                            <div className="text-total">
                                                <div className="row">
                                                    <div class="col-6">
                                                        <span>Catatan</span>
                                                    </div>
                                                </div>
                                                <ColoredLine color="#C1C1C1" />
                                                <div className="row">
                                                    <div class="col-12">
                                                        <span className="">lorem ipsum dolar sit amet</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="card-total-pembayaran">
                                        <div className="container">
                                            <div className="text-total">
                                                <div className="row">
                                                    <div class="col-5">
                                                        <span>Subtotal Pembayaran</span>
                                                    </div>
                                                    <div class="col-3">
                                                        <span>Rp. 60.000</span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div class="col-5">
                                                        <span>Ongkir</span>
                                                    </div>
                                                    <div class="col-3">
                                                        <span>Rp. 10.000</span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div class="col-5">
                                                        <span>Biaya Layanan</span>
                                                    </div>
                                                    <div class="col-3">
                                                        <span>Rp. 1.000</span>
                                                    </div>
                                                </div>
                                                <ColoredLine color="#C1C1C1" />
                                                <div className="row">
                                                    <div class="col-5">
                                                        <span className="total-pemb">Total</span>
                                                    </div>
                                                    <div class="col-3">
                                                        <span className="total-rup">Rp. 71.000</span>
                                                    </div>
                                                </div>
                                                <Link to="#">
                                                    <button className="btn-outline mrgn col-12 justify-content-end">Buat Pesanan</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <ColoredLine color="#C1C1C1" />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Pembayaran;