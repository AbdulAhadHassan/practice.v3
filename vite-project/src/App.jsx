import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import ThemeContextProvider from './context/themeContext';

function App() {
  

  return (
    <ThemeContextProvider>

  
        <Router>
          <Navbar/>
          <div>
            <Routes>
              
              <Route path='/' element={<Home/>}/>
              <Route path='/Products' element={<Products/>}/>
              <Route path='/Products/:id' element={<ProductDetails/>}/>
              
              
            </Routes>
            
          </div>
        </Router>
    </ThemeContextProvider>
    
  )
}

export default App
