import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import DashLayout from './components/DashLayout';
import Public from './components/Public';
import Login from './features/auth/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />

        <Route path="coffee" element={<DashLayout />}>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
