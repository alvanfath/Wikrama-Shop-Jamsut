import { Outlet, useLocation } from 'react-router-dom';
import NavWebmin from '../../components/NavWebmin';
import ChartBanner from '../../assets/bigger-chart-banner.png';
import '../../style/webmin.css';

function Webmin() {
    const location = useLocation();

    return (
        <>
            <NavWebmin />
            <div className="webmin-wrapper">
                <div className="webmin-content">
                    {
                        location.pathname === "/webmin" && 
                        (
                            <div className="webmin-banner">
                                <div className="webmin-banner-text">
                                    <h2>Halo Admin!</h2>
                                    <p>Ada keperluan apa hari<br /> ini ?</p>
                                </div>
                                <img src={ChartBanner} alt="Banner" />
                            </div>
                        )
                    }
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Webmin;