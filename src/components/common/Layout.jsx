import styled from 'styled-components';

export const AuthLayout = ({ children }) => {
  return <AuthContainer>{children}</AuthContainer>;
};

export const TodoLayout = ({ children }) => {
  return <TodoContainer>{children}</TodoContainer>;
};

export const AuthContainer = styled.div`
  width: 30rem;

  display: flex;
  flex-direction: column;

  box-shadow: 0 7px 29px 0 hsl(240deg 5% 41% / 20%);
`;

export const TodoContainer = styled.div`
  width: 100%;

  flex: 1;

  display: flex;
  flex-direction: column;
`;
