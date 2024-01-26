import React from "react";
import NavbarSubpages from "../../components/navbar/navbarSubpages";
import { Footer } from "../../components/footer";

function About() {
    return (
        <div className="text-2xl test-black">
            <NavbarSubpages />
            <h1>Welcome to About Us</h1>
            <Footer />
        </div>
    );
}

export default About;