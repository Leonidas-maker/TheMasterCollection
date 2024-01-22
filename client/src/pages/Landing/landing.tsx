import React from "react";
import Navbar from "../../components/navbar/navbar";
import { useTranslation } from "react-i18next";
import { Footer } from "../../components/footer";
import { CarouselProducts } from "../../components/carousel";

function Landing() {
    const { t } = useTranslation();

    return (
        <div className="h-screen dark:bg-gray-500">
            <Navbar />
            <CarouselProducts />
            <Footer />
        </div>
    );
}

export default Landing;