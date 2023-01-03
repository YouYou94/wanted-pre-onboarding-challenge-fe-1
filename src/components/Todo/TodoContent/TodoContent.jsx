import { useRef, useState } from 'react';
import * as Styled from './Styled.jsx';

export function TodoContent() {
  const ref = useRef();

  const [todo, setTodo] = useState({
    title: '',
    content: '',
  });

  const onHandlerChangeTitle = event => {
    const { value } = event.target;

    setTodo({
      ...todo,
      title: value,
    });
  };

  const onHandlerChangeContent = event => {
    const { value } = event.target;

    setTodo({
      ...todo,
      content: value,
    });
  };

  const onHandlerKeyPressTodo = event => {
    const { key } = event;
    if (key === 'Enter') {
      if (todo.title) ref.current.focus();
    }
  };

  const onHandlerClickWrite = () => {
    // api 연동
  };

  const onHandlerClickReset = () => {
    setTodo({
      title: '',
      content: '',
    });
  };

  return (
    <Styled.Content>
      <Styled.AddContent>
        <Styled.TitleInput
          value={todo.title}
          onChange={onHandlerChangeTitle}
          onKeyPress={onHandlerKeyPressTodo}
          placeholder="제목을 작성해주세요."
        />
        <Styled.ContentArea
          ref={ref}
          value={todo.content}
          onChange={onHandlerChangeContent}
          placeholder="내용을 작성해주세요."
        />
        <Styled.AddContentButtonBox>
          <Styled.AddContentButton onClick={onHandlerClickWrite}>
            작 성
          </Styled.AddContentButton>
          <Styled.AddContentButton onClick={onHandlerClickReset}>
            초기화
          </Styled.AddContentButton>
        </Styled.AddContentButtonBox>
      </Styled.AddContent>
      <Styled.TodoContent></Styled.TodoContent>
    </Styled.Content>
  );
}
