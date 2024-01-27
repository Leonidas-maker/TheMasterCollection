import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter
} from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import { FaGlobe, FaGithub, FaGitlab } from 'react-icons/fa';

interface TheRouteMasterPopupProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export function TheRouteMasterPopup({ open, setOpen }: TheRouteMasterPopupProps) {
    const { t } = useTranslation();

    const goToGitHub = () => {
        window.open("https://github.com/Schuetze1000/TheRouteMaster", "_blank");
    };

    const goToGitLab = () => {
        window.open("https://gitlab.com/themastercollection/TheRouteMaster", "_blank");
    };

    const goToWebsite = () => {
        window.open("https://theroutemaster.de", "_blank");
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
                    TheRouteMaster
                </DialogHeader>
                <DialogBody placeholder={""} className="text-gray-800 dark:text-gray-200">
                    {t('route.text')}
                    <p>{t('route.dev')} <a className="underline" href="https://github.com/Schuetze1000" target="_blank" rel="noopener noreferrer">@Schuetze1000</a> | <a className="underline" href="https://github.com/Leonidas-maker" target="_blank" rel="noopener noreferrer">@Leonidas-maker</a></p>
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
