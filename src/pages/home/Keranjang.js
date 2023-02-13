import Footer from "../../components/Footer";
import NavigationBar from "../../components/NavigationBar";
import Chartbanner from "../../assets/chart-banner.png";

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2
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
                                    <input type={"checkbox"}></input>
                                    <span>Pilih Semua</span>
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