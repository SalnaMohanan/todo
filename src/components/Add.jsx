import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { saveTaskAPI } from '../server/allAPI';

const Add = () => {

    const[taskDetails,setTaskDetails]=useState({
        title:"",description:"", deadline:"",level:"",status:""
    })
    console.log(taskDetails);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleTaskBook =async()=>{
        
        const{title,description,deadline,level,status}=taskDetails
        if(title && description && deadline &&  level && status){
            try{
                const result = await saveTaskAPI(taskDetails)
                if(result.status>=200 && result.status<300){
                    alert("TASK details upload successfuly!!")
                    handleClose()
                }else{
                    console.log(result);
                    
                }

            }catch(err){
                console.log(err);
                
            }

        }else{
            alert("please fill the form complet!!")
        }

    }
    

  return (
    <div>
        <div className='d-flex align-items-center'>
        <h4>Add Task</h4>
        <button onClick={handleShow} className='btn btn-info ms-3 rounded fw-bolder fs-5' >+</button>
    </div>
    <div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>TO-DO LIST</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
            <div> 
            <FloatingLabel className='mt-2' controlId="floatingtitle" label="title">
              <Form.Control onChange={e=>setTaskDetails({...taskDetails,title:e.target.value})} type="text" placeholder="Enter title" />
            </FloatingLabel>
            <FloatingLabel className='mt-2' controlId="floatingdescription" label="description">
              <Form.Control onChange={e=>setTaskDetails({...taskDetails,description:e.target.value})}  type="text" placeholder="Enter description" />
            </FloatingLabel>
            <FloatingLabel className='mt-2' controlId="floatingdeadline" label="deadline">
              <Form.Control onChange={e=>setTaskDetails({...taskDetails,deadline:e.target.value})}  type="text" placeholder="Enter deadline" />
            </FloatingLabel>
            <FloatingLabel className='mt-2' controlId="floatinglevel" label="level">
              <Form.Control onChange={e=>setTaskDetails({...taskDetails,level:e.target.value})}  type="text" placeholder="Enter level" />
            </FloatingLabel>
            <FloatingLabel className='mt-2' controlId="status" label="completion status">
              <Form.Control onChange={e=>setTaskDetails({...taskDetails,status:e.target.value})}  type="text" placeholder="Enter completion status" />
            </FloatingLabel>
            </div>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleTaskBook} >
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </div>
  )
}

export default Add