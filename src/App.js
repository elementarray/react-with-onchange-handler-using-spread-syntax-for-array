import { useState } from 'react';
import './App.css';

const myObj = {
    firstName: '',
    lastName: '',
    email: '',
  }
function App() {
  const [formData, setFormData] = useState(myObj);

  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure name and value for brevity
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value, // Dynamically update the property corresponding to the input's name
    }));
  };

  const updateFName = () => {
      setFormData({ ...formData, firstName: 'Bob' }); // Creates a new object
  };

  const updateLName = () => {
      setFormData(prevObject => ({ ...formData, lastName: "Jones" }));
    };

  return (
    <form>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <button type="button" onClick={updateFName}>change name</button>
      <button type="button" onClick={updateLName}>change name</button>
      <p>Current Form Data: {JSON.stringify(formData)}</p>
      <span>send the state data! (formData)</span>
      <p>Current Passed Object: {JSON.stringify(myObj)}</p>
      <span>NOT the object (myObj) passed to the useState hook...</span>
      <p>React does not care about the object that was passed to useState hook, 
        it only cares about the data in the useState hook!</p>
        <p><b>Reference Equality for Objects/Arrays:</b> For objects and arrays, 
        the shallow comparison checks if the reference to the object or array has changed, 
        not the contents within it.
        If you mutate an existing object or array in state 
        (e.g., myObject.property = newValue), 
        the reference remains the same, and React will not detect a change, thus not triggering a re-render.
        To trigger a re-render with objects or arrays, 
        you must create a new object or array with the updated values and pass that new reference to the setter function. 
        This ensures React detects a change in the reference and re-renders the component.</p>
      <p>React doesn't deeply inspect the contents of objects or arrays in useState to detect changes. 
        It relies on a change in the object/array reference to trigger re-renders. 
        Therefore, when working with objects or arrays in state, 
        always create new instances when updating to ensure React recognizes the change.</p>
        
    </form>
    
  );
}
export default App;
