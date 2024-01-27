import React from "react";
import { Footer } from "../../components/footer";
import { useTranslation } from "react-i18next";
import NavbarSubpages from "../../components/navbar/navbarSubpages";

function Credits() {
    const { t } = useTranslation();

    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen flex flex-col">
            <NavbarSubpages />
            <div className="flex-grow flex flex-col justify-center items-center">
                <h1 className="lg:text-6xl text-4xl font-bold mb-14 dark:text-gray-300 text-black mt-5">{t('credits.credits')}</h1>
                <div className="rounded-3xl shadow-lg p-6 bg-gray-300 dark:bg-gray-800 text-center text-black dark:text-gray-300 lg:text-2xl text-md font-bold lg:w-1/3 w-2/3 mx-auto">
                    <h2 className="lg:text-3xl text-xl mb-5">
                        {t('credits.components')}
                    </h2>
                    <a href="https://www.material-tailwind.com" className="underline">
                        {t('credits.componentsText')}
                    </a>
                    <h2 className="lg:text-3xl text-xl my-5">
                        {t('credits.icons')}
                    </h2>
                    <a href="https://www.tailwindtoolbox.com/icons" className="underline">
                        {t('credits.iconsText')}
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Credits;
