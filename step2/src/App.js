import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Public from './components/Public';
import Login from './components/Login';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Order from './components/Order';
import ProductsList from './features/products/ProductsList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="order" element={<Order />} />
        <Route path="menu">
            <Route index element={<ProductsList />} />
          </Route>
      </Route>
    </Routes>
  );
}

export default App;
