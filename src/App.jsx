
import 'bootstrap/dist/css/bootstrap.css'
import ItemListContainer from './components/ItemListContainer';
import NavBar from "./components/NavBar/NavBar";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Error404 from './components/Error404/Error404';
import ItemDetailContainer from './components/ItemDetailContainer';
import Reservas from './components/Reservas/Reservas';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart'



function App() {
  return (
    <BrowserRouter>

    <NavBar />
    
    <Routes>
    <Route path='/' element={<ItemListContainer />}/>
    <Route path='/category/:id' element={<ItemListContainer />}/>
    <Route path='/item/:id' element={<ItemDetailContainer />}/>
    <Route path='reservas'element={<Reservas />}/> 
    <Route path='cart'element={<Cart />}/> 
    <Route path='*'element={<Error404 />}/>
    
    </Routes> 

    <Footer />
    </BrowserRouter> 
    
  );
}

export default App;
