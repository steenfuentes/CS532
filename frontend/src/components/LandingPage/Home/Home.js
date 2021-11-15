import React from "react";
import QuickMenu from '../QuickMenu/QuickMenu';
import Hero from '../HeaderLP/Hero';
import ButtonAppBar from '../Navigation/Navbar';
import Footer from "../../Footer/Footer";
import Gallery from "../Gallery/gallery";


export default function Home() {
    return (
        <>
            <ButtonAppBar />
            <Hero />

            <Gallery />

            <Footer />
        </>
    );
};