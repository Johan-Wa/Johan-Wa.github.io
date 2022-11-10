import React, {Component} from "react";
import '../assets/css/footer.css'

class Foot extends Component {
    render(){
        return(
            <div className="foot-content">
                <h2>No dudes en contactarme</h2>
                <div className="contact">
                    <div>
                        <h3>Correos</h3>
                        <p>johandavidgp@gmail.com</p>
                        <p>johandavidgp@gmail.com</p>
                    </div>
                    <div>
                        <h3>Telefono</h3>
                        <p>
                            (+57) 3507475680
                        </p>
                    </div>
                    <div>
                        <h3>
                            Ciudad
                        </h3>
                        <p>Cali, Colombia</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Foot;