import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Announcement } from './components/Announcement';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Newsletter } from './components/Newsletter';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Product } from './pages/Product';
import { ProductList } from './pages/ProductList';
import { Register } from './pages/Register';
import { SuccessPage } from './pages/SuccessPage';
import { getRandomID } from './utils/getRandomID';

const pages = [
  { component: Home, path: '', id: getRandomID() },
  { component: ProductList, path: 'products/:category', id: getRandomID() },
  { component: Product, path: 'product/:id', id: getRandomID() },
  { component: Cart, path: 'cart', id: getRandomID() },
].map((el, idx) => (
  <Route
    key={idx}
    path={el.path}
    element={
      <>
        <Navbar />
        <Announcement />
        {<el.component />}
        <Newsletter />
        <Footer />
      </>
    }
  />
));

export const App = () => {
  const user = useSelector((s: any) => s.user.currentUser);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          {pages}

          <Route path='login' element={user ? <Navigate to='/' replace /> : <Login />} />

          <Route path='register' element={user ? <Navigate to='/' replace /> : <Register />} />

          <Route path='success' element={<SuccessPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
