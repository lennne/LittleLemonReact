import { useState } from 'react';
import './App.css';
import DessertList from './DessertList';

type toDoProps = {
  id: string;
  createdAt: string;
}

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

const ToDo = ({id, createdAt}: toDoProps) => (
  <tr>
    <td>
      <label>{id}</label>
    </td>
    <input />
    <td>
      <label>{createdAt}</label>
    </td>
  </tr>
);


function App() {
  
  const [todos, setTodos] = useState([
    {
      id: "todo1",
      createdAt: "18:00"
    },
    {
      id: "todo2",
      createdAt: "20:30"
    }
  ])

  const reverseOrder = () => {
    setTodos([...todos].reverse());
  }

  return (
    <div className="App">
      <h2>List of low calorie desserts:</h2>
      <button onClick={reverseOrder}>Reverse</button>
      <table>
        <tbody>
          {todos.map((todo: toDoProps, index: number) => {
              return <ToDo id={todo.id} createdAt={todo.createdAt} key={todo.id} />
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
