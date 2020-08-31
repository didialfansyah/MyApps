import React from 'react'

import Button2 from '../button2/Button2'
import './card5.css'

const CardFive = () => {
    return (
        <div className="containerT">
            <h2>Past MeetUp</h2>
            <div className="container" style={{width:"90%", background: "none"}}>
                <div className="cardGrid">
                    <div className="first"><h3>31 Agustus 2020</h3></div>
                    <p>Etiam lobortis a tortor non commodo. Praesent lobortis tempus orci sit amet congue.</p>
                    <p>139 <font color="#00b894">Went</font></p>
                    <Button2/>
                </div>
                <div className="cardGrid">
                    <div className="first"><h3>31 Agustus 2020</h3></div>
                    <p>Etiam lobortis a tortor non commodo. Praesent lobortis tempus orci sit amet congue.</p>
                    <p>139 <font color="#00b894">Went</font></p>
                    <Button2/>
                </div>
                <div className="cardGrid">
                    <div className="first"><h3>31 Agustus 2020</h3></div>
                    <p>Etiam lobortis a tortor non commodo. Praesent lobortis tempus orci sit amet congue.</p>
                    <p>139 <font color="#00b894">Went</font></p>
                    <Button2/>
                </div>
            </div>
        </div>
    );
}

export default CardFive