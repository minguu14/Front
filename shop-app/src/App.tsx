import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import HomePage from './pages/HomePage/HomePage'
import DetailPage from './pages/DetailPage/DetailPage'
import CartPage from './pages/CartPage/CartPage'
import OrderPage from './pages/OrderPage/OrderPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='products/:id' element={<DetailPage/>}/>
          <Route path='login' element={<LoginPage/>}/>
          <Route path='register' element={<RegisterPage/>}/>
          <Route path='cart' element={<CartPage/>}/>
          <Route path='order' element={<OrderPage/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
