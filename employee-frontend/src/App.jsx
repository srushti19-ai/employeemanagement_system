import './App.css'
import { useState } from 'react'
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [employees, setEmployees] = useState([]);
  const [deleteId, setDeleteId] = useState('');

  const [updateId, setUpdateId] = useState('');
  const [updateName, setUpdateName] = useState('');
  const [updateEmail, setUpdateEmail] = useState('');
  const [updateDepartment, setUpdateDepartment] = useState('');

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

  const getEmployees = async () => {
  const response = await axios.get('http://localhost:8080/emp/display');

  setEmployees(response.data);
  };

  const deleteEmployee = async () => {
  await axios.delete(`http://localhost:8080/emp/${deleteId}`);

  getEmployees();
  setDeleteId('');
  };

  const updateEmployee = async () => {
  const employee = {
    name: updateName,
    email: updateEmail,
    department: updateDepartment
  };

  const response = await axios.put(
    `http://localhost:8080/emp/update/${updateId}`,
    employee
  );

  console.log(response.data);

  getEmployees();
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
      <div>
        <button type="button" onClick={getEmployees}>
          View Employees
        </button>
      </div>
      <div>
        <input
          type="number"
          value={deleteId}
          onChange={(e) => setDeleteId(e.target.value)}
          placeholder="Enter Employee ID"
        />

        <button type="button" onClick={deleteEmployee}>
          Delete Employee
        </button>
      </div><br />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <table border="1" >
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.department}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>

      <div>
        <div>
          <input type="number" value={updateId} onChange={(e) => setUpdateId(e.target.value)}
          placeholder="Enter Employee ID"/>
        </div>
        <div>
          <input type="text" value={updateName} onChange={(e) => setUpdateName(e.target.value)} placeholder="Enter your name"  />
        </div>
        <div>
          <input type="email" value={updateEmail} onChange={(e) => setUpdateEmail(e.target.value)} placeholder="Enter your email" />
        </div>
        <div>
          <input type="text" value={updateDepartment} onChange={(e) => setUpdateDepartment(e.target.value)} placeholder="Enter your Department" />
        </div>
        <div>
          <button type="button" onClick={updateEmployee}>
            Update Employee
          </button>
        </div>
      </div>

    </div>
    </>
  )
}

export default App






//style={{width: '400px', height: '400px', margin: 'auto', marginTop: '100px', textAlign: 'center'}}