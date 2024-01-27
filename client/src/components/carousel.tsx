import React, { useState } from "react";
import { Carousel } from "@material-tailwind/react";
import { TheShopMasterPopup } from "./popups/theshopmasterPopup";
import { TheRouteMasterPopup } from "./popups/theroutemasterPopup";
import { TheMasterCollectionPopup } from "./popups/themastercollectionPopup";

export function CarouselProducts() {
    const [isShopMasterPopupOpen, setShopMasterPopupOpen] = useState(false);
    const [isRouteMasterPopupOpen, setRouteMasterPopupOpen] = useState(false);
    const [isMasterCollectionPopupOpen, setMasterCollectionPopupOpen] = useState(false);

    return (
        <>
            <Carousel
                autoplay={true}
                loop={true}
                placeholder={""}
                className=""
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                        {new Array(length).fill("").map((_, i) => (
                            <span
                                key={i}
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50 z-50"
                                    }`}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </div>
                )}
            >
                <div className="h-full w-full object-cover" onClick={() => setShopMasterPopupOpen(true)}>
                    <img
                        src="/logos/big/TheShopMasterBig.png"
                        alt="TheShopMaster"
                        className="hidden md:block md:h-full md:w-full md:object-cover"
                    />
                    <img
                        src="/logos/mobile/TheShopMasterMobile.png"
                        alt="TheShopMaster"
                        className="block md:hidden h-full w-full object-cover"
                    />
                </div>

                <div className="h-full w-full object-cover" onClick={() => setRouteMasterPopupOpen(true)}>
                    <img
                        src="/logos/big/TheRouteMasterBig.png"
                        alt="TheRouteMaster"
                        className="hidden md:block md:h-full md:w-full md:object-cover"
                    />
                    <img
                        src="/logos/mobile/TheRouteMasterMobile.png"
                        alt="TheRouteMaster"
                        className="block md:hidden h-full w-full object-cover"
                    />
                </div>

                <div className="h-full w-full object-cover" onClick={() => setMasterCollectionPopupOpen(true)}>
                    <img
                        src="/logos/big/TheMasterCollectionBig.png"
                        alt="TheMasterCollection"
                        className="hidden md:block md:h-full md:w-full md:object-cover"
                    />
                    <img
                        src="/logos/mobile/TheMasterCollectionMobile.png"
                        alt="TheMasterCollection"
                        className="block md:hidden h-full w-full object-cover"
                    />
                </div>
            </Carousel>
            <TheShopMasterPopup open={isShopMasterPopupOpen} setOpen={setShopMasterPopupOpen} />
            <TheRouteMasterPopup open={isRouteMasterPopupOpen} setOpen={setRouteMasterPopupOpen} />
            <TheMasterCollectionPopup open={isMasterCollectionPopupOpen} setOpen={setMasterCollectionPopupOpen} />
        </>
    );
}
