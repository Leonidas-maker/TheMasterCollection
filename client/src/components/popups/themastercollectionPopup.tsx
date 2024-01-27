import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter
} from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaGitlab } from 'react-icons/fa';

interface TheMasterCollectionPopupProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export function TheMasterCollectionPopup({ open, setOpen }: TheMasterCollectionPopupProps) {
    const { t } = useTranslation();
    
    const goToGitHub = () => {
        window.open("https://github.com/Leonidas-maker/TheMasterCollection", "_blank");
    };

    const goToGitLab = () => {
        window.open("https://gitlab.com/themastercollection/themastercollection", "_blank");
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
                    TheMasterCollection
                </DialogHeader>
                <DialogBody placeholder={""} className="text-gray-800 dark:text-gray-200">
                    {t('master.text')}
                    <p>{t('master.dev')} <a className="underline" href="https://github.com/Leonidas-maker" target="_blank" rel="noopener noreferrer">@Leonidas-maker</a> | <a className="underline" href="https://github.com/Schuetze1000" target="_blank" rel="noopener noreferrer">@Schuetze1000</a></p>
                    <div className="flex flex-wrap justify-center mt-5">
                        <Button
                            placeholder={""}
                            className="text-white hover:opacity-80 mr-4 mb-4"
                            style={{ backgroundColor: '#333' }}
                            onClick={goToGitHub}
                        >
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <FaGithub style={{ marginRight: "8px" }} /> GitHub
                            </div>
                        </Button>
                        <Button
                            placeholder={""}
                            className="text-white hover:opacity-80 mr-4 mb-4"
                            style={{ backgroundColor: '#FC6D26' }}
                            onClick={goToGitLab}
                        >
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <FaGitlab style={{ marginRight: "8px" }} /> GitLab
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
            </Dialog>
        </>
    );
}
