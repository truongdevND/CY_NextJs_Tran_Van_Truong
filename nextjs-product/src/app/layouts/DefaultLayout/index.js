'use client';
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function DefaultLayout({children}) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <div className="flex-grow">
                {children}
            </div>
            <Footer/>
        </div>
    )
}