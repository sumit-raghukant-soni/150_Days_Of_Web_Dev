import './App.css';
import Background from './components/Background';
import { TodoWrapper } from './components/TodoWrapper';

function App() {
  return (
    <div className='app'>
      <TodoWrapper />
      <Background />
    </div>
  );
}

export default App;
