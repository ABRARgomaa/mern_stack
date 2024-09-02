import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import DashLayout from './components/DashLayout';
import Public from './components/Public';
import Welcome from './features/auth/Welcome';
import Login from './features/auth/Login';
import NotesList from './features/auth/notes/NotesList';

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
