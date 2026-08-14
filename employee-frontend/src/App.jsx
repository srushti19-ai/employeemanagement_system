import './App.css'
import { useState } from 'react'
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');

  const saveEmployee = async () => {
    const employee = {
    name: name,
    email: email,
    department: department
    };

    const response = await axios.post(
    'http://localhost:8080/emp/all',
    employee
    );

    console.log(response.data);
  };

  return (
    <>
    <div border='2px solid black' >
      <h5>hii {name}</h5>
      <h2>Welcome to Registration Page</h2>
      <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name"  />
      </div>
      <div>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
      </div>
      <div>
        <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} placeholder="Enter your Department" />
      </div>
      <div>
        <button type="button" onClick={saveEmployee}>Submit</button>
      </div>
    </div>
    </>
  )
}

export default App






//style={{width: '400px', height: '400px', margin: 'auto', marginTop: '100px', textAlign: 'center'}}