import { useEffect, useState } from 'react';
import { customAlphabet } from 'nanoid';
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
  ListItem,
  ItemTitle,
  ItemDeleteButton,
} from './ListStyled';

export function List() {
  const loginToken = localStorage.getItem('user');
  const nanoid = customAlphabet('0123456789abcedfghi', 8);

  // 변경 사항 체크, 변경 사항이 일어날 시 useEffect 실행
  const [change, setChange] = useState(0);

  const [isDisplay, setIsDisplay] = useState(false);
  const [todoState, setTodoState] = useState({
    title: '',
    content: '',
  });
  const [list, setList] = useState([]);

  // to do list 불러오기
  const getTodo = async () => {
    await fetch('http://localhost:8080/todos', {
      method: 'GET',
      headers: {
        Authorization: loginToken,
      },
    })
      .then(res => res.json())
      .then(data => setList(data.data))
      .catch(error => console.log(`Error: ${error}`));
  };

  // to do list 추가하기
  const onHandlerClickCreate = async () => {
    const { title, content } = todoState;

    await fetch('http://localhost:8080/todos', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        content: content,
      }),
      headers: {
        Authorization: loginToken,
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .catch(error => console.log(error));

    setIsDisplay(false);
    setTodoState({ title: '', content: '' });
    setChange(change + 1);
  };

  // to do list 삭제하기
  const onHandlerClickDelete = async event => {
    const { id } = event.target;

    await fetch(`http://localhost:8080/todos/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: loginToken,
      },
    })
      .then(res => res.json())
      .catch(error => console.log(`Error: ${error}`));

    setChange(change + 1);
  };

  useEffect(() => {
    getTodo();
  }, [change]);

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
          <TitleInput
            value={todoState.title}
            onChange={event =>
              setTodoState({ ...todoState, title: event.target.value })
            }
            placeholder="제목을 작성해주세요."
          />
          <ContentArea
            value={todoState.content}
            onChange={event =>
              setTodoState({ ...todoState, content: event.target.value })
            }
            placeholder="내용을 작성해주세요."
          />
          <ModalButtonBox>
            <ModalButton onClick={onHandlerClickCreate}>추 가</ModalButton>
            <ModalButton
              onClick={() => setTodoState({ title: '', content: '' })}
            >
              초기화
            </ModalButton>
            <ModalButton
              onClick={() => {
                setIsDisplay(false);
                setTodoState({ title: '', content: '' });
              }}
            >
              닫 기
            </ModalButton>
          </ModalButtonBox>
        </ModalBox>
        {list.map(item => {
          const { title, id } = item;

          return (
            <ListItem key={nanoid()}>
              <ItemTitle>{title}</ItemTitle>
              <ItemDeleteButton id={id} onClick={onHandlerClickDelete}>
                삭제
              </ItemDeleteButton>
            </ListItem>
          );
        })}
      </ListBox>
    </ListContainer>
  );
}
