import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/login';
import UsersPage from '../pages/users';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/login" element={<LoginPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;