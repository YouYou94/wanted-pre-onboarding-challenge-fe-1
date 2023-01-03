import { createContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './Reset.css';
import Router from './router/Router.jsx';

export const TodoContext = createContext();

function App() {
  const [todolist, setTodolist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getTodo() {
      await fetch('http://localhost:8080/todos', {
        method: 'GET',
        headers: {
          Authorization: localStorage.getItem('user'),
        },
      })
        .then(res => res.json())
        .then(data => {
          setTodolist(data);
        });

      setIsLoading(false);
    }
    getTodo();
  }, []);

  return (
    <div className="App">
      <TodoContext.Provider value={todolist}>
        {isLoading ? (
          <></>
        ) : (
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        )}
      </TodoContext.Provider>
    </div>
  );
}

export default App;
