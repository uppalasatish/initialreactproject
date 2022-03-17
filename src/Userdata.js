import React,{useState,useEffect} from 'react';
import {Form, Button,Row, FormGroup, FormControl, ControlLabel,Table } from "react-bootstrap";
import {set,ref} from 'firebase/database';
import {db} from './firebase';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import swal from 'sweetalert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Userdata = () =>{
	const [data,setData] = useState([]);
	

	useEffect(()=>{
		getUsers();
		console.log("useeffct");
	},[]);

	const onDeleteUser = async (id) =>{
		if(window.confirm("Are you sure that you ant to delete user")){
			const response = await axios.delete(`http://localhost:5000/user/${id}`);
			if(response.status ===200){
				console.log("USer deleted");
				swal({
			  	title: "Good job!",
			  	text: "You have deleted the user!",
			  	icon: "success",
				});
				getUsers();
			}
		}
	}

	const getUsers = async () => {
		const response = await axios.get("http://localhost:5000/users");
		if(response.status ===200){
			setData(response.data);
		}
		console.log(response.data);
	};

	return(
		<>
		  	<Table striped bordered hover>
  				<thead>
				    <tr>
				      	<th>#</th>
				      	<th>First Name</th>
				      	<th>Last Name</th>
				      	<th>Email</th>
				      	<th>Action</th>
				    </tr>
  				</thead>
  				<tbody>
 					{data && data.map((item,index)=>{
 						return(
 							<tr key={index}>
 								<td scope="row">{index+1}</td>
 								<td scope="row">{item.firstname}</td>
 								<td scope="row">{item.middlename}</td>
 								<td scope="row">{item.email}</td>
 								<td>
 									<Link to={`/edit/${item.id}`}>
 										<button className="btn btn-edit">Edit</button>
 									</Link>	
 									<button className="btn btn-delete" onClick={()=>onDeleteUser(item.id)}>Delete</button>	
 								</td>
 							</tr>
 						)
 					})}
  				</tbody>
			</Table>
		</>
	)
}

export default Userdata;