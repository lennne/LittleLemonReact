import { useRef, useState } from 'react';
import './App.css';
import { validateEmail } from './utils';

function App() {


  //get the value of the dom elements
  const inputBox = useRef<HTMLInputElement | null>(null);

  //controlled component involves placing it inside form
  //controlled input to validate the length
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false
  });
  const [role, setRole] = useState("role");

 
  const handleText = (e: React.ChangeEvent<HTMLInputElement>, setText: React.Dispatch<React.SetStateAction<string>>)=> {
      setText(e.target.value);
  }

  const isFormValid = () => {
    return (firstName && lastName && password.value.length < 8 && role !== "role" && validateEmail(email));
  }

  const clearForm = () => {
    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword({isTouched: false, value: ""});
    setRole("");
  }
 

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Account Created!");
    clearForm();
  }
 
  return (
    <div className='App'>
      <h2>Feedback forms</h2>   
        <form onSubmit={handleSubmit}>
          <label>First Name</label>
          <div className='field' >
          <input
           
          className='button'
          value={firstName}
          onChange={(e) => handleText(e, setFirstName)}
          placeholder='First name'/>
          </div>
          <label>Last Name</label>
          <div >
          <input 
          className='button'
          value={lastName}
          onChange={(e) => handleText(e, setLastName)}
          placeholder='Last name'/>
          </div>
          <label>Email Address</label>
          <div >
          <input
          className='button'
          value={email}
          onChange={(e) => handleText(e, setEmail)}
          placeholder='Email address'/>
          </div>
          <label>
            Password <sup>*</sup>
          </label>
          <div >
          <input 
          id='password'
          type='password'
          className='button'
          value={password.value}
          onBlur={() => { setPassword({ ...password, isTouched: true }); }} 
          onChange={(e) => setPassword({...password, value: e.target.value})}
          placeholder='Password'/>
          {password.isTouched && password.value.length < 8 ? (<p className='sup'>Password should have at least 8 characters</p>) : null}
          </div>
            <label>
              Role <sup>*</sup>
              </label>
          <div>
          <select value={role} onChange={(e) => setRole(e.target.value)} className='button'>
            <option value="role">Role</option>
            <option value="individual">Individual</option>
            <option value="business">Business</option>
          </select>
          </div>
          <button disabled={!isFormValid()}>
            Submit
          </button>
        </form>
     </div>
  );
}

export default App;
