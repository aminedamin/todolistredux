
import './App.css';
import Addtasks from './components/Addtasks';

import List from './components/List';

function App() {
  return (
    <div className="App">
      <img src='/todolist.png' alt='Not found' className='todo'/>
      <List/>
      <br></br>
      <Addtasks/>
      
    </div>
  );
}

export default App;
