import { RecoilRoot } from "recoil";
import UpperLayer from "./components/upperLayer";
import Header from "./components/Header";
import ForFront from "./components/ForFront";
import Main from "./components/Main";
import TopSelling from "./components/TopSelling";
import BrowseDesignStyle from "./components/BrowseDesignStyle";
import Message from "./components/Message";
import Footer from "./components/Footer";
function LandingPage() {
  return (
    <RecoilRoot>
      <UpperLayer />
      <Header />
      <ForFront />
      <Main/>
      <TopSelling/>
      <BrowseDesignStyle/>
      <Message/>
      <Footer/>
    </RecoilRoot>
  );
}

export default LandingPage;
