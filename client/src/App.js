import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import './App.css';
import Signin from './Signin/Signin';
import Signup from './Signup/Signup';
import Home from './Home/Home';


function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signin/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
