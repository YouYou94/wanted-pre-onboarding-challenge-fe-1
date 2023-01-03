import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { TodoPage, AuthPage } from '../pages';

export default function Router() {
  const navigate = useNavigate();

  // 로그인 유무 확인
  useEffect(() => {
    if (localStorage.getItem('user')) {
      //window.history.pushState(null, null, '/');
      navigate('/');
    } else {
      //window.history.pushState(null, null, '/auth');
      navigate('/auth');
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<TodoPage />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
}
