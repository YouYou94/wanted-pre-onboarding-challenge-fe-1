import styled from 'styled-components';

export const Header = styled.div`
  position: relative;

  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgb(85, 85, 255);
`;

export const Title = styled.h1`
  font-size: 2rem;

  text-align: center;

  color: white;
`;

export const LogoutButton = styled.button`
  position: absolute;

  right: 0;
  bottom: 0.5rem;

  border: none;

  background-color: transparent;
  color: white;

  font-weight: bold;

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
