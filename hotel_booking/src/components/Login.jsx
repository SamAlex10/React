import * as React from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
    Card as MuiCard,
    Avatar,
    Divider
} from '@mui/material'; 
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    maxWidth: '300px',  // Smaller card
    maxHeight: '550px',  // Smaller card
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(30px)',
    boxShadow: '0px 10px 95px rgba(0, 0, 0, 2.22)',
    borderRadius:'15px',
}));

const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full viewport height
}));

export default function Login() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [users, setUsers] = React.useState([]);
    const [error, setError] = React.useState("");
    const navigate = useNavigate();

    React.useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3000/user');
                setUsers(response.data);
            } catch (err) {
                console.error("Error fetching users:", err);
                setError("Failed to fetch user data.");
            }
        };

        fetchUsers();
    }, []);

    const handler = (e) => {
        e.preventDefault();
        setError("");

        const user = users.find(user => user.name === username);
        if (user) {
            if (user.password === password) {
                navigate('/'); // Redirect to appointment page
            } else {
                setError("Invalid Username or Password");
            }
        } else {
            setError("Invalid Username or Password");
        }
    };

    const handleSignUpRedirect = () => {
        navigate('/signup');
    }

    return (   
        <Container sx={{ display: 'flex', fontFamily:'cursive' }}>
            <Card variant="outlined">
                <Avatar 
                    alt="User Avatar" 
                    src="/images/hhh.png"
                    sx={{ width: 60, height: 56, marginBottom: 2 }} 
                />
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', color:"black",fontFamily:'cursive' }}>
                        Welcome to Our Hotel
                    </Typography>
                    <Typography variant="body1" sx={{ fontStyle: 'italic', color:"black" , fontSize:'10px',fontFamily:'cursive' }}>
                        Prioritizing Comfort and Joy
                    </Typography>
                </Box>
                <Divider/>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography component="h1" variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold', color:"black", mb: 4,fontFamily:'cursive' }}>
                        Login
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handler}
                        noValidate
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            gap: 2,
                        }}
                    >
                        <TextField
                            label="Username"
                            variant="outlined"
                            required
                            fullWidth
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            label="Password"
                            type="password"
                            variant="outlined"
                            required
                            fullWidth
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {error && <Typography color="error">{error}</Typography>}
                        
                        <Button type="submit" variant="contained" style={{ width:'50%', margin: 'auto' }}>
                            Login
                        </Button>
                        
                        {/* Vertical Divider */}
                        <Divider sx={{ mx: 2 }} />
                        
                        <Typography align="center" sx={{fontFamily:'cursive' }}>
                            Don't have an account? 
                            <span style={{ cursor: 'pointer',color:"black", fontWeight: 'bold' }} onClick={handleSignUpRedirect}>
                                Sign Up
                            </span>
                        </Typography>
                        
                    </Box>
                </Box>
            </Card>
        </Container>
    );
}

//qwe!@#123W