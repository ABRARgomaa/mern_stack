import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import DashLayout from './components/DashLayout';
import Public from './components/Public';
import Welcome from './features/auth/Welcome';
import Login from './features/auth/Login';
import NotesList from './features/auth/notes/NotesList';
import UsersList from './features/auth/users/UsersList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />

        <Route path="dash" element={<DashLayout />}>
          <Route index element={<Welcome />} />
          <Route path="notes" element={<NotesList />} />
          <Route path="users" element={<UsersList />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
