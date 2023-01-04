import styled from 'styled-components';

export const ListContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  padding: 2rem 0;

  border-right: 2px solid rgb(204, 204, 204);
`;

export const ListHeader = styled.div`
  height: 5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 2rem;
  border-bottom: 1px solid rgb(204, 204, 204);
`;

export const ListTitle = styled.h1`
  font-size: 2.5rem;
`;

export const ListAddButton = styled.button`
  width: 8rem;
  height: 2.3rem;

  border: none;

  border-radius: 1rem;

  background-color: rgb(85, 85, 255);
  color: white;

  font-size: 1rem;

  cursor: pointer;

  &:hover {
    background-color: rgb(252, 101, 101);
  }
`;

export const ListBox = styled.div`
  position: relative;

  height: calc(100vh - 9rem);

  padding: 1rem 2rem;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.4rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(85, 85, 255);
  }
  @media screen and (max-width: 1024px) {
    height: calc(100vh - 16rem);
  }
`;

export const ListItem = styled.div`
  height: 3rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 1rem 0;
  padding: 0 1rem;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 1rem;

  box-shadow: 0 5px 10px 0 hsl(240deg 5% 41% / 20%);

  cursor: pointer;
`;

export const ItemTitle = styled.h3``;

export const ItemDeleteButton = styled.button`
  width: 5rem;

  border: none;

  border-radius: 1rem;

  background-color: rgb(85, 85, 255);
  color: white;

  font-size: 1rem;

  cursor: pointer;

  &:hover {
    background-color: rgb(252, 101, 101);
  }
`;

/* Modal Styled */
export const ModalBox = styled.div`
  position: absolute;

  top: ${prop => (prop.isDisplay ? '0' : '-50%')};
  left: 0;

  width: 100%;
  height: 20rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem;
  border-bottom: 1px solid rgb(204, 204, 204);

  background-color: rgb(250, 250, 250);

  gap: 1rem;

  transition: 0.5s all;
`;

export const TitleInput = styled.input`
  box-sizing: border-box;

  width: 25rem;
  height: 2rem;

  border: 1px solid rgb(204, 204, 204);
  padding: 0 0.5rem;

  font-size: 1rem;

  outline: none;
`;

export const ContentArea = styled.textarea`
  box-sizing: border-box;

  width: 25rem;
  height: 10rem;

  padding: 0.5rem;
  border: 1px solid rgb(204, 204, 204);

  font-size: 0.8rem;

  outline: none;
`;

export const ModalButtonBox = styled.div`
  display: flex;

  gap: 1rem;
`;

export const ModalButton = styled.button`
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
