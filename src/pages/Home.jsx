import { useLoaderData } from "react-router-dom";
import Banner from "../compnents/Banner";
import FollowUs from "../compnents/FollowUs";
import Footer from "../compnents/Footer";
import NavBar from "../compnents/NavBar";
import PopularProducts from "../compnents/PopularProducts";

const Home = () => {
  
  return (
    <div>
      <header>
        <NavBar></NavBar>
        <Banner></Banner>
      </header>
      <main>
        <PopularProducts></PopularProducts>

        <FollowUs></FollowUs>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Home;
