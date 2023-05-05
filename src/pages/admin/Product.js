import banner from "../../assets/banner-kasir.png";
import Select from 'react-select'
import Table from 'react-bootstrap/Table';

const options = [
    { value: 'Keripik Kaca Pedas', label: 'Keripik Kaca Pedas' },
    { value: 'Susu', label: 'Susu' },
    { value: 'Motor', label: 'Motor' }
]

function Product() {

    return (
        <>
            <section>
                {/* banner */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={banner} className="d-block w-100" alt="Wikrama Shop" />
                        <div className="container-fluid">
                            <div className="col-6 carousel-caption">
                                <h1>Produk Wikrama shop</h1>
                                <p>Melayani Dengan Sepenuh Hati</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end banner */}
            </section>
            {/* kasir */}
            <section className="small-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="input-kasir">
                                <span>No Transaksi</span>
                                <input className="form-control" disabled></input>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="input-kasir">
                                <span>Nama Kasir</span>
                                <input className="form-control"></input>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="input-kasir">
                                <span>Tanggal</span>
                                <input className="form-control" type="date"></input>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="input-kasir">
                                <span>Pilih Produk</span>
                                <Select options={options} />
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="input-kasir">
                                <span>Pilih Varian</span>
                                <Select options={options} />
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="input-kasir">
                                <span>QTY</span>
                                <input className="form-control" type="number"></input>
                            </div>
                        </div>
                        <div className="container mt-3">
                            <button className="btn-solid">Masukan</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* emd kasir */}
            {/* table */}
            <section className="small-section">
                <Table className="text-center" >
                    <thead className="bg-blue text-white">
                        <tr>
                            <th>No</th>
                            <th>Kode Barang</th>
                            <th>Nama Barang</th>
                            <th>Jumlah</th>
                            <th>Harga Satuan</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </section>
            {/* end table */}
            {/* kalkulasi */}
            <section className="small-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="kalkulasi-kasir">
                                <h5>Sub Total : </h5>
                                <h5>Diskon : </h5>
                                <h5>Total : </h5>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-end">
                            <div className="kalkulasi-kasir">
                                <label>Tunai </label><input className="" type="number" placeholder="Rp"></input>
                                <h5>Kembalian : </h5>
                                <button className="btn-solid mt-2">Cetak Struk</button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* end kalkulasi */}

        </>
    )
}

export default Product;