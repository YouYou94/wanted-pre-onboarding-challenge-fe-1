import { useState } from 'react';
import {
  ListContainer,
  ListHeader,
  ListTitle,
  ListAddButton,
  ListBox,
  ModalBox,
  TitleInput,
  ContentArea,
  ModalButtonBox,
  ModalButton,
} from './ListStyled';

export function List() {
  const [isDisplay, setIsDisplay] = useState(false);

  return (
    <ListContainer>
      <ListHeader>
        <ListTitle>To Do List</ListTitle>
        <ListAddButton onClick={() => setIsDisplay(true)}>
          추가하기
        </ListAddButton>
      </ListHeader>
      <ListBox>
        <ModalBox isDisplay={isDisplay}>
          <TitleInput placeholder="제목을 작성해주세요." />
          <ContentArea placeholder="내용을 작성해주세요." />
          <ModalButtonBox>
            <ModalButton>작성</ModalButton>
            <ModalButton>초기화</ModalButton>
            <ModalButton onClick={() => setIsDisplay(false)}>닫기</ModalButton>
          </ModalButtonBox>
        </ModalBox>
      </ListBox>
    </ListContainer>
  );
}
