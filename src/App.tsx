import { ChangeEventHandler, FormEvent, FormEventHandler, useRef, useState } from 'react';
import './App.css';

function App() {


  //get the value of the dom elements
  const inputBox = useRef<HTMLInputElement | null>(null);

  //controlled component involves placing it inside form
  const [value, setValue] = useState("10");
  //controlled input to validate the length
  const [comment, setComment] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if(Number(value) <= 5 && comment.length <= 10){
        alert("Please provide a comment explaining why the experience was poor.");
        return;
      }
  }


 
  return (
    <div className="App">
      <h2>Feedback forms</h2>   
        <form onSubmit={handleSubmit}>
          <p>Score: {value}  </p>
          <input type='range' min="0" max="10" value={value} onChange={(e) =>  setValue(e.currentTarget.value)} />
          <div>
            <textarea onChange={e => setComment(e.target.value)} value={comment}/>
          </div>

          <button type='submit'>Submit</button>
        </form>
     </div>
  );
}

export default App;
