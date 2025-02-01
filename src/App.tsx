import "./App.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LandingPage from "./pages/LandingPage";
import AdminPage from "./pages/AdminPage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (

    <BrowserRouter>

    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/adminPage' element={<AdminPage/>} />
      <Route path='/productPage' element={<ProductPage/>} />

    </Routes>
    </BrowserRouter>


  );
}

export default App;
