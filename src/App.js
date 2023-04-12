
import './App.css';
import { useState } from 'react';

function App() {

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const getAllUsers = async () => {
    const response = await fetch("http://localhost:4000/user/all")
    const data = await response.json()
    console.log(data);
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch("http://localhost:4000/user/signup", {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
  
      },
      body: JSON.stringify(userData)
    })

    const data = await response.json();
    console.log(data);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  }

  return (
    <div className="App">
      
      <h1>SignUp</h1>
      <form action="" onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" name="name" placeholder="Enter your name" value={userData.name} onChange={(e)=>handleChange(e)}/>
        <input type="text" name="email" placeholder="Enter your email"  value={userData.email} onChange={(e)=>handleChange(e)}/>
        <input type="text" name="password" placeholder="Enter your password" value={userData.password} onChange={(e)=>handleChange(e)}/>
        <button type="submit">SignUp</button>
      </form>

      <button onClick={getAllUsers}>GET ALL USERS</button>
    </div>
  );
}

export default App;
