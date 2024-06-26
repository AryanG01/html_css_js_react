import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';

// function HomePage() {
//   return (
//     <div>
      
//     </div>
//   )
// }

const HomePage = () => {

    const [users, setUsers] = useState([]); //we are creating a users array and by default it is an empty array
    //const [emp, setEmp] = useState(''); // depends on what teh type is for the first variable

    //this will run only once when the component is loaded because dependency array is empty
    useEffect(() => {
        //getAllUsers();
        getAllUsersWithAwait();
    }, []); 
    
    const getAllUsersWithAwait = async () => {
        const result = await axios.get('http://localhost:5000/users');
        console.log(result);
        setUsers(result.data.reverse())
        console.log('After axios pi call')
    }
    
    // const getAllUsers = () => {
    //     axios.get('http://localhost:5000/users') //fetch data from the server
    //         .then((response) => {
    //             console.log(response.data); //if the data is fetched successfully
    //             //setUsers(response.data); //set the fetched data to the users array
    //         }) //if the data is fetched successfully
    //         .catch((error) => {
    //             console.log(error);
    //         }) //if there is an error while fetching the data from the API

    //     console.log('After axios pi call \n'); // axios api call is an asynchronous call
    // }

    return  (
        <div className='container'>
            <h2 className='py-3'>User Management System</h2>
            <Table striped bordered hover variant='dark'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <Link to='' className='btn btn-info me-3'>View</Link>
                                    <Link to='' className='btn btn-outline-info me-3'>Edit</Link>
                                    <Link to='' className='btn btn-danger'>Delete</Link>
                                </td>
                            </tr>
                        ))

                        // users.map((user, index) => {
                        //     return <tr key={index}>
                        //         <td>{index + 1}</td>
                        //         <td>{user.name}</td>
                        //         <td>{user.email}</td>
                        //         <td>{user.phone}</td>
                        //     </tr>
                        // })
                    }
                </tbody>
            </Table>
        </div>
    )
}
    

export default HomePage;
