import { useContext } from "react";
import { LanguageContext } from "../context/languageContext";

export default function Footer() {
    const { Language } = useContext(LanguageContext);
    return (
        <>
        <div className="flex bg-black h-12 justify-center items-center">
            <span className="text-white text-lg">{(Language == "Portuguese") ?  "©2025 por Kauan Ramos" :  "©2025 by Kauan Ramos"}</span>
        </div>
        </>
    )
}