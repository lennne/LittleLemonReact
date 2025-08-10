import { ChangeEventHandler, useRef, useState } from 'react';
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

const ToDo = ({ id, createdAt }: toDoProps) => (
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

  //get the value of the dom elements
  const inputBox = useRef<HTMLInputElement | null>(null);
  const file = useRef<HTMLInputElement | null>(null);
  const [fileUrl, setFileUrl] = useState("");

  //controlled component involves placing it inside form
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    const inputValue = inputBox.current?.value;
  }

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    console.log(value);
  }

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target?.files?.[0];
    if(files){
      setFileUrl(URL.createObjectURL(files));
    }
    console.log(fileUrl)
  }

  return (
    <div className="App">
      <h2>List of low calorie desserts:</h2>
      <button onClick={() => console.log(inputBox.current?.value)}>Reverse</button>
      <input

        onChange={onTextChange} ref={inputBox} />
      <input
        onChange={handleFile}
        ref={file}
        type='file' />
      {fileUrl && <img src={fileUrl} style={{height:300, width: 100, objectFit: "contain"}} />}
      s    </div>
  );
}

export default App;
