import React, { useState } from 'react';
import axios from 'axios';

const AddUser = () => {
    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    });
    const { firstname, lastname, email, password } = user;
    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios
            .post('http://localhost:5000/api/users/', user)
            .then(() => {
                console.log('User added successfully');
            })
            .catch((err) => {
                console.log(err);
        })
    }

    return (
        <>
            <h1>Add user</h1>
            <form
                onSubmit={(e) => handleSubmit(e)}
                style={{ marginTop: '15rem', marginLeft: '30%' }}
            >
                <div>
                    <input
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                        value={firstname}
                        onChange={(e) => onInputChange(e)}
                    />
                </div>

                <div>
                    <input
                        type="text"
                        name="lastname"
                        placeholder="Last Name"
                        value={lastname}
                        onChange={(e) => onInputChange(e)}
                    />
                </div>

                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        value={email}
                        onChange={(e) => onInputChange(e)}
                    />
                </div>

                <div>
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => onInputChange(e)}
                    />
                </div>
                <button
                    type="submit"
                    style={{ marginTop: '2rem' }}
                >
                    Submit
                </button>
            </form>
        </>
    )
}

export default AddUser;