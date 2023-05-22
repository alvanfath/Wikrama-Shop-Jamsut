import Logo from "../assets/logo.png";

function Footer() {
    return (
        <>
            <section className="small-section bg-blue mt-5">
                <div className="container">
                    <footer>
                        <div className="row">
                            <div className="col-12 col-md-4 col-lg-4">
                                <div className="logo-footer">
                                    <img src={Logo} alt="Wikrama Shop" />
                                    <div className="txt-footer-logo">
                                        <h1>Wikrama</h1>
                                        <h2>Shop</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-3 col-lg-3">
                                <div className="footer-text">
                                    <h3>Lokasi</h3>
                                    <p>Gedung Wikrama Ruang 203, Jalan Wangun, Bogor Timur</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-3 col-lg-3">
                                <div className="footer-text">
                                    <h3>Kontak</h3>
                                    <p>Lorem Ipsum Dolar Sit Amet</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-2 col-lg-2">
                                <div className="footer-text">
                                    <h3>Sosmed</h3>
                                    <p>Lorem Ipsum Dolar Sit Amet</p>
                                </div>
                            </div>
                        </div>
                        <div className="copyright">
                            <div className="col-12">
                                <hr></hr>
                                <h1 className="copyright-text">© Jamsut No Counter 2023. Hak Cipta Dilindungi</h1>
                            </div>
                        </div>
                    </footer>
                </div>
            </section>
        </>
    )
}

export default Footer;