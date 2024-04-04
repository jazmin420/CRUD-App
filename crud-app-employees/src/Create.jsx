import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Create() {
  const [inputData, setInputData] = useState({
    name: '',
    email: '',
    phone: '',
    position: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://crud-app-vcpj.onrender.com/users', inputData)
      .then(res => {
        alert("Data Posted Successfully!");
        navigate('/');
      });
  };

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-primary text-white p-5'>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              name='name' 
              className='form-control'
              onChange={e => setInputData({...inputData, name: e.target.value})}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              name='email' 
              className='form-control'
              onChange={e => setInputData({...inputData, email: e.target.value})}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input 
              type="number" 
              name='phone' 
              className='form-control'  
              onChange={e => setInputData({ ...inputData, phone: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="phone">Position:</label>
            <input 
              type="text" 
              name='position' 
              className='form-control' 
              onChange={e => setInputData({ ...inputData, position: e.target.value })}
            />
          </div>
          
         <br />
          <button className='btn btn-dark' onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
