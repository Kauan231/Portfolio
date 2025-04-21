import { useContext } from "react";
import { LanguageContext } from "../context/languageContext";

import '../components/style/Eventos.css'

import CareerInfo from "./content/career";

export default function Eventos() {
    const { Language } = useContext(LanguageContext);

    return (
        <>
        <div className="w-full text-center p-6 sm:mb-12 pt-24 pb-12 cursor-default" id="Career">
            <h1
             className="text-4xl font-bold"
            >{CareerInfo.title[Language]}</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 cursor-default">
            <div className="grid grid-cols-4 gap-4">
                <div className="2xl:flex hidden h-full w-full">
                    <img src={CareerInfo.companies[0].companyLogo} className="h-40 w-40"/>
                </div>
                <div className="flex flex-col 2xl:border-l-2 sm:pl-12 border-black sm:col-span-3 col-span-4">
                    <div className="flex sm:flex-row flex-col sm:gap-2">
                        <h2 className="text-2xl font-bold text-gray-800">{CareerInfo.companies[0].companyName}</h2>
                        <h2 className="text-2xl font-thin text-gray-800">{CareerInfo.companies[0][Language].time}</h2>
                    </div>

                    <p className="text-gray-600">
                        { CareerInfo.companies[0][Language].description.main }
                    </p>

                    <p className="text-gray-600">
                        { CareerInfo.companies[0][Language].description.stack }
                    </p>

                    <p className="text-black pt-2 font-semibold">
                        { CareerInfo.companies[0][Language].description.highlightTitle }
                    </p>
                    <p className="text-gray-600">
                        { CareerInfo.companies[0][Language].description.firstHighlight }
                    </p>
                    <p className="text-gray-600">
                        { CareerInfo.companies[0][Language].description.secondHighlight }
                    </p>
                    <div
                        className="w-full flex justify-center"
                    >
                        <button
                            onClick={() =>  window.open(CareerInfo.companies[0].website, '_blank') }
                            className="bg-slate-800 w-1/4 pt-2 pb-2 mt-6 text-white font-bold rounded-full hover:scale-110 hover:rotate-2 transform transition duration-100"
                        > Website
                        </button>
                    </div>
                </div>

            </div>
            <img src={CareerInfo.companies[0].images[0]} alt="Gallery Image 1" className="rounded-lg shadow-md w-full h-[50vh] object-cover animate-fadeIn object-top"/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 cursor-default">
            <div className="grid grid-cols-4 gap-4">
                <div className="2xl:flex hidden h-full w-full">
                    <img src={CareerInfo.companies[1].companyLogo} className="h-40 w-40"/>
                </div>
                <div className="flex flex-col 2xl:border-l-2 sm:pl-12 border-black sm:col-span-3 col-span-4">
                    <div className="flex sm:flex-row flex-col sm:gap-2">
                        <h2 className="text-2xl font-bold text-gray-800">{CareerInfo.companies[1].companyName}</h2>
                        <h2 className="text-2xl font-thin text-gray-800">{CareerInfo.companies[1][Language].time}</h2>
                    </div>

                    <p className="text-gray-600">
                        { CareerInfo.companies[1][Language].description }
                    </p>
                    <div
                        className="w-full flex justify-center"
                    >
                        <button
                            onClick={() =>  window.open(CareerInfo.companies[1].website, '_blank') }
                            className="bg-slate-800 w-1/4 pt-2 pb-2 mt-6 text-white font-bold rounded-full hover:scale-110 hover:rotate-2 transform transition duration-100"
                        > Website
                        </button>
                    </div>
                </div>

            </div>
            <div className="h-[50vh] overflow-y-auto space-y-4 pr-2 custom-scrollbar">
                {
                    CareerInfo.companies[1].images.map((image, index) => {
                        return (
                            <img key={index} src={image} alt="Gallery Image 1" className="rounded-lg shadow-md w-full h-[45vh] object-cover animate-fadeIn"/>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}