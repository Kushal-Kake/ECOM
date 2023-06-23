import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Components/Main/Main';
import Cart from './Components/Cart/Cart';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;