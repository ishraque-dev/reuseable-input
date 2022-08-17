import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
function App() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const handelChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    // Assign new value to the appropriate form field
    const updatedForm = {
      ...form,
      [name]: value,
    };

    // Update state
    setForm(updatedForm);
  };
  const { name, email, password } = form;
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <Input
          input={{
            name: 'name',
            type: 'text',
            required: true,
            placeholder: 'Name',
          }}
          value={form.name}
          onChange={handelChange}
        />
        <Input
          input={{
            name: 'email',
            type: 'text',
            required: true,
            placeholder: 'email',
          }}
          value={form.email}
          onChange={handelChange}
        />
        <Input
          input={{
            name: 'password',
            type: 'text',
            required: true,
            placeholder: 'password',
          }}
          value={form.password}
          onChange={handelChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
