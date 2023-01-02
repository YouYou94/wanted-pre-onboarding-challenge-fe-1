import styled from 'styled-components';

export const Form = styled.form`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  margin: 1.5rem;

  font-size: 2rem;

  text-align: center;
`;

export const AuthInput = styled.input`
  width: 25rem;
  height: 3rem;

  margin: 0.5rem 0;
  border: none;
  border-bottom: 1px solid black;

  font-size: 1rem;

  outline: none;
`;

export const SubmitInput = styled.input`
  width: 20rem;
  height: 2rem;

  margin: 1rem 0 0.5rem 0;
  border: none;
  border-radius: 0.4rem;

  font-size: 1rem;

  color: white;
  background-color: rgb(85, 85, 255);

  cursor: pointer;

  &:hover {
    background-color: rgb(252, 101, 101);
  }
  &:disabled {
    background-color: rgb(204, 204, 204);
  }
`;

export const EmailValidText = styled.label`
  width: 25rem;
  height: 1rem;

  color: ${props => (props.isValid ? 'blue' : 'red')};
`;

export const PasswordValidText = styled.label`
  width: 25rem;
  height: 1rem;

  color: ${props => (props.isValid ? 'blue' : 'red')};
`;

export const CaptionText = styled.label`
  height: 1rem;

  font-style: italic;

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
