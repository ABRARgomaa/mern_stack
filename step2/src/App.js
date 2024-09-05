import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Public from './components/Public';
import Login from './components/Login';
import About from './components/About';
import Contact from './components/Contact';
import Order from './components/Order';
import Menu from './components/Menu';
import ProductsPage from './features/products/ProductPage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="order" element={<Order />} />
        <Route path="menu" element={<Menu />} />
        <Route path="menu/:category" element={<ProductsPage />} />
      </Route>
    </Routes>
  );
}

export default App;