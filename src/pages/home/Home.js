import CardKategori from "../../components/CardKategori";
import CTAMotor from "../../components/CTAMotor";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NavigationBar from "../../components/NavigationBar";
import ProdukLainnya from "../../components/ProdukLainnya";
import RekomendasiProduk from "../../components/RekomendasiProduk";
import '../../style/custom.css';

const Home = () => {
    return (
        <>
            <NavigationBar />
            <Header />
            <RekomendasiProduk />
            <CardKategori />
            <CTAMotor />
            <ProdukLainnya />
            <Footer />
        </>
    )
}

export default Home;