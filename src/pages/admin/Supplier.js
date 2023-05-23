import { useEffect, useState } from "react";
import banner from "../../assets/banner-kasir.png";
import DataTable from "react-data-table-component";
import axios from "axios";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-toastify";

function Supplier() {
    const [supplier, setSupplier] = useState([]);
    const [validation, setValidation] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [currentID, setCurrentID] = useState();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    useEffect(() => {
        axios.get(process.env.REACT_APP_API + "/webmin/supplier")
            .then((res) => {
                setSupplier(res.data);
            }).catch((error) => {});
    }, []);

    const supplierHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone_number', phoneNumber);

        if(editMode == false) {
            await axios.post(process.env.REACT_APP_API + "/webmin/supplier/store", formData)
            .then((res) => {
                notifySuccess(res.data.message);
                setName('');
                setEmail('');
                setPhoneNumber('');
            }).catch((error) => {
                setValidation(error.response.data);
                notifyFailed("Gagal menambahkan supplier");
            });
        } else if(editMode == true) {
            await axios.put(process.env.REACT_APP_API + "/webmin/supplier/update/" + currentID, {
                name: name,
                email: email,
                phone_number: phoneNumber
            })
            .then((res) => {
                notifySuccess(res.data.message);
                setEditMode(false);
                setName('');
                setEmail('');
                setPhoneNumber('');
            }).catch((error) => {
                setValidation(error.response.data);
                notifyFailed("Gagal mengedit supplier");
            });
        }
    };

    const editSupplier = async (id) => {
        setEditMode(true);
        setCurrentID(id);

        await axios.get(process.env.REACT_APP_API + '/webmin/supplier/edit/' + id)
        .then((res) => {
            setName(res.data.name);
            setEmail(res.data.email);
            setPhoneNumber(res.data.phone_number);
        }).catch((error) => {});
    };

    const deleteSupplier = async (id) => {
        await axios.delete(process.env.REACT_APP_API + '/webmin/supplier/destroy/' + id)
        .then((res) => {
            notifySuccess(res.data.message);
        }).catch((error) => {
            notifyFailed("Gagal menghapus supplier");
        });
    }

    const closeEditMode = () => {
        setName('');
        setEmail('');
        setPhoneNumber('');
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
            name: 'Nama Supplier',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Email Supplier',
            selector: row => row.email,
            sortable: true,
        },
        {
            name: 'Nomor Telepon',
            selector: row => row.phone_number,
            sortable: true,
        },
        {
            name: '#',
            selector: row => 
            <div>
                <Button variant="warning" onClick={() => editSupplier(row.id)}><FontAwesomeIcon icon={faPencil} /></Button>
                <Button className="ms-2" variant="danger" onClick={() => deleteSupplier(row.id)}><FontAwesomeIcon icon={faTrash} /></Button>
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
                            <div className="col-5 carousel-caption">
                                <h1>Supplier Wikrama Shop</h1>
                                <p>Melayani Dengan Sepenuh Hati</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end banner */}
            </section>
            {/* supplier */}
            <section className="small-section">
                <div className="container">
                    <form onSubmit={supplierHandler}>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="input-kasir">
                                    <span>Nama Supplier</span>
                                    <input className="form-control" type="text" placeholder="Nama Supplier*" value={name} onChange={(e) => setName(e.target.value)}></input>
                                    {
                                        validation.name && 
                                        (
                                            <div className="validation-error mt-1">
                                                {validation.name}
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="input-kasir">
                                    <span>Email Supplier</span>
                                    <input className="form-control" type="email" placeholder="Email Supplier*" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                                    {
                                        validation.email && 
                                        (
                                            <div className="validation-error mt-1">
                                                {validation.email}
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="input-kasir">
                                    <span>Nomor Telepon</span>
                                    <input className="form-control" type="text" placeholder="Nomor Telepon*" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}></input>
                                    {
                                        validation.phone_number && 
                                        (
                                            <div className="validation-error mt-1">
                                                {validation.phone_number}
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
            {/* end supplier */}
            {/* table */}
            <DataTable columns={columns} data={supplier} pagination />
            {/* end table */}
        </>
    )
}

export default Supplier;