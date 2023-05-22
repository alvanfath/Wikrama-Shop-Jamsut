import banner from "../../assets/banner-kasir.png";
import Select from 'react-select'
import Table from 'react-bootstrap/Table';

const options = [
    { value: '100 gram', label: '100 gram' },
    { value: '200 gram', label: '200 gram' },
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
                                <span>Nama Produk</span>
                                <input className="form-control"></input>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="input-kasir">
                                <span>Gambar Produk</span>
                                <input type="file" className="form-control"></input>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="input-kasir">
                                <span>Deskripsi</span>
                                <textarea className="form-control" type="date"></textarea>
                            </div>
                        </div>
                        
                        <div className="col-lg-3">
                            <div className="input-kasir">
                                <span>Pilih Kategori</span>
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
                                <span>Stock</span>
                                <input className="form-control" type="number"></input>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="input-kasir">
                                <span>Harga</span>
                                <input className="form-control" type="text"></input>
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


        </>
    )
}

export default Product;