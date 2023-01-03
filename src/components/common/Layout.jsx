import styled from 'styled-components';

export const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

export const Container = styled.div`
  width: 30rem;
  height: 100%;

  display: flex;
  flex-direction: column;
`;
