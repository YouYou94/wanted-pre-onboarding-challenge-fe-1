import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './Reset.css';
import Router from './router/Router.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
