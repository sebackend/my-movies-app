import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './pages';
import RouterLayout from './common/RouterLayout';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRouter;
