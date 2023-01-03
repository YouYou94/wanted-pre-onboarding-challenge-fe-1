import styled from 'styled-components';

export const Content = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const AddContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1rem;

  gap: 1rem;
`;

export const TitleInput = styled.input`
  box-sizing: border-box;

  width: 25rem;
  height: 2rem;

  border: 1px solid black;
  padding: 0 0.5rem;

  font-size: 1rem;

  outline: none;
`;

export const ContentArea = styled.textarea`
  box-sizing: border-box;

  width: 25rem;
  height: 10rem;

  padding: 0.5rem;

  font-size: 0.8rem;

  outline: none;
`;

export const AddContentButtonBox = styled.div`
  display: flex;

  gap: 1rem;
`;

export const AddContentButton = styled.button`
  width: 7rem;
  height: 1.5rem;

  border: none;
  background-color: rgb(85, 85, 255);
  color: white;

  cursor: pointer;

  &:hover {
    background-color: rgb(252, 101, 101);
  }
`;

export const TodoContent = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  border-top: 1px solid black;
  margin-top: 1rem;
  padding-top: 1rem;

  gap: 1rem;
`;

export const TodoItemBox = styled.div`
  height: 3rem;
`;
