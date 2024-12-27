import { RecoilRoot } from "recoil";
import UpperLayer from "./components/upperLayer";
import Header from "./components/Header";
import ForFront from "./components/ForFront";

function LandingPage() {
  return (
    <RecoilRoot>
      <UpperLayer />
      <Header />
      <ForFront />
    </RecoilRoot>
  );
}

export default LandingPage;
