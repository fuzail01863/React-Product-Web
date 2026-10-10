import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar/navbar'
import Notfound from './pages/Notfound'
import Landing from './pages/Landing/landing'
import Auth from './pages/Auth/auth'
import Contact from './pages/Contact/contact'
import Products from './pages/Product/products'
import Product from './pages/Product/product'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product/:id' element={<Product />} /> 
        <Route path='*' element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App
