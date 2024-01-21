import React from "react";
import Navbar from "../../components/navbar/navbar";
import { useTranslation } from "react-i18next";

function Landing() {
    const { t } = useTranslation();

    return (
        <div className="h-screen">
            <Navbar />
            <div
                className="relative overflow-hidden bg-cover bg-no-repeat h-full w-full text-center bg-landing m-auto object-none object-center">
                <div
                    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
                    style={{backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
                    <div className="flex h-full items-center justify-center">
                        <div className="text-white">
                            <h2 className="mb-4 text-4xl font-semibold">{t('welcome')}</h2>
                            <h4 className="mb-6 text-xl font-semibold">{t('message')}</h4>
                            <div className="space-x-5">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Landing;