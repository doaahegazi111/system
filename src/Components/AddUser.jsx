import React from 'react'

function AddUser() {
    return (
        <div className="ADD">
            <div className='AddUser'>
            <caption>Add USER</caption>
            <form action="" className="form">
                <input type="text" placeholder='User ID *'/>
                <input type="text" placeholder='First Name *'/>
                <input type="text" placeholder='last Name *'/>
                <input type="email" placeholder='Email ID *'/>
                <input type="number" placeholder='Mobile NO *'/>
                <input type="text" placeholder='User Name *'/>
                <input type="password" placeholder='password *'/>
            </form>
        </div>
        </div>
    )
}

export default AddUser