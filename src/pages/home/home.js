import { useEffect } from "react";
import "./home.css";
import Header from "../../components/header/header";
import Video from "../../assets/Trailer.mp4";
import HomeMenu from "../../components/menus/homeMenu";
import ImageSection from "../../components/homeSections/imageSection/imageSection";
import SalesSection from "../../components/homeSections/salesSection/salesSection";
import OverviewSection from "../../components/homeSections/overviewSection/overviewSection";
import Footer from "../../components/footer/footer";

function Home () {

    useEffect(() => {
        window.scrollTo ({top: 0});
    });

    return (
        <>
            
            <Header />
            
            <div id="videoBanner">
                <video controls autoPlay className="trailer">
                    <source src={Video} />
                    Seu navegador não possui suporte para vídeos
                </video>
            </div>

            <HomeMenu />

            <ImageSection />

            <SalesSection />

            <OverviewSection />

            <Footer />

        </>
    )
}

export default Home;