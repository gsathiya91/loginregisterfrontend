import './Register.css';
import { Link, useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function Register() {

    const [userName, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/register", {
                userName,
                email,
                password
            });

            response.data && navigate("/login")
        } catch (err) {
            toast.error(err.response.data);
        }
    }
    return (
        <>
            <div className="container">
                <h2>Register</h2>
                <Card className="form">
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label>User name</label>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="First Name"
                                required
                                onChange={e => setUsername(e.target.value)}
                            />
                        </div>
                        <div class="form-group">
                            <label >Email address</label>
                            <input
                                type="email"
                                class="form-control"
                                placeholder="Enter email"
                                required
                                onChange={e => setEmail(e.target.value)}
                            />

                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input
                                type="password"
                                class="form-control"
                                placeholder="Password"
                                minLength="8"
                                onChange={e => setPassword(e.target.value)}
                            />

                        </div>

                        <button type="submit" class="btn btn-primary">Submit</button><br />
                        <span className="btnspan">
                            Already have an account? <Link to="/login">Login</Link>
                        </span>

                    </form>
                </Card>

            </div>
        </>
    )
}

export default Register;