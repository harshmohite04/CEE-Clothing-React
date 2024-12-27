import { RecoilRoot } from "recoil";
import "./App.css";
import UpperLayer from "./components/upperLayer";
import Header from "./components/Header";
import ForFront from "./components/ForFront";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LandingPage from "./LandingPage";

function App() {
  return (

    <BrowserRouter>

    <Routes>
      <Route path='/' element={<LandingPage/>}></Route>
    </Routes>
    </BrowserRouter>


  );
}

export default App;
