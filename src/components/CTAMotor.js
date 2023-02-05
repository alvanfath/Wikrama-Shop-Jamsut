import Motor1 from "../assets/motor1.png"
import Motor2 from "../assets/motor2.png"
const CTAMotor = () => {
    return (
        <section className="small-section">
            <div className="container bg-blue card-cta">
                <div className="row">
                    <div className="col-4">
                        <img src={Motor1}></img>
                    </div>
                    <div className="col-4 text-center txt-cta-motor">
                        <h1>testing</h1>
                        <p>lorem ipsum dolar sit amet</p>
                        <button className="btn-white">Gasken !</button>
                    </div>
                    <div className="col-4 d-flex justify-content-end">
                    <img src={Motor2}></img>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CTAMotor