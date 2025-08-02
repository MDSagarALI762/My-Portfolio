import About from "../components/About";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Do from "../components/Do";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Hire from "../components/Hire";
import HomeNavbar from "../components/HomeNavbar";
import Portfolio from "../components/Portfolio";
import Resume from "../components/Resume";
import Skills from "../components/Skills";



const HomeLayout = () => {
    return (
        <div>
        <header>
            <Banner></Banner>
           <HomeNavbar></HomeNavbar>
        </header>
        <main className="mt-5">
            <About></About>
            <Do></Do>
            <Resume></Resume>
            <Skills></Skills>
            <Portfolio></Portfolio>
            <Hire></Hire>
            <FAQ></FAQ>
            <Contact></Contact>
          
        </main>
<footer>
      <Footer></Footer>
</footer>
        </div>
    );
};

export default HomeLayout;