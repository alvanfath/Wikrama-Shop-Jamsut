import categories from "../assets/categoriesCard.png"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardKategori = () => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    return (
        <section className="small-section">
            <div className="container">
            <div className="col-12">
                    <h1 className="title-text">Kategori</h1>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Slider className="slider-categories d-flex justify-content-start" {...settings}>

                            <div className="card categories position-relative">
                                <img src={categories} class="card-img-top"></img>
                                <div className="carousel-caption text-center txt-card-categories">
                                    <h4 className="text-card-categories">Minuman</h4>
                                    <p className="tag-card-categories">Minuman Sehat Tanpa Pewarna Buatan</p>
                                </div>
                            </div>
                            <div className="card categories position-relative">
                                <img src={categories} class="card-img-top"></img>
                                <div className="carousel-caption text-center txt-card-categories">
                                    <h4 className="text-card-categories">Minuman</h4>
                                    <p className="tag-card-categories">Minuman Sehat Tanpa Pewarna Buatan</p>
                                </div>
                            </div>
                            <div className="card categories position-relative">
                                <img src={categories} class="card-img-top"></img>
                                <div className="carousel-caption text-center txt-card-categories">
                                    <h4 className="text-card-categories">Minuman</h4>
                                    <p className="tag-card-categories">Minuman Sehat Tanpa Pewarna Buatan</p>
                                </div>
                            </div>
                            <div className="card categories position-relative">
                                <img src={categories} class="card-img-top"></img>
                                <div className="carousel-caption text-center txt-card-categories">
                                    <h4 className="text-card-categories">Minuman</h4>
                                    <p className="tag-card-categories">Minuman Sehat Tanpa Pewarna Buatan</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>

    )

}

export default CardKategori