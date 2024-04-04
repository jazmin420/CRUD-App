import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Update() {
  const { id } = useParams();
  const [values, setValues] = useState({
    id: id,
    name: '',
    email: ''
  });

  useEffect(() => {
    axios.get('https://crud-app-vcpj.onrender.com/users/' + id)
      .then(res => {
        setValues({ ...values, name: res.data.name, email: res.data.email, phone: res.data.phone, position: res.data.position});
      })
      .catch(err => console.log(err));
  }, []);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put('https://crud-app-vcpj.onrender.com/users/' + id, values)
      .then(res => {
        navigate('/');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-secondary text-white p-5'>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              name='name' 
              className='form-control' 
              placeholder='Enter Name'
              value={values.name} 
              onChange={e => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              name='email' 
              className='form-control' 
              placeholder='Enter Email'
              value={values.email} 
              onChange={e => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input 
              type="number" 
              name='phone' 
              className='form-control' 
              placeholder='Enter Contact Number'
              value={values.phone} 
              onChange={e => setValues({ ...values, phone: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="phone">Position:</label>
            <input 
              type="text" 
              name='position' 
              className='form-control' 
              placeholder='Enter Current Position in company'
              value={values.position} 
              onChange={e => setValues({ ...values, position: e.target.value })}
            />
          </div>
          <br />
          <button className='btn btn-info'>Update</button>
        </form>
      </div>
    </div>
  );
}

export default Update;
