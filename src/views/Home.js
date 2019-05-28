import React from 'react';
import Navbar from "./Navbar";
import '.././App.scss';
import Logo from "../img/logo.png";

function Home() {
  return (
    <div className="container">
        <div className="header">
            <img className="logo" src={Logo} alt="Tilta attēls" />
        </div>
        <div className="body">    
            Sadaļā "Karte" ir iespējams apskatīt visu izgaismoto tiltu izvietojumu.<br/> <br/>
            Sadaļā "Tilti" atradīsi informāciju par katru no tiltiem.<br/> <br/>
            Sadaļā "Programma" vari aplūkot pilnu svētku programmu ar visiem paredzētajiem pasākumiem un notikumiem.
        </div>
        <Navbar />
        {/* <div className="buttons">
            <Link to="/map">
                <button className="button button--blue">Kur es atrodos</button>
            </Link>
            <Link to="/bridges">
                <button className="button button--black">Skatīt visus tiltus</button>
            </Link>
        </div> */}
    </div>
  );
}

export default Home;
