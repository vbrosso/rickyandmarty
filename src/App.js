import { BrowserRouter } from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import Inicio from "./components/Inicio";
import Personaje from "./components/Personaje";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio></Inicio>}></Route>
          <Route path='/personaje/:id' element={<Personaje></Personaje>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
