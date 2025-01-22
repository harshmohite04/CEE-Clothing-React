import "./App.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LandingPage from "./LandingPage";
import AdminPage from "./AdminPage";

function App() {
  return (

    <BrowserRouter>

    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/adminPage' element={<AdminPage/>} />

    </Routes>
    </BrowserRouter>


  );
}

export default App;
