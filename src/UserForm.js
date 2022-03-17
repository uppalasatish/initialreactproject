import React,{useState} from 'react';
import {Form, Button,Row, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import {useNavigate ,useLocation} from "react-router-dom";
import {set,ref} from 'firebase/database';
import {db} from './firebase';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import swal from 'sweetalert';
const UserForm = () =>{
	const [data,setData] = useState({
		firstname:'',
		middlename:'',
		email:''
	})
	const {firstname,middlename, email} = {...data};

	const changeHandler = e =>{
		setData({...data,[e.target.name]:e.target.value});
	}

	const history = useNavigate ();
	const addUser = async (data) =>{
		const response = await axios.post("http://localhost:5000/user",data);
		if(response.status === 200){
			console.log(response.data);
			swal({
			  	title: "Good job!",
			  	text: "You have added the user!",
			  	icon: "success",
			});
			history("/");
		}
	}



	const submitHandler = e =>{
		e.preventDefault();
		if(!firstname || !middlename || !email){
			alert("Please fill all the fileds");
			return false;
		}
		console.log(data);
		addUser(data);
		
		setData({
			firstname:'',
			middlename:'',
			email:''
		});
		
	}
	return(
		<>
		  	<Form onSubmit={submitHandler}>
		  		<Form.Group className="mb-3" controlId="formBasicFirstName">
            		<Form.Label>First Name</Form.Label>
            		<Form.Control type="text" name="firstname" value={firstname} onChange={changeHandler} placeholder="Enter first name" />
         		 </Form.Group>	
         		<Form.Group className="mb-3" controlId="formBasicMiddleName">
            		<Form.Label>Middle Name</Form.Label>
            		<Form.Control type="text" name="middlename" value={middlename} onChange={changeHandler} placeholder="Enter middle name" />
         		</Form.Group>	
          		<Form.Group className="mb-3" controlId="formBasicEmail">
            		<Form.Label>Email address</Form.Label>
        			<Form.Control type="email" name="email" value={email} onChange={changeHandler} placeholder="Enter email" />
        			<Form.Text className="text-muted">
          				We'll never share your email with anyone else.
        			</Form.Text>
         		</Form.Group>	
    
         		<Button variant="primary" type="submit">
            		Submit
          		</Button>
        	</Form>
		</>
	)
}

export default UserForm;