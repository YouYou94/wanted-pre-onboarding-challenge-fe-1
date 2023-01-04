import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router.jsx';
import './App.css';
import './Reset.css';

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
