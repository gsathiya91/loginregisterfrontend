import { Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import './Register.css';

function Logout() {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate("/login");
    }
    return (
        <>
            <Card className="containlogout">
                <h3>WELCOME</h3>
                <span>You have successfully logged in!!!</span><br />
                <button class="btn btn-success log" onClick={handleLogout}>Logout</button>
            </Card>
        </>
    )
}

export default Logout;