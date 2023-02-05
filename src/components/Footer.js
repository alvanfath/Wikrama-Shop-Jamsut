import Logo from "../assets/logo.png"
const Footer = () => {
    return (
        <section className="small-section bg-blue mt-5">
            <div className="container">
                <footer>
                    <div className="row">
                        <div className="col-4">
                            <div className="logo-footer">
                                <img src={Logo}></img>
                                <div className="txt-footer-logo">
                                    <h1>Wikrama</h1>
                                    <h2>Shop</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="footer-text">
                                <h3>Lokasi</h3>
                                <p>Gedung wikrama R.203, jalan wangun, bogor timur</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="footer-text">
                                <h3>Kontak</h3>
                                <p>Gedung wikrama R.203, jalan wangun, bogor timur</p>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="footer-text">
                                <h3>Sosmed</h3>
                                <p>Gedung wikrama R.203, jalan wangun, bogor timur</p>
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
    )
}
export default Footer