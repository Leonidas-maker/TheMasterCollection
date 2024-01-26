import React from "react";
import NavbarSubpages from "../../components/navbar/navbarSubpages";
import { Footer } from "../../components/footer";

function Imprint() {
    return (
        <div>
            <NavbarSubpages />
            <div className="text-black text-2xl mx-20">
                <h1>Welcome to Imprint</h1>
                <br />
                <p className="text-lg">Leon Sylvester</p>
                <p className="text-lg">Mainzer Landstraße 231</p>
                <p className="text-lg">60326 Frankfurt am Main</p>
                <p className="text-lg">support@theshopmaster.de</p>
            </div>
            <Footer />
        </div>
    );
}

export default Imprint;