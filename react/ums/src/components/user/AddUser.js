import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const AddUser = () => {

    const navigate = useNavigate();

    const initialState = {name:"", username:"", email:"", phone:"", website:""};

    const [user, setUser] = useState(initialState)

    const onChangeInput = (event) => {
        // console.log(event)
        // console.log(event.target.name)
        // console.log(event.target.value)
        setUser({...user, [event.target.name]: event.target.value})
    }

    const onFormSubmit = async (event) => {
        event.preventDefault();
        if(user.name === '') {
            alert('Please enter your name');
            return
        }
        if(user.username === '') {
            alert('Please enter your username');
            return
        }
        if(user.email === '') {
            alert('Please enter your email');
            return
        }
        if(user.phone === '') {
            alert('Please enter your phone number');
            return
        }

        await axios.post('http://localhost:5000/users', user)

        navigate('/')


    }

    return (
        <div className='container'>
            <div className='w-75 mx-auto p-5 shadow-sm rounded'>
                <h2 className='text-center mb-4'>Add User</h2>
                <form onSubmit={(event) => onFormSubmit(event)}>
                    <div className='form-group mb-3'>
                        <input type='text' 
                            className='form-control form-control-lg' 
                            placeholder='Enter your full name'
                            name='name'
                            value={user.name}
                            onChange={(event)=>onChangeInput(event)}                    
                        />
                    </div>
                    <div className='form-group mb-3'>
                        <input type='text' 
                            className='form-control form-control-lg' 
                            placeholder='Enter your username'
                            name='username'
                            value={user.username}
                            onChange={(event)=>onChangeInput(event)}                    
                        />
                    </div>
                    <div className='form-group mb-3'>
                        <input type='text' 
                            className='form-control form-control-lg'
                            placeholder='Enter your email'
                            name='email'
                            value={user.email}
                            onChange={(event)=>onChangeInput(event)}                    
                        />
                    </div>
                    <div className='form-group mb-3'>
                        <input type='text' 
                            className='form-control form-control-lg'
                            placeholder='Enter your phone number'
                            name='phone'
                            value={user.phone}
                            onChange={(event)=>onChangeInput(event)}                    
                        />
                    </div>
                    <div className='form-group mb-4'>
                        <input type='text' 
                            className='form-control form-control-lg'
                            placeholder='Enter your website'
                            name='website'
                            value={user.website}
                            onChange={(event)=>onChangeInput(event)}                    
                        />
                    </div>
                    <button type='submit' className='btn btn-primary col-12'>Add User</button>
                </form>
            </div>
        </div>
    )
}

export default AddUser
