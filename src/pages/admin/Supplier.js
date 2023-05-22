import { useEffect, useState } from "react";
import banner from "../../assets/banner-kasir.png";
import DataTable from "react-data-table-component";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-toastify";

function Supplier() {
    const [modalShow, setModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);
    const [deleteModalShow, setDeleteModalShow] = useState(false);
    const [supplier, setSupplier] = useState();
    const [validation, setValidation] = useState([]);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    // Get Supplier
    useEffect(() => {
        axios.get(process.env.REACT_APP_API + "/webmin/supplier")
            .then((res) => {
                setSupplier(res.data);
            }).catch((error) => {});
    }, [supplier]);

    // Add Supplier
    const addSupplier = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone_number', phoneNumber);

        await axios.post(process.env.REACT_APP_API + "/webmin/supplier/store", formData)
        .then((res) => {
            notifySuccess(res.data.message);
            setName('');
            setEmail('');
            setPhoneNumber('');
            setModalShow(false);
        }).catch((error) => {
            setValidation(error.response.data);
            notifyFailed("Gagal menambahkan supplier");
        });
    };

    // Edit Supplier
    const editSupplier = async (id) => {
        setEditModalShow(true);

        await axios.get(process.env.REACT_APP_API + '/webmin/supplier/edit/' + id)
        .then((res) => {
            setName(res.data.name);
            setEmail(res.data.email);
            setPhoneNumber(res.data.phone_number);
        }).catch((error) => {});

        // Update Supplier
        const updateSupplier = async (e) => {
            e.preventDefault();
    
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('phone_number', phoneNumber);
    
            await axios.post(process.env.REACT_APP_API + "/webmin/supplier/update/" + id, formData)
            .then((res) => {
                notifySuccess(res.data.message);
                setName('');
                setEmail('');
                setPhoneNumber('');
                setEditModalShow(false);
            }).catch((error) => {
                setValidation(error.response.data);
                notifyFailed("Gagal menambahkan supplier");
            });
        };
    };


    // Toast
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
                <Button className="ms-2" variant="danger"><FontAwesomeIcon icon={faTrash} /></Button>
            </div>
        },
    ];

    const closeModal = () => {
        setName('');
        setEmail('');
        setPhoneNumber('');
        setModalShow(false);
        setEditModalShow(false);
        setDeleteModalShow(false);
    };

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
                                <p>Memberikan Peluang UMKM</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end banner */}
            </section>
            {/* kasir */}
            <section className="small-section">
                <div className="container">
                    <div className="container mt-3">
                        <button className="btn-solid" onClick={()=> setModalShow(true)}>Tambah</button>
                    </div>
                    {/* modal add */}
                    <Modal
                        show={modalShow}
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        >
                        <Modal.Header className="justify-content-center">
                            <Modal.Title id="contained-modal-title-vcenter">
                                Tambah Supplier
                            </Modal.Title>
                        </Modal.Header>
                        <form onSubmit={addSupplier}>
                            <Modal.Body>
                                    <div className="input-kasir mb-2">
                                        <span>Nama Supplier</span>
                                        <input className="form-control" placeholder="Nama Supplier*" value={name} onChange={(e) => setName(e.target.value)}></input>
                                        {
                                            validation.name && 
                                            (
                                                <div className="validation-error mt-1">
                                                    {validation.name}
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="input-kasir mb-2">
                                        <span>Email Supplier</span>
                                        <input type="email" className="form-control" placeholder="Email Supplier*" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                                        {
                                            validation.email && 
                                            (
                                                <div className="validation-error mt-1">
                                                    {validation.email}
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="input-kasir">
                                        <span>Nomor Telepon</span>
                                        <input className="form-control number-phone" type="number" placeholder="Nomor Telepon*" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}></input>
                                        {
                                            validation.phone_number && 
                                            (
                                                <div className="validation-error mt-1">
                                                    {validation.phone_number}
                                                </div>
                                            )
                                        }
                                    </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => closeModal()}>Tutup</Button>
                                <Button type="submit" variant="success">Tambah</Button>
                            </Modal.Footer>
                        </form>
                    </Modal>
                    {/* end modal add */}
                    {/* modal edit */}
                    <Modal
                        show={editModalShow}
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        >
                        <Modal.Header className="justify-content-center">
                            <Modal.Title id="contained-modal-title-vcenter">
                                Edit Supplier
                            </Modal.Title>
                        </Modal.Header>
                        <form>
                            <Modal.Body>
                                    <div className="input-kasir mb-2">
                                        <span>Nama Supplier</span>
                                        <input className="form-control" placeholder="Nama Supplier*" value={name} onChange={(e) => setName(e.target.value)}></input>
                                        {
                                            validation.name && 
                                            (
                                                <div className="validation-error mt-1">
                                                    {validation.name}
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="input-kasir mb-2">
                                        <span>Email Supplier</span>
                                        <input type="email" className="form-control" placeholder="Email Supplier*" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                                        {
                                            validation.email && 
                                            (
                                                <div className="validation-error mt-1">
                                                    {validation.email}
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="input-kasir">
                                        <span>Nomor Telepon</span>
                                        <input className="form-control number-phone" type="number" placeholder="Nomor Telepon*" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}></input>
                                        {
                                            validation.phone_number && 
                                            (
                                                <div className="validation-error mt-1">
                                                    {validation.phone_number}
                                                </div>
                                            )
                                        }
                                    </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => closeModal()}>Tutup</Button>
                                <Button type="submit" variant="warning">Edit</Button>
                            </Modal.Footer>
                        </form>
                    </Modal>
                    {/* end modal edit */}
                </div>
            </section>
            {/* emd kasir */}
            {/* table */}
            <DataTable columns={columns} data={supplier} pagination />
            {/* end table */}
        </>
    )
}

export default Supplier;