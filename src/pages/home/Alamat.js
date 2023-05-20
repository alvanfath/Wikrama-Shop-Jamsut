import NavProfil from "../../components/NavProfil";
import Footer from "../../components/Footer";
import SidebarProfil from "../../components/SidebarProfil";

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2,
            width: 800

        }}
    />
);

function Alamat() {
    return (
        <>
            <NavProfil />
            {/* sidebar profil */}
            <section className="small-section">
                <div className="container">
                    <div className="row">
                        <SidebarProfil />
                        <div className="content-profil col-9">
                            <div className="profil col-12">
                                <div className="note-profil col-12">
                                    <div className="row">
                                        <div className="title-card-alamat col-3">
                                            <h5>Tambah Alamat</h5>
                                        </div>
                                    </div>                                    
                                    <ColoredLine color='#00000040' />
                                    <div className="form-alamat">
                                        <form>
                                            <div className="row col-12">
                                                <div className="row mt-3">
                                                <div className="col-2">
                                                        <label>Nama Penerima :</label>
                                                    </div>
                                                    <div className="col-9 mb-3">
                                                        <input type="text"></input>
                                                    </div>
                                                    <div className="col-2">
                                                        <label>No Handphone :</label>
                                                    </div>
                                                    <div className="col-9 mb-3">
                                                        <input type="text"></input>
                                                    </div>
                                                    <div className="col-2">
                                                        <label>Alamat Lengkap :</label>
                                                    </div>
                                                    <div className="col-9">
                                                        <textarea cols={97} rows={10} className="alamat" />
                                                    </div>
                                                </div>
                                            <div className="button-change-biodata d-flex justify-content-end col-11">
                                                    <button>Tambah Alamat</button>
                                            </div>
                                            </div>
                                        </form>
                                    </div>
                                    <ColoredLine color='#00000040' />                                                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Alamat;