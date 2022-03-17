import React, {useState,useEffect} from "react";
import {useHistory,useLocation,useParams, useNavigate } from "react-router-dom";
import {Form, Button,Row, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from "axios";
import swal from 'sweetalert';


const Useredit = () =>{
	const [state,setState] = useState({
		firstname:"",
		middlename:"",
		email:""
	});

	const {firstname,middlename,email} = state;
	const changeHandler = e =>{
		setState({...state,[e.target.name]:e.target.value});
	}

	const {id} = useParams();

	useEffect(()=>{
		if(id){
			getSingleUser(id);
		}
	},[id]);

	const history = useNavigate ();
	const getSingleUser = async (id) =>{
		const response = await axios.get(`http://localhost:5000/user/${id}`);
		if(response.status ===200){
			setState({...response.data[0]});
		}
	}
	const addUser = async (data) =>{
		const response = await axios.put(`http://localhost:5000/user/${id}`,data);
		if(response.status ===200){
			console.log("Updated");
			swal({
			  	title: "Good job!",
			  	text: "You have updated the user!",
			  	icon: "success",
			});
		}
		history("/");
	}

	const submitHandler = e =>{
		e.preventDefault();
		console.log(state);
		addUser(state);
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

export default Useredit;
