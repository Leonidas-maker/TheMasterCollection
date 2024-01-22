import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter
} from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

interface TheMasterCollectionPopupProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export function TheMasterCollectionPopup({ open, setOpen }: TheMasterCollectionPopupProps) {
    const { t } = useTranslation();
    
    return (
        <>
            <Dialog
                placeholder={""}
                open={open}
                size={"lg"}
                handler={() => setOpen(!open)}
            >
                <DialogHeader placeholder={""}>Its a simple dialog.</DialogHeader>
                <DialogBody placeholder={""}>
                    TheMasterCollection
                </DialogBody>
                <DialogFooter placeholder={""}>
                    <Button
                        placeholder={""}
                        variant="text"
                        color="red"
                        onClick={() => setOpen(false)}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button
                        placeholder={""}
                        variant="gradient"
                        color="green"
                        onClick={() => setOpen(false)}
                    >
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}
