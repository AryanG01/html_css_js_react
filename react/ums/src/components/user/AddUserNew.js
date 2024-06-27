import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddUserNew = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [website, setWebsite] = useState('');
    const [existingUsers, setExistingUsers] = useState([]);

    useEffect(() => {
        fetchExistingUsers();
    }, []);

    const fetchExistingUsers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/users');
            setExistingUsers(response.data);
        } catch (error) {
            console.error('Error fetching existing users:', error);
        }
    };

    const onNameChange = (e) => {
        setName(e.target.value);
    };

    const onUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const onPhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const onWebsiteChange = (e) => {
        setWebsite(e.target.value);
    };

    const onFormSubmit = async (event) => {
        event.preventDefault();
        if (!name) {
            alert('Please enter your name');
            return;
        }
        if (!username) {
            alert('Please enter your username');
            return;
        }
        if (!email) {
            alert('Please enter your email');
            return;
        }
        if (!phone) {
            alert('Please enter your phone number');
            return;
        }

        const isDuplicateEntry = existingUsers.some(
            (user) => user.username === username || user.email === email
        );

        if (isDuplicateEntry) {
            alert('Duplicate entry found. Please enter unique username and email.');
            return;
        }

        const user = { name, username, email, phone, website };

        try {
            await axios.post('http://localhost:5000/users', user);
            navigate('/');
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    return (
        <div className='container'>
            <div className='w-75 mx-auto p-5 shadow-sm rounded'>
                <h2 className='text-center mb-4'>Add User</h2>
                <div>
                    <div className='form-group mb-3'>
                        <input
                            type='text'
                            className='form-control form-control-lg'
                            placeholder='Enter your full name'
                            name='name'
                            value={name}
                            onChange={onNameChange}
                        />
                    </div>
                    <div className='form-group mb-3'>
                        <input
                            type='text'
                            className='form-control form-control-lg'
                            placeholder='Enter your username'
                            name='username'
                            value={username}
                            onChange={onUsernameChange}
                        />
                    </div>
                    <div className='form-group mb-3'>
                        <input
                            type='text'
                            className='form-control form-control-lg'
                            placeholder='Enter your email'
                            name='email'
                            value={email}
                            onChange={onEmailChange}
                        />
                    </div>
                    <div className='form-group mb-3'>
                        <input
                            type='text'
                            className='form-control form-control-lg'
                            placeholder='Enter your phone number'
                            name='phone'
                            value={phone}
                            onChange={onPhoneChange}
                        />
                    </div>
                    <div className='form-group mb-4'>
                        <input
                            type='text'
                            className='form-control form-control-lg'
                            placeholder='Enter your website'
                            name='website'
                            value={website}
                            onChange={onWebsiteChange}
                        />
                    </div>
                    <button onClick={onFormSubmit} className='btn btn-primary col-12'>
                        Add User
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddUserNew;
