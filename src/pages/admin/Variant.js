import { useEffect, useState } from "react";
import banner from "../../assets/banner-kasir.png";
import axios from "axios";
import DataTable from "react-data-table-component";
import { toast, ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button, Form } from "react-bootstrap";

function Variant() {
    const [variant, setVariant] = useState([]);
    const [getProduct, setGetProduct] = useState([]);
    const [product, setProduct] = useState('');
    const [validation, setValidation] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [currentID, setCurrentID] = useState();

    const [variantImage, setVariantImage] = useState('');
    const [variantName, setVariantName] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');

    useEffect(() => {
        axios.get(process.env.REACT_APP_API + "/webmin/product")
            .then((res) => {
                setGetProduct(res.data);
            }).catch((error) => {});
        
        if(product) {
            axios.get(process.env.REACT_APP_API + "/webmin/product/variant/" + product)
                .then((res) => {
                    setVariant(res.data);
                }).catch((error) => {});
            
        }
    }, [product]);

    const variantHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('variant_image', variantImage);
        formData.append('variant_name', variantName);
        formData.append('price', price);
        formData.append('stock', stock);
        formData.append('product_code', product);

        if(editMode == false) {
            await axios.post(process.env.REACT_APP_API + "/webmin/product/variant/" + product + "/store", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            })
            .then((res) => {
                notifySuccess("Berhasil menambahkan varian");
                setVariantImage('');
                setVariantName('');
                setPrice('');
                setStock('');
            }).catch((error) => {
                setValidation(error.response.data);
                notifyFailed("Gagal menambahkan varian");
            });
        } else if(editMode == true) {
            await axios.put(process.env.REACT_APP_API + '/webmin/product/variant/' + product + '/' + currentID + '/update', {
                variant_image: variantImage,
                variant_name: variantName,
                price: price,
                stock: stock,
            })
            .then((res) => {
                notifySuccess("Berhasil mengedit varian");
                setEditMode(false);
                setVariantImage('');
                setVariantName('');
                setPrice('');
                setStock('');
            }).catch((error) => {
                setValidation(error.response.data);
                notifyFailed("Gagal mengedit varian");
            });
        }
    };

    const editVariant = async (id) => {
        setEditMode(true);
        setCurrentID(id);

        await axios.get(process.env.REACT_APP_API + '/webmin/product/variant/' + product + '/' + id + '/edit')
        .then((res) => {
            setVariantName(res.data.data.variant_name);
            setPrice(res.data.data.price);
            setStock(res.data.data.stock);
        }).catch((error) => {});
    };

    const deleteVariant = async (id) => {
        await axios.delete(process.env.REACT_APP_API + '/webmin/product/variant/' + product + '/' + id + '/destroy')
        .then((res) => {
            notifySuccess("Berhasil menghapus produk");
        }).catch((error) => {
            notifyFailed("Gagal menghapus produk");
        });
    }

    const closeEditMode = () => {
        setVariantImage('');
        setVariantName('');
        setPrice('');
        setStock('');
        setEditMode(false);
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

    const columns = [
        {
            name: 'Nama Varian',
            selector: row => row.variant_name,
            sortable: true,
        },
        {
            name: 'Harga',
            selector: row => row.price,
            sortable: true,
        },
        {
            name: 'Stok',
            selector: row => row.stock,
            sortable: true,
        },
        {
            name: '#',
            selector: row =>
            <div>
                <Button variant="warning" onClick={() => editVariant(row.no_variant)}><FontAwesomeIcon icon={faPencil} /></Button>
                <Button className="ms-2" variant="danger" onClick={() => deleteVariant(row.no_variant)}><FontAwesomeIcon icon={faTrash} /></Button>
            </div>
        },
    ];

    return (
        <>
            <ToastContainer />
            <section>
                {/* banner */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={banner} className="d-block w-100" alt="Wikrama Shop" />
                        <div className="container-fluid">
                            <div className="col-6 carousel-caption">
                                <h1>Vaarian Wikrama shop</h1>
                                <p>Melayani Dengan Sepenuh Hati</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end banner */}
            </section>
            {/* variant */}
            <section className="small-section">
                <div className="container">
                    <form onSubmit={variantHandler}>
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="input-kasir">
                                    <span>Produk</span>
                                    <Form.Select onChange={
                                        e => {
                                            setProduct(e.target.value);
                                            setVariantImage('');
                                            setVariantName('');
                                            setPrice('');
                                            setStock('');
                                            setEditMode(false);
                                        }
                                        }>
                                        <option hidden>== Pilih Produk ==</option>
                                        {
                                            getProduct.map(function(p) {
                                                return (
                                                    <option key={p.id} value={p.no_product}>{p.product_name}</option>
                                                )
                                            })
                                        }
                                    </Form.Select>
                                    {
                                        validation.category_id && 
                                        (
                                            <div className="validation-error mt-1">
                                                {validation.category_id}
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            {
                                product  &&
                                (
                                    <>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="input-kasir">
                                                <span>Nama Varian</span>
                                                <input className="form-control" type="text" placeholder="Nama Varian*" value={variantName} onChange={(e) => setVariantName(e.target.value)}></input>
                                                {
                                                    validation.variant_name && 
                                                    (
                                                        <div className="validation-error mt-1">
                                                            {validation.variant_name}
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="input-kasir">
                                                <span>Gambar Varian</span>
                                                <input type="file" className="form-control" onChange={(e) => setVariantImage(e.target.files[0])} accept="image/*"></input>
                                                {
                                                    validation.variant_image && 
                                                    (
                                                        <div className="validation-error mt-1">
                                                            {validation.variant_image}
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="input-kasir">
                                                <span>Harga</span>
                                                <input className="form-control" type="text" placeholder="Harga*" value={price} onChange={(e) => setPrice(e.target.value)}></input>
                                                {
                                                    validation.price && 
                                                    (
                                                        <div className="validation-error mt-1">
                                                            {validation.price}
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="input-kasir">
                                                <span>Stok</span>
                                                <input className="form-control webmin-qty" type="number" value={stock} onChange={(e) => setStock(e.target.value)}></input>
                                                {
                                                    validation.stock && 
                                                    (
                                                        <div className="validation-error mt-1">
                                                            {validation.stock}
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                        <div className="container mt-3">
                                            {
                                                (editMode == false) ?
                                                <button className="btn btn-success">
                                                    Tambah
                                                </button>
                                                :
                                                <div>
                                                    <button className="btn btn-warning">
                                                        Edit
                                                    </button>
                                                    <button className="btn btn-danger ms-2" onClick={closeEditMode}>
                                                        Batal Edit
                                                    </button>
                                                </div>
                                            }
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    </form>
                </div>
            </section>
            {/* end variant */}
            {/* table */}
            <DataTable columns={columns} data={variant} pagination />
            {/* end table */}
        </>
    )
}

export default Variant;