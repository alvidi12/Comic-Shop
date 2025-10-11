import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';


function App() {
  return (
     <Router>{/* Habilita la navegacion en el proyecto */}
      <Routes>
        <Route>
          <Route path='/' element={<Home/>}/>{/* Agregando ruta home */}
          {/* <Route path='/nosotros' element={<About/>}/>Agregando ruta a nosotros */}
        </Route>
      </Routes>


    </Router>
  );
}

export default App;
