import { useEffect, useState } from "react";
import banner from "../../assets/banner-kasir.png";
import axios from "axios";
import DataTable from "react-data-table-component";
import { toast, ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button, Form } from "react-bootstrap";

function Product() {
    const [product, setProduct] = useState([]);
    const [getCategory, setGetCategory] = useState([]);
    const [getSupplier, setGetSupplier] = useState([]);
    const [validation, setValidation] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [currentID, setCurrentID] = useState();

    const [productImage, setProductImage] = useState('');
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [supplier, setSupplier] = useState('');

    useEffect(() => {
        axios.get(process.env.REACT_APP_API + "/webmin/product")
            .then((res) => {
                setProduct(res.data);
            }).catch((error) => {});
        axios.get(process.env.REACT_APP_API + "/webmin/product/create")
            .then((res) => {
                setGetCategory(res.data.category);
                setGetSupplier(res.data.supplier);
            }).catch((error) => {});
    }, []);

    const productHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('product_image', productImage);
        formData.append('product_name', productName);
        formData.append('description', description);
        formData.append('category_id', category);
        formData.append('supplier_id', supplier);

        if(editMode == false) {
            await axios.post(process.env.REACT_APP_API + "/webmin/product/store", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            })
            .then((res) => {
                notifySuccess("Berhasil menambahkan produk");
                setProductImage('');
                setProductName('');
                setDescription('');
                setCategory('');
                setSupplier('');
            }).catch((error) => {
                setValidation(error.response.data);
                notifyFailed("Gagal menambahkan produk");
            });
        } else if(editMode == true) {
            await axios.put(process.env.REACT_APP_API + "/webmin/product/update/" + currentID, {
                product_image: productImage,
                product_name: productName,
                description: description,
                category_id: category,
                supplier_id: supplier
            })
            .then((res) => {
                notifySuccess("Berhasil mengedit produk");
                setEditMode(false);
                setProductImage('');
                setProductName('');
                setDescription('');
                setCategory('');
                setSupplier('');
            }).catch((error) => {
                setValidation(error.response.data);
                notifyFailed("Gagal mengedit produk");
            });
        }
    };

    const editProduct = async (id) => {
        setEditMode(true);
        setCurrentID(id);

        await axios.get(process.env.REACT_APP_API + '/webmin/product/edit/' + id)
        .then((res) => {
            console.log(res);
            setProductName(res.data.product_name);
            setDescription(res.data.description);
            setCategory(res.data.category_id);
            setSupplier(res.data.supplier_id);
        }).catch((error) => {});
    };

    const deleteProduct = async (id) => {
        await axios.delete(process.env.REACT_APP_API + '/webmin/product/destroy/' + id)
        .then((res) => {
            notifySuccess("Berhasil menghapus produk");
        }).catch((error) => {
            notifyFailed("Gagal menghapus produk");
        });
    }

    const closeEditMode = () => {
        setProductImage('');
        setProductName('');
        setDescription('');
        setCategory('');
        setSupplier('');
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
            name: 'Foto Produk',
            selector: row => 
            <div>
                <img src={row.product_image} width="120" alt={row.product_name}></img>
            </div>
        },
        {
            name: 'Nama Produk',
            selector: row => row.product_name,
            sortable: true,
        },
        {
            name: 'Kategori',
            selector: row => row.category,
            sortable: true,
        },
        {
            name: '#',
            selector: row => 
            <div>
                <Button variant="warning" onClick={() => editProduct(row.no_product)}><FontAwesomeIcon icon={faPencil} /></Button>
                <Button className="ms-2" variant="danger" onClick={() => deleteProduct(row.no_product)}><FontAwesomeIcon icon={faTrash} /></Button>
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
                                <h1>Produk Wikrama shop</h1>
                                <p>Melayani Dengan Sepenuh Hati</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end banner */}
            </section>
            {/* product */}
            <section className="small-section">
                <div className="container">
                    <form onSubmit={productHandler}>
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="input-kasir">
                                    <span>Nama Produk</span>
                                    <input className="form-control" type="text" placeholder="Nama Produk*" value={productName} onChange={(e) => setProductName(e.target.value)}></input>
                                    {
                                        validation.product_name && 
                                        (
                                            <div className="validation-error mt-1">
                                                {validation.product_name}
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="input-kasir">
                                    <span>Gambar Produk</span>
                                    <input type="file" className="form-control" onChange={(e) => setProductImage(e.target.files[0])} accept="image/*"></input>
                                    {
                                        validation.product_image && 
                                        (
                                            <div className="validation-error mt-1">
                                                {validation.product_image}
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="input-kasir">
                                    <span>Kategori</span>
                                    <Form.Select onChange={(e) => setCategory(e.target.value)}>
                                        <option hidden>== Pilih Kategori ==</option>
                                        {
                                            getCategory.map(function(c) {
                                                return (
                                                    (c.id == category) ?
                                                    <option key={c.id} value={c.id} selected>{c.category}</option>
                                                    :
                                                    <option key={c.id} value={c.id}>{c.category}</option>
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
                            <div className="col-lg-3">
                                <div className="input-kasir">
                                    <span>Supplier</span>
                                    <Form.Select onChange={(e) => setSupplier(e.target.value)}>
                                        <option hidden>== Pilih Supplier ==</option>
                                        {
                                            getSupplier.map(function(s) {
                                                return (
                                                    (s.id == supplier) ?
                                                    <option key={s.id} value={s.id} selected>{s.name}</option>
                                                    :
                                                    <option key={s.id} value={s.id}>{s.name}</option>
                                                )
                                            })
                                        }
                                    </Form.Select>
                                    {
                                        validation.supplier_id && 
                                        (
                                            <div className="validation-error mt-1">
                                                {validation.supplier_id}
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="input-kasir mt-2">
                                    <span>Deskripsi</span>
                                    <textarea className="form-control" placeholder="Deskripsi*" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                                    {
                                        validation.description && 
                                        (
                                            <div className="validation-error mt-1">
                                                {validation.description}
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
                        </div>
                    </form>
                </div>
            </section>
            {/* end product */}
            {/* table */}
            <DataTable columns={columns} data={product} pagination />
            {/* end table */}
        </>
    )
}

export default Product;