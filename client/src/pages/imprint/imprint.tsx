import React from "react";
import { Footer } from "../../components/footer";
import { useTranslation } from "react-i18next";
import NavbarSubpages from "../../components/navbar/navbarSubpages";

function Imprint() {
    const { t } = useTranslation();

    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen flex flex-col">
            <NavbarSubpages />
            <div className="flex-grow flex flex-col justify-center items-center">
                <h1 className="lg:text-6xl text-4xl font-bold mb-14 dark:text-gray-300 text-black mt-5">{t('imprint.imprint')}</h1>
                <div className="rounded-3xl shadow-lg p-6 bg-gray-300 dark:bg-gray-800 text-center text-black dark:text-gray-300 lg:text-2xl text-md font-bold lg:w-auto w-2/3 mx-auto">
                    <p>
                        Leon Sylvester
                    </p>
                    <p>
                        Mainzer Landstraße 231
                    </p>
                    <p>
                        60326 Frankfurt am Main
                    </p>
                    <p>
                        support@theshopmaster.de
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Imprint;
