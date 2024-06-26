import React from 'react'
import Button from 'react-bootstrap/Button';
import './PageNotFound.css'

function PageNotFound() {
return (
    <div className='hide-navbar'>
            <h1>404 Page you are looking for does not exist</h1>
            <button className='btn btn-primary' onClick={() => window.location.href = '/'}>Normal Boostrap</button>
            <Button className='m-2' variant="primary" onClick={() => window.history.back()}>React Boostrap</Button>{' '}
    </div>
)
}

export default PageNotFound
