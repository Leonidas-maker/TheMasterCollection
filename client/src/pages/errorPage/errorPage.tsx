import React from "react";
import NavbarSubpages from "../../components/navbar/navbarSubpages";
import { Footer } from "../../components/footer";

function ErrorPage() {
    return (
        <div className="text-2xl text-yellow-400">
            <NavbarSubpages />
            <h1>418</h1>
            <Footer />
        </div>
    );
}

export default ErrorPage;