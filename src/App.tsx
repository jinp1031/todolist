import React, {FC,ChangeEvent, useState} from 'react';
import './App.css';
import TodoTask from './Components/TodoTask';
import { ITask } from './Interfaces';

const App: FC = ()=> {
  const [task, setTask] = useState<string>("");
  const [ddl, setDdl] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);


  const handleChange = (event:ChangeEvent<HTMLInputElement>):void => {
    if(event.target.name === "task"){
      setTask(event.target.value);
    }else{
      setDdl(Number(event.target.value));
    }
  };
  
  const addTask = ():void =>{
    const newTask = {taskName: task, deadline: ddl};
    setTodoList([...todoList, newTask]);
    setTask("");
    setDdl(0);
  }

  const completeTask = (taskDelete:string):void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName !== taskDelete;
    }))
  }

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input 
          type="text" 
          placeholder="Task..." 
          name="task" 
          value={task}
          onChange={handleChange}/>
          <input 
          type="number" 
          placeholder="Deadline(days)" 
          name="ddl" 
          value={ddl}
          onChange={handleChange}/>
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
          {todoList.map((task: ITask, key: number) => {
            return <TodoTask key={key} task={task} completeTask={completeTask}/>
          })}
      </div>
    </div>
  );
}

export default App;
