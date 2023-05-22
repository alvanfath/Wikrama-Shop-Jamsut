import banner from "../../assets/banner-kasir.png";
import Select from 'react-select'
import Table from 'react-bootstrap/Table';
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const productOptions = [
    { value: 'Keripik Kaca Pedas', label: 'Keripik Kaca Pedas' },
    { value: 'Susu', label: 'Susu' },
    { value: 'Motor', label: 'Motor' }
]

const variantOptions = [
    { value: 'Keripik Kaca Pedas', label: 'Keripik Kaca Pedas' },
    { value: 'Susu', label: 'Susu' },
    { value: 'Motor', label: 'Motor' }
]

function Kasir() {
    const navigate = useNavigate();
    const token = localStorage.getItem('webmin_token');
    const [cart, setCart] = useState([]);
    const [validation, setValidation] = useState([]);

    const [transactionNumber, setTransactionNumber] = useState('');
    const [user, setUser] = useState('');
    const [product, setProduct] = useState('');
    const [variant, setVariant] = useState('');
    const [quantity, setQuantity] = useState('');

    const confirmPaymentHandler = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('nomor_transaksi', transactionNumber);
        formData.append('user_id', user);
        formData.append('product_code', product);
        formData.append('variant_code', variant);
        formData.append('quantity', quantity);
        formData.append('total_price', quantity);
        
        await axios.post(process.env.REACT_APP_API + "/webmin/transaction/store", formData)
        .then((res) => {
            // if(res.data.error) {
            //     notifyMustVerified(res.data.error);
            // } else {
            //     localStorage.setItem('token', res.data.access_token);
            //     navigate('/');
            // }
        }).catch((error) => {
            setValidation(error.response.data);
        });
    }

    const getVariant = async (code) => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await axios.get(process.env.REACT_APP_API + '/webmin/transaction/get-variant/' + code)
            .then((res) => {
                
            }).catch((error) => {
                if(error.response) {

                }
            });
    }

    const fetchUser = async () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await axios.get(process.env.REACT_APP_API + '/webmin/my-profile')
            .then((res) => {
                setUser(res.data);
            }).catch((error) => {
                if (error.response) {
                    localStorage.removeItem('webmin_token');
                    navigate('/webmin/login', {
                        state: 'Sesi login berakhir, silahkan login kembali'
                    });
                }
            });
    }

    const notifySuccess = async (message) => {
        toast.error(message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: "colored",
        });
    }

    const notifyFailed = async (message) => {
        toast.error(message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: "colored",
        });
    }

    useEffect(() => {
        if (token) {
            fetchUser();
        } else {
            navigate('/webmin/login');
        }
    }, []);

    return (
        <>
            <section>
                {/* banner */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={banner} className="d-block w-100" alt="Wikrama Shop" />
                        <div className="container-fluid">
                            <div className="col-5 carousel-caption">
                                <h1>Kasir Wikrama Shop</h1>
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
                    <form onSubmit={confirmPaymentHandler}>
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="input-kasir">
                                    <span>No Transaksi</span>
                                    <input className="form-control disabled" disabled></input>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="input-kasir">
                                    <span>Nama Kasir</span>
                                    <input className="form-control" value={user.name} disabled></input>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="input-kasir">
                                    <span>Tanggal</span>
                                    <input className="form-control" type="date" defaultValue={new Date().toISOString().substring(0, 10)}></input>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="input-kasir">
                                    <span>Pilih Produk</span>
                                    <Select className="mt-1" options={productOptions} onChange={(productOptions) => getVariant(productOptions.value)} />
                                    {
                                        validation.product_code && 
                                        (
                                            <div className="validation-error mt-1">
                                                {validation.product_code}
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="input-kasir">
                                    <span>Pilih Varian</span>
                                    <Select className="mt-1" options={variantOptions} onChange={(variantOptions) => setVariant(variantOptions.value)} />
                                    {
                                        validation.variant_code && 
                                        (
                                            <div className="validation-error mt-1">
                                                {validation.variant_code}
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="input-kasir">
                                    <span>QTY</span>
                                    <input className="form-control webmin-qty" type="number" min={1} value={quantity} onChange={(e) => setQuantity(e.target.value)}></input>
                                    {
                                        validation.quantity && 
                                        (
                                            <div className="validation-error mt-1">
                                                {validation.quantity}
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="container mt-3">
                                <button className="btn-solid">Masukan</button>
                            </div>                       
                        </div>
                    </form>
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

export default Kasir;