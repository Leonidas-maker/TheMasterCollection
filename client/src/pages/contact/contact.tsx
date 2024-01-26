import React from "react";
import { Footer } from "../../components/footer";
import { useTranslation } from "react-i18next";
import NavbarSubpages from "../../components/navbar/navbarSubpages";

function Contact() {
    //! Add function to send a mail to us
    const { t } = useTranslation();

    return (
        <div className="bg-white dark:bg-gray-900">
            <NavbarSubpages />
            <div className="py-8 lg:py-16 px-4 mx-auto w-2/5">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">{t('contact.contact')}</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">{t('contact.text')}</p>
                <form action="#" className="space-y-8">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{t('contact.yourmessage')}</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder={t('contact.placemail')} required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{t('contact.subject')}</label>
                        <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder={t('contact.placesubject')} required />
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">{t('contact.message')}</label>
                        <textarea id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder={t('contact.placemessage')}></textarea>
                    </div>
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-700 sm:w-fit hover:bg-green-800 focus:ring-4 focus:outline-none dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 active:bg-green-500 dark:active:bg-green-500">{t('contact.send')}</button>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;