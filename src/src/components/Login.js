import { useState } from "react";
import './Register.css';
import { Link, useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import axios from "axios";
import { toast } from 'react-toastify';

function Login(){

    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate();

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post("http://localhost:5000/login",{
                userName: userName,
                password: password
            })
        if(response.data) {
            await localStorage.setItem('token', response.data)
            navigate("/home");
        }
           
        } catch (err) {
            toast.error(err.response.data);
             
        }
    }
    return(
       <div className="container">
        <h2>Login</h2>
        <Card className="forms">
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label >User name</label>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Enter username"
                            required
                            value={userName}
                            onChange={e=> setUsername(e.target.value)}
                            />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            class="form-control"
                            placeholder="Password"
                            minLength="8"
                            required
                            value={password}
                            onChange={e=> setPassword(e.target.value)} 
                            />
                    </div>
                    <button type="submit" class="btn btn-primary">Login</button><br />
                    
                    <span className="btnspan">
                        Don't have an account? <Link to="/">Register</Link>
                    </span>
                </form>
            </Card>
        </div>
    )
}

export default Login;