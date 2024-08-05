import Link from 'next/link'
import { useEffect } from "react";
import Script from 'next/script'

export default function Footer() {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };

    return (

        <>
            <footer className="site-footer">
               This is footer 
            </footer>
        </>
    )
}