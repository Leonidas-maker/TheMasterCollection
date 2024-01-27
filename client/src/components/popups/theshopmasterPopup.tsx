import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter
} from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import { FaApple, FaGooglePlay, FaGlobe, FaGithub, FaGitlab } from 'react-icons/fa';

interface TheShopMasterPopupProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

//! Insert links to download app and to TheShopMaster Homepage
export function TheShopMasterPopup({ open, setOpen }: TheShopMasterPopupProps) {
    const { t } = useTranslation();

    const goToGitHub = () => {
        window.open("https://github.com/Leonidas-maker/TheShopMaster", "_blank");
    };

    const goToGitLab = () => {
        window.open("https://gitlab.com/themastercollection/TheShopMaster", "_blank");
    };

    const goToWebsite = () => {
        window.open("https://themastercollection.de", "_blank");
    };

    const goToAppleStore = () => {
        window.open("https://themastercollection.de", "_blank");
    };

    const goToPlayStore = () => {
        window.open("https://themastercollection.de", "_blank");
    };

    return (
        <>
            <Dialog
                className="bg-white dark:bg-gray-900"
                placeholder={""}
                open={open}
                size={"md"}
                handler={() => setOpen(!open)}
            >
                <DialogHeader placeholder={""} className="text-black dark:text-gray-300">
                    TheShopMaster
                </DialogHeader>
                <DialogBody placeholder={""} className="text-gray-800 dark:text-gray-200">
                    {t('shop.text')}
                    <p>{t('shop.dev')} <a className="underline" href="https://github.com/Schuetze1000" target="_blank" rel="noopener noreferrer">@Schuetze1000</a> | <a className="underline" href="https://github.com/Leonidas-maker" target="_blank" rel="noopener noreferrer">@Leonidas-maker</a> | <a className="underline" href="https://github.com/xxchillkroetexx" target="_blank" rel="noopener noreferrer">@xxchillkroetexx</a> | <a className="underline" href="https://github.com/MrRapGamer" target="_blank" rel="noopener noreferrer">@MrRapGamer</a> | <a className="underline" href="https://github.com/Kasi07" target="_blank" rel="noopener noreferrer">@Kasi07</a> | <a className="underline" href="https://github.com/AmateReysu" target="_blank" rel="noopener noreferrer">@AmateReysu</a></p>
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                        <Button
                            placeholder={""}
                            className="text-white mr-8 hover:opacity-80"
                            style={{ backgroundColor: '#333' }}
                            onClick={goToGitHub}
                        >
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <FaGithub style={{ marginRight: "8px" }} /> GitHub
                            </div>
                        </Button>
                        <Button
                            placeholder={""}
                            className="text-white mr-8 hover:opacity-80"
                            style={{ backgroundColor: '#FC6D26' }}
                            onClick={goToGitLab}
                        >
                           <div style={{ display: "flex", alignItems: "center" }}>
                                <FaGitlab style={{ marginRight: "8px" }} /> GitLab
                            </div>
                        </Button>
                        <Button
                            placeholder={""}
                            className="text-white mr-8 hover:opacity-80"
                            style={{ backgroundColor: '#0A66C2' }}
                            onClick={goToWebsite}
                        >
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <FaGlobe style={{ marginRight: "8px" }} /> {t('button.website')}
                            </div>
                        </Button>
                        <Button
                            placeholder={""}
                            className="text-white mr-8 hover:opacity-80"
                            style={{ backgroundColor: '#000000' }}
                            onClick={goToAppleStore}
                        >
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <FaApple style={{ marginRight: "8px" }} /> App Store
                            </div>
                        </Button>
                        <Button
                            placeholder={""}
                            className="text-white hover:opacity-80"
                            style={{ backgroundColor: '#3DDC84' }}
                            onClick={goToPlayStore}
                        >
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <FaGooglePlay style={{ marginRight: "8px" }} /> Google Play
                            </div>
                        </Button>
                    </div>
            </DialogBody>
            <DialogFooter placeholder={""}>
                <Button
                    placeholder={""}
                    variant="gradient"
                    color="green"
                    onClick={() => setOpen(false)}
                >
                    <span>Okay</span>
                </Button>
            </DialogFooter>
        </Dialog >
        </>
    );
}
