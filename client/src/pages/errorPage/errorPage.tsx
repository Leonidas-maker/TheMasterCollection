import React from "react";
import Navbar from "../../components/navbar/navbar";
import { Footer } from "../../components/footer";
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';

function ErrorPage() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const handleClick = () => navigate("/");

    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow flex justify-center items-center">
                <div className="text-center text-black dark:text-gray-300 text-2xl font-bold">
                    <p>{t('error.error')}</p>
                    <p>{t('error.code')}</p>
                    <br />
                    <button onClick={handleClick} className="py-3 px-5 text-sm font-medium text-white rounded-lg bg-green-700 sm:w-fit hover:bg-green-800 focus:ring-4 focus:outline-none dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 active:bg-green-500 dark:active:bg-green-500">
                        {t('error.button')}
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ErrorPage;
