import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function Read() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [Data, setdata] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/users/' + id)
      .then(res => setdata(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-light text-dark p-5'>
        <h3 className='text-center mb-5 text-primary'>Employee Info</h3>
        <div className='text-dark text-center'>
          <strong>
            <p>{Data.id}</p>
            <p>{Data.name}</p>
            <p>{Data.email}</p>
            <p>{Data.phone}</p>
            <p>{Data.position}</p>
          </strong>
          <Link to="/" className='btn btn-primary'>Back</Link>
        </div>
      </div>
    </div>
  );
}

export default Read;
