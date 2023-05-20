import NavProfil from "../../components/NavProfil";
import Footer from "../../components/Footer";
import SidebarProfil from "../../components/SidebarProfil";

function Pesanan(){
    return (
        <>
            <NavProfil />

            <section className="small-section">
                <div className="container">
                    <div className="row">
                        <SidebarProfil />
                        <div className="col-9">
                            <div className="nav-pesanan">
                                <div className="row">
                                    <div className="col-2">
                                        <label>Semua</label>
                                    </div>
                                    <div className="col-2">
                                        <label>Belum Bayar</label>
                                    </div>
                                    <div className="col-2">
                                        <label>Dikemas</label>
                                    </div>
                                    <div className="col-2">
                                        <label>Dikirim</label>
                                    </div>
                                    <div className="col-2">
                                        <label>Selesai</label>
                                    </div>
                                    <div className="col-2">
                                        <label>Dibatalkan</label>
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

export default Pesanan;