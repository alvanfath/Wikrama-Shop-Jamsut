import NavProfil from "../../components/NavProfil";
import Footer from "../../components/Footer";
import FTProfil from "../../assets/ftprofil.jpg";
import SidebarProfil from "../../components/SidebarProfil";

function Profil() {
    return (
        <>
            <NavProfil />
            {/* sidebar profil */}
            <section className="small-section">
                <div className="container">
                    <div className="row">
                        <SidebarProfil />
                        <div className="content-profil col-9">
                            <h4>Hallo !</h4>
                            <div className="profil col-12">
                                <div className="note-profil col-12">
                                    <h6>Profil Saya</h6>
                                    <p>
                                        Kelola informasi profil Anda untuk mengontrol, melindungi dan mengamankan akun.
                                    </p>
                                    <div className="row">
                                        <div className="image-profil col-4">
                                            <div className="col-12">
                                                <div className="image-user d-flex justify-content-center">
                                                    <img src={FTProfil}></img>
                                                </div>
                                                {/* Button Change Img */}
                                                <div className="button-change-img d-flex justify-content-center">
                                                    <button>Ubah Foto</button>
                                                </div>
                                                <div className="note-image-profil">
                                                    <p>Ukuran gambar: maks. 1 MB Format gambar: JPEG, PNG, dan JPG</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-biodata col-6">
                                            <div className="form-profil">
                                                <h6 className="mb-4">Ubah Biodata Diri</h6>
                                                <form className="form-biodata">
                                                    <div className="row mt-3">
                                                        <div className="col-4">
                                                            <label>Username</label>
                                                        </div>
                                                        <div className="col-8">
                                                            <input type="text" className="form-control"></input>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-3">
                                                        <div className="col-4">
                                                            <label>Nama</label>
                                                        </div>
                                                        <div className="col-8">
                                                            <input type="text" className="form-control"></input>
                                                        </div>
                                                    </div>
                                                    <h6 className="mt-4 mb-4">Ubah Kontak</h6>
                                                    <div className="row mt-3">
                                                        <div className="col-4">
                                                            <label>Email</label>
                                                        </div>
                                                        <div className="col">
                                                            <input type="email" className="form-control hide" placeholder="email@gmail.com" readOnly></input>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-3">
                                                        <div className="col-4">
                                                            <label>Nomor Hp</label>
                                                        </div>
                                                        <div className="col">
                                                            <input type="text" className="form-control hide" placeholder="089516622123" readOnly></input>                                                        
                                                        </div>
                                                    </div>
                                                    <div className="button-change-biodata d-flex justify-content-end">
                                                    <button>Simpan</button>
                                                </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
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

export default Profil;