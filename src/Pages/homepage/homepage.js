import Navbar from "../../Components/navbar/navbar";
import Header from "../../Components/header/header";
import LandscapeSlide from "../../Components/landscapeSlide/landscapeSlide";
import PotraitSlide from "../../Components/potraitSlide/potraitSlide";
import Footer from "../../Components/footer/footer";
import { useEffect, useState } from "react";
import axios from "axios";

export default function HomePage() {
  const [API, setAPI] = useState(false);
  useEffect(() => {
    const { protocol, hostname, port } = window.location;
    async function getAPI() {
      const res = await axios.get(
        `${protocol}//${hostname}:${port}/api/dataMovie.json`
      );
      const data = res.data;
      return setAPI(data);
    }
    getAPI();
  }, []);
  return (
    <div>
      {API ? (
        <>
          {" "}
          <Navbar />
          <Header
            name="duty after school"
            link="../../images/background/homepage/bg.webp"
            API={API}
          />
          <LandscapeSlide API={API} />
          <PotraitSlide
            header="Top Rating Film dan Series Hari ini"
            apiId="top"
            API={API}
          />
          <PotraitSlide header="Film Trending" API={API} />
          <PotraitSlide header="Rilis Baru" apiId="new" API={API} />
          <Footer />
        </>
      ) : null}
    </div>
  );
}
