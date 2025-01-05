import { RecoilRoot } from "recoil";
import UpperLayer from "./components/upperLayer";
import Header from "./components/Header";
import ForFront from "./components/ForFront";
import Main from "./components/Main";
import TopSelling from "./components/TopSelling";
function LandingPage() {
  return (
    <RecoilRoot>
      <UpperLayer />
      <Header />
      <ForFront />
      <Main/>
      <TopSelling/>
    </RecoilRoot>
  );
}

export default LandingPage;
