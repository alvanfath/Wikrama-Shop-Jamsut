import { useEffect, useState } from "react";
import banner from "../../assets/banner-kasir.png";
import axios from "axios";
import DataTable from "react-data-table-component";
import { toast, ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

function Category() {
    const [getCategory, setGetCategory] = useState([]);
    const [validation, setValidation] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [currentID, setCurrentID] = useState();

    const [category, setCategory] = useState('');

    useEffect(() => {
        axios.get(process.env.REACT_APP_API + "/webmin/category")
            .then((res) => {
                setGetCategory(res.data);
            }).catch((error) => {});
    }, []);

    const categoryHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('category', category);

        if(editMode == false) {
            await axios.post(process.env.REACT_APP_API + "/webmin/category/store", formData)
            .then((res) => {
                notifySuccess("Berhasil menambahkan kategori");
                setCategory('');
            }).catch((error) => {
                setValidation(error.response.data);
                notifyFailed("Gagal menambahkan kategori");
            });
        } else if(editMode == true) {
            await axios.put(process.env.REACT_APP_API + "/webmin/category/update/" + currentID, {
                category: category,
            })
            .then((res) => {
                notifySuccess("Berhasil mengedit kategori");
                setEditMode(false);
                setCategory('');
            }).catch((error) => {
                setValidation(error.response.data);
                notifyFailed("Gagal mengedit kategori");
            });
        }
    };

    const editCategory = async (id) => {
        setEditMode(true);
        setCurrentID(id);

        await axios.get(process.env.REACT_APP_API + '/webmin/category/edit/' + id)
        .then((res) => {
            setCategory(res.data.data.category);
        }).catch((error) => {});
    };

    const deleteCategory = async (id) => {
        await axios.delete(process.env.REACT_APP_API + '/webmin/category/destroy/' + id)
        .then((res) => {
            notifySuccess("Berhasil menghapus kategori");
        }).catch((error) => {
            notifyFailed("Gagal menghapus kategori");
        });
    }

    const closeEditMode = () => {
        setCategory('');
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
            name: 'Kode Kategori',
            selector: row => row.no_category,
            sortable: true,
        },
        {
            name: 'Nama Kategori',
            selector: row => row.category,
            sortable: true,
        },
        {
            name: '#',
            selector: row => 
            <div>
                <Button variant="warning" onClick={() => editCategory(row.no_category)}><FontAwesomeIcon icon={faPencil} /></Button>
                <Button className="ms-2" variant="danger" onClick={() => deleteCategory(row.no_category)}><FontAwesomeIcon icon={faTrash} /></Button>
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
                                <h1>Kategori Wikrama shop</h1>
                                <p>Melayani Dengan Sepenuh Hati</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end banner */}
            </section>
            {/* category */}
            <section className="small-section">
                <div className="container">
                    <form onSubmit={categoryHandler}>
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="input-kasir">
                                    <span>Nama Kategori</span>
                                    <input className="form-control" type="text" placeholder="Nama Kategori*" value={category} onChange={(e) => setCategory(e.target.value)}></input>
                                    {
                                        validation.category && 
                                        (
                                            <div className="validation-error mt-1">
                                                {validation.category}
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
            {/* end category */}
            {/* table */}
            <DataTable columns={columns} data={getCategory} pagination />
            {/* end table */}
        </>
    )
}

export default Category;