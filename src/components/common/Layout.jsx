import styled from 'styled-components';

export const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

export const Container = styled.div`
  width: 30rem;
  height: 100%;

  display: flex;
  flex-direction: column;

  box-shadow: 0 7px 29px 0 hsl(240deg 5% 41% / 20%);
`;
