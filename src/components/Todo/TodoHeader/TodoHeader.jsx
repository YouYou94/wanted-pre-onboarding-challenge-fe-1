import { useNavigate } from 'react-router-dom';
import * as Styled from './Styled.jsx';

export function TodoHeader() {
  const navigate = useNavigate();

  const onHandlerClickLogout = () => {
    if (window.confirm('로그아웃하시겠습니까?')) {
      alert('로그아웃하셨습니다!');

      localStorage.clear();

      navigate('/auth');
    }
  };

  return (
    <Styled.Header>
      <Styled.Title>To Do List</Styled.Title>
      <Styled.LogoutButton onClick={onHandlerClickLogout}>
        로그아웃
      </Styled.LogoutButton>
    </Styled.Header>
  );
}
