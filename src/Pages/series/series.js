import Navbar from "../../Components/navbar/navbar";
import Header from "../../Components/header/header";
import LandscapeSlide from "../../Components/landscapeSlide/landscapeSlide";
import PotraitSlide from "../../Components/potraitSlide/potraitSlide";
import Footer from "../../Components/footer/footer";

export default function Series() {
  return (
    <div>
      <Navbar />
      <Header name="happiness" link="../../images/background/series/bg.jpg" />
      <LandscapeSlide />
      <PotraitSlide header="Top Rating Film dan Series Hari ini" apiId="top" />
      <PotraitSlide header="Film Trending" />
      <PotraitSlide header="Rilis Baru" apiId="new" />
      <Footer />
    </div>
  );
}
