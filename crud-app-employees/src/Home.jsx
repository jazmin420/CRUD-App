import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  // function handleDelete(id) {
  //   const confirm = window.confirm("Do you like to Delete?");
  //   if(confirm) {
  //     axios.delete('http://localhost:3000/users/'+id)
  //       .then(res => {
  //         alert("Record Deleted");
  //         window.location.reload();
  //       });
  //   }
  // }


  const [show, setShow] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setIdToDelete(id);
    setShow(true);
  };

  const handleDelete = () => {
    axios.delete('http://localhost:3000/users/' + idToDelete)
      .then(res => {
        window.location.reload();
      });
  };

  return (
   <>
      <div className='bg-primary'><h2 className='text-white p-2'>GoTech Company</h2></div>
      <div className='container border mt-5'>
        <h3 className='text-center mt-2'>Employee Details</h3>
        <Link to="/create" className='btn btn-success my-3'>Add Info +</Link>
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>                    
              <th>Name</th>                    
              <th>Email</th>
              <th>Phone</th>
              <th>Position</th>                  
              <th>Action</th>                
            </tr>            
          </thead>            
          <tbody>                
            {data.map((d, i) => (                    
              <tr key={i}>                        
                <td>{d.id}</td>                        
                <td>{d.name}</td>                        
                <td>{d.email}</td>
                <td>{d.phone}</td>
                <td>{d.position}</td>                          
                <td>
                  <Link className='text-decoration-none btn btn-sm btn-dark me-1' to={`/read/${d.id}`}>Read</Link>                            
                  <Link className='text-decoration-none btn btn-sm btn-success' to={`/update/${d.id}`}>Update</Link>                            
                  <button className='text-decoration-none btn btn-sm btn-danger mx-1' onClick={()=>handleShow(d.id)}>Delete</button>                                                    
                </td>                    
              </tr>                
            ))}            
          </tbody>        
        </table>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body><strong>Do you want to delete ?</strong></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>

    
   
   </>
  );
}

export default Home;
