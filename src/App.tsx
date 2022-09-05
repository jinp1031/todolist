import React, {FC,ChangeEvent, useState} from 'react';
import './App.css';

const App: FC = ()=> {
  const [task, setTask] = useState<string>("");
  const [ddl, setDdl] = useState<number>(0);
  const [todo, setTodo] = useState([]);

  const handleChange = (event:ChangeEvent<HTMLInputElement>):void => {
    if(event.target.name === "task"){
      setTask(event.target.value);
    }else{
      setDdl(Number(event.target.value));
    }
  };
  
  const addTask = ():void =>{
    setTodo([...todo,task]);
  }

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input type="text" placeholder="Task..." name="task" onChange={handleChange}/>
          <input type="number" placeholder="Deadline(days)" name="ddl" onChange={handleChange}/>
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">

      </div>
    </div>
  );
}

export default App;
