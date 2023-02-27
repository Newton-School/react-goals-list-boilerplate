import React, { useState } from 'react'
import '../styles/App.css';

const GoalForm = () => {
  const [formData, setFormData] = useState({
    goal: "",
    by: ""
  });

  return (
    <>
      <h1>My Goals</h1>
      <form>
        <input 
          type="text" 
          name='goal' 
          placeholder='Goal...' 
        />
        <input 
          type="text"
          name="by"
          placeholder='By...'
        />
        <button>Add</button>
      </form>
    </>
  )
}

const ListOfGoals = () => {
  return (
    <ul>
      <li>
          <p>My goal is to goalName, by goalDeadline.</p>
        </li>
    </ul>
  );
}

const App = () => {

  const [allGoals, setAllGoals] = useState([]);


  return (
    <div id="main">
      <GoalForm />
      <ListOfGoals />
    </div>
  )
}


export default App;
