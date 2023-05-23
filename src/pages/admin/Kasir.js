import banner from "../../assets/banner-kasir.png";
import axios from "axios";
import Logo from "../../assets/logo.png";
import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Container } from "react-bootstrap";

function Kasir() {
    const [getProduct, setGetProduct] = useState([]);
    const [getVariant, setGetVariant] = useState([]);
    const [validation, setValidation] = useState([]);

    const [product, setProduct] = useState('');
    const [variant, setVariant] = useState('');
    const [quantity, setQuantity] = useState('');
    
    // console.log(getProduct);

    useEffect(() => {
        axios.get(process.env.REACT_APP_API + "/webmin/product")
            .then((res) => {
                setGetProduct(res.data);
            }).catch((error) => {});
        if(product) {
            axios.get(process.env.REACT_APP_API + "/webmin/product/variant/" + product)
                .then((res) => {
                    setGetVariant(res.data);
                }).catch((error) => {});
        }
    }, [product]);

    const cashierHandler = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('product_code', product);
        formData.append('variant_code', variant);
        formData.append('quantity', quantity);
        
        await axios.post(process.env.REACT_APP_API + "/webmin/transaction/store", formData)
        .then((res) => {
            notifySuccess("Berhasil melakukan transaksi");
        }).catch((error) => {
            console.log(error);
            setValidation(error.response.data);
            notifyFailed("Gagal melakukan transaksi");
        });
    }

    const notifySuccess = async (message) => {
        toast.success(message, {
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

    return (
        <>
            <ToastContainer />
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
                    <form onSubmit={cashierHandler}>
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="input-kasir">
                                    <span>Produk</span>
                                    <Form.Select onChange={(e) => setProduct(e.target.value)}>
                                        <option hidden>== Pilih Produk ==</option>
                                        {
                                            getProduct.map(function(p) {
                                                return (
                                                    <option key={p.no_product} value={p.no_product}>{p.product_name}</option>
                                                )
                                            })
                                        }
                                    </Form.Select>
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
                            {
                                product &&
                                (
                                    <>
                                        <div className="col-lg-3">
                                            <div className="input-kasir">
                                                <span>Varian</span>
                                                <Form.Select onChange={(e) => setVariant(e.target.value)}>
                                                    <option hidden>== Pilih Varian ==</option>
                                                    {
                                                        getVariant.map(function(v) {
                                                            return (
                                                                <option key={v.no_variant} value={v.no_variant}>{v.variant_name} | {v.stock} Stock</option>
                                                            )
                                                        })
                                                    }
                                                </Form.Select>
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
                                            <button className="btn-solid">Submit</button>
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    </form>
                </div>
            </section>
            {/* end kasir */}
            {/* table */}
            <div className="d-flex justify-content-center">
                <div className="background-stroke">
                    <Container fluid className="webmin-navbar-container">
                        <img className="webmin-logo me-3" src={Logo} alt="Wikrama Shop" />
                        <h5 className="mb-0 mt-2"><b>Wikrama Shop</b></h5>
                        <div className="line-stroke mt-3"></div>
                        <div className="d-flex justify-content-between mt-2">
                            <p className="text-start">aaaaaa</p>
                            <p className="text-end">Rp. aaaaa</p>
                        </div>
                        <div className="line-stroke mt-5"></div>
                        <div className="d-flex justify-content-between mt-2">
                            <p className="text-start"><b>Total</b></p>
                            <p className="text-end"><b>Rp. aaaaa</b></p>
                        </div>
                    </Container>
                </div>
            </div>
            <div className="container mt-3 text-end">
                <button className="btn-solid">Cetak Struk</button>
            </div>
            {/* end table */}
            {/* kalkulasi */}
            {/* <section className="small-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="kalkulasi-kasir">
                                <h5>Sub Total : </h5>
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
            </section> */}
            {/* end kalkulasi */}

        </>
    )
}

export default Kasir;