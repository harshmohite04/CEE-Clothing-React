import { RecoilRoot } from "recoil";
import UpperLayer from "./components/upperLayer";
import Header from "./components/Header";
import ForFront from "./components/ForFront";
import Main from "./components/Main";
function LandingPage() {
  return (
    <RecoilRoot>
      <UpperLayer />
      <Header />
      <ForFront />
      <Main/>
    </RecoilRoot>
  );
}

export default LandingPage;
