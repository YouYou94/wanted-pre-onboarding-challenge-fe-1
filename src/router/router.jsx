import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { TodoPage, AuthPage } from '../pages';

export const BASE_URL = '/wanted-pre-onboarding-challenge-fe-1';

export default function Router() {
  const navigate = useNavigate();

  // 로그인 유무 확인
  useEffect(() => {
    if (!localStorage.getItem('user')) navigate(`${BASE_URL}/auth`);
  }, []);

  return (
    <Routes>
      <Route path={`${BASE_URL}/`} element={<TodoPage />} />
      <Route path={`${BASE_URL}/auth`} element={<AuthPage />} />
    </Routes>
  );
}
