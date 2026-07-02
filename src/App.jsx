import './App.css';
import Todo from "./components/Todo.jsx";
import Title from "./components/Title.jsx";
import Modal from './components/Modal.jsx'
import React, {useState} from 'react'

function App() {
const [showModal, setShowModal] = useState(false)

return (
    <div>
      <Title />
      <div>
        <input type="text" onChange={(event) => {
          
        }} />
        <button onClick={() => setShowModal(true)}>add todo</button>
      </div>
      <div className="todo__wrapper">
      <Todo title="Finish Frontend Simplified"/>
      <Todo title="Finish interview section"/>
      <Todo title="Land a 100k job"/>
      </div>
      {false && <Modal title="confirm delete?"/>}
      </div>
  );
}

export default App;
