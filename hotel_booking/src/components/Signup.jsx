import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Button,
    TextField,
    Typography,
    Card as MuiCard,
    Divider,
    IconButton
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    maxWidth: '300px', 
    maxHeight: '100%',
    width: '50%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    marginTop: '50px',
    backgroundColor: 'rgba(255, 255, 255, 0.30)',
    backdropFilter: 'blur(30px)',
    boxShadow: '0px 10px 95px rgba(0, 0, 0, 2.22)',
    borderRadius:'15px',
}));

const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [cpassword, setCpassword] = useState("");
    
    const [error, setError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    
    const [showPassword, setShowPassword] = useState(false); 
    const [showCpassword, setShowCpassword] = useState(false); 
    const navigate = useNavigate();

    const validateUsername = (username) => {
        const usernameRegex = /^[a-zA-Z0-9]+$/; 
        return username.length >= 3 && username.length <= 30 && usernameRegex.test(username);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,3}$/; // Updated regex to enforce domain length
        return email.length > 0 && emailRegex.test(email);
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/; 
        return password.length > 0 && passwordRegex.test(password);
    };

    const handler = async (e) => {
        e.preventDefault();
        setError("");
        setPasswordError("");

        if (!validateUsername(username)) {
            setError("Username must be between 3 and 30 characters and contain only letters and numbers.");
            return;
        }

        if (!validateEmail(email)) {
            setError("Invalid email format.");
            return;
        }

        if (!validatePassword(password)) {
            setPasswordError("Password must be at least 8 characters long and include letters, numbers, and special characters.");
            return;
        }

        if (password !== cpassword) {
            setPasswordError("Passwords do not match.");
            return;
        }

        const newUser = {
            name: username,
            password,
            email,
        };

        try {
            const response = await axios.post('http://localhost:3000/user', newUser);
            if (response.status === 201) {
                alert("User registered successfully!");
                navigate('/login'); 
            }
        } catch (err) {
            console.error("Error registering user:", err);
            setError("Failed to register user.");
        }
    };

 return (
     <Box sx={{ display: 'flex', fontFamily:'cursive' }}>
         <Box sx={{ margin:'0.5%', width: '100%', display: 'flex', justifyContent: 'center', fontFamily:'cursive', alignItems: 'center' }}>
             <Card variant="outlined">
                 <Typography variant="h5" sx={{ fontWeight: 'bold', fontFamily:'cursive', color:"black" }}>
                     Welcome to Our Hotel
                 </Typography>
                 <Typography variant="body1" sx={{ fontFamily:'cursive', fontSize:'10px', color:"black" }}>
                     Prioritizing Comfort and Joy
                 </Typography>
                 <Divider orientation="horizontal" />
                 <Typography component="h1" variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold', color:"black", mb: 1,fontFamily:'cursive' }}>
                     Signup
                 </Typography>
                 <Box component="form" onSubmit={handler} noValidate sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                     <TextField
                         label="Username"
                         variant="outlined"
                         required
                         fullWidth
                         value={username}
                         onChange={(e) => setUsername(e.target.value)}
                         error={!validateUsername(username) && username.length > 0}
                         helperText={!validateUsername(username) && username.length > 0 ? "Invalid username." : ""}
                        //  style={{ height:'49px' }} 
                     />
                     <TextField
                         label="Email"
                         type="email"
                         variant="outlined"
                         required
                         fullWidth
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         error={!validateEmail(email) && email.length > 0}
                         helperText={!validateEmail(email) && email.length > 0 ? "Invalid email format." : ""}
                        //  style={{ height:'49px' }} 
                     />
                     <Box sx={{ position: 'relative' }}>
                         <TextField
                             label="Password"
                             type={showPassword ? 'text' : 'password'}
                             variant="outlined"
                             required
                             fullWidth
                             value={password}
                             onChange={(e) => setPassword(e.target.value)}
                             error={!validatePassword(password) && password.length > 0}
                             helperText={!validatePassword(password) && password.length > 0 ? "Invalid password." : ""}
                            //  style={{ height:'49px' }} 
                         />
                         <IconButton
                             onClick={() => setShowPassword(!showPassword)}
                             sx={{
                                 position: 'absolute',
                                 right: 0,
                                 top: '50%',
                                 transform: 'translateY(-50%)',
                             }}
                         >
                             {showPassword ? <VisibilityOff /> : <Visibility />}
                         </IconButton>
                     </Box>
                     <Typography sx={{ fontSize:'9px', fontFamily:'cursive' }}>Password should contain at least one character, number, symbol and length should be greater than or equal to 8.</Typography>
                     
                     <Box sx={{ position: 'relative' }}>
                         <TextField
                             label="Confirm Password"
                             type={showCpassword ? 'text' : 'password'}
                             variant="outlined"
                             required
                             fullWidth
                             value={cpassword}
                             onChange={(e) => setCpassword(e.target.value)}
                             error={cpassword !== password && cpassword.length > 0}
                             helperText={cpassword !== password && cpassword.length > 0 ? "Passwords do not match." : ""}
                         />
                         <IconButton
                             onClick={() => setShowCpassword(!showCpassword)}
                             sx={{
                                 position: 'absolute',
                                 right: 0,
                                 top: '50%',
                                 transform: 'translateY(-50%)',
                             }}
                         >
                             {showCpassword ? <VisibilityOff /> : <Visibility />}
                         </IconButton>
                     </Box>

                     <Button type="submit" variant="contained" fullWidth>
                         Signup
                     </Button>
                     {error && <Typography color="error">{error}</Typography>}
                     {passwordError && <Typography color="error">{passwordError}</Typography>}
                     <Divider sx={{ mx: 2 }} />
                     
                     <Typography align="center">
                         Already have an account? 
                         <span style={{ cursor: 'pointer', color:"black", fontWeight: 'bold' }} onClick={() => navigate('/login')}>
                             Login
                         </span>
                     </Typography>
                 </Box>
             </Card>
         </Box>
     </Box>
 );
};

export default Signup;




