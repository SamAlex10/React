import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Typography
} from '@mui/material';

const LoginComponent = () => {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);

    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* Login Button */}
      <Button
        variant="contained"
        color="primary"
        data-testid="login"
        onClick={handleClickOpen}
      >
        Login
      </Button>

      {/* Dialog Box */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Username"
            type="text"
            fullWidth
            variant="outlined"
            data-testid="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            data-testid="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="primary"
            data-testid="cancel"
          >
            Cancel
          </Button>
          <Button
            onClick={handleLogin}
            color="primary"
            data-testid="dia-login"
          >
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LoginComponent;
