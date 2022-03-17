
import 'bootstrap/dist/css/bootstrap.css'
import ItemListContainer from './components/ItemListContainer';
import NavBar from "./components/NavBar/NavBar";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";



function App() {
  return (
    // <BrowserRouter>
    <div>
    <NavBar />
    <ItemListContainer />
    {/* <Routes>
    <Route path='/' element={}/>
    
    </Routes> */}
    {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
