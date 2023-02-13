import Footer from "../../components/Footer";
import NavigationBar from "../../components/NavigationBar";
import Chartbanner from "../../assets/chart-banner.png";
import Produk from "../../assets/produk.png";

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2
        }}
    />
);
const Linebold = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 10,
        }}
    />
);

function Keranjang() {
    return (
        <>
            <NavigationBar />
            <section className="small-section">
                <div className="container px-5">
                    <div className="col-12">
                        <h1 className="title-text">Keranjang</h1>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            <div className="banner-chart bg-blue">
                                <div className="row">
                                    <div className="col-2">
                                        <img src={Chartbanner}></img>
                                    </div>
                                    <div className="col-9">
                                        {/* banner */}
                                        <div className="text-center text-white">
                                            <div className="text-banner">
                                                <h3>Belanja Tanpa Ribet ?</h3>
                                                <p>Wikrama Shop Dong !</p>
                                            </div>
                                        </div>
                                        {/* end banner */}
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                            <section className="small-section">
                                <div className="checkbox-produk">
                                    <input className="checkbox" type={"checkbox"}></input>
                                    <span>Pilih Semua</span>
                                    <Linebold color="grey" />
                                </div>
                                <div className="container">
                                    <div className="card-keranjang">
                                        <div className="container">
                                            <div className="col-12">
                                                <input className="small-checkbox" type={"checkbox"}></input>
                                                <span>Wikrama Shop</span>
                                                <ColoredLine color="black" />
                                            </div>
                                            <div className="row">
                                                <div className="col-1 px-4">
                                                    <input className="small-checkbox" type={"checkbox"}></input>
                                                </div>
                                                <div className="col-1">
                                                    <div className="image-keranjang">
                                                        <img src={Produk} alt="gambar-produk"></img>
                                                    </div>
                                                </div>
                                                <div className="col-2">
                                                    <h4>Snack Keripik Kaca Pedas</h4>
                                                </div>
                                                <div className="col-1">
                                                    <h5>45 Gram</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        {/* Peyment */}
                        <div className="col-4">
                            <div className="card-checkout">
                                <div className="container py-2">
                                    <h2 className="text-start">Ringkasan Belanja</h2>
                                    <div className="row ">
                                        <div className="col-7">
                                            <h5>Total Harga (3 barang)</h5>
                                        </div>
                                        <div className="col-5">
                                            <h5>Rp.120.000</h5>
                                        </div>
                                        <div className="col-7">
                                            <h5>Total Promo Barang</h5>
                                        </div>
                                        <div className="col-5">
                                            <h5>Rp.60.000</h5>
                                        </div>
                                    </div>
                                    <ColoredLine color="black" />

                                    <div className="subtotal-card-checkout">
                                        <div className="row">
                                            <div className="col-5">
                                                <h4>Total Harga</h4>
                                            </div>
                                            <div className="col-6 text-end">
                                                <h3>Rp 20.000</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="button-card-checkout">
                                        <div className="row">
                                            <div className="col-12 d-flex justify-content-start">
                                                <button className="btn-solid">Bayar</button>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end payment */}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Keranjang;