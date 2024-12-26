import { RecoilRoot } from "recoil";
import "./App.css";
import UpperLayer from "./components/upperLayer";
import Header from "./components/Header";
import ForFront from "./components/ForFront";

function App() {
  return (
    <RecoilRoot>
      <UpperLayer />
      <Header/>
      <ForFront/>
    </RecoilRoot>
  );
}

export default App;
