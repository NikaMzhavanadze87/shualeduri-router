import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import axios from 'axios';
// import { Password } from '@mui/icons-material';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      setError('')
      if(!email || !password){
        setError('please fill your information')
        return
      }
      const response = await axios.post(
        'https://accounts.tnet.ge/api/ka/user/auth',
        {
          Email: email,
          Password: password,
        }
      );
      const token = response.data.data.acces_token;
      localStorage.setItem('accessToken', token);
      navigate('/products');

    } catch (error) {
      setError('your email or password is incorrect')
    }
  };

  return (
    <Box sx={{ maxWidth: 300, margin: 'auto', marginTop: 1 }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <TextField
          label="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
        />
        
        <TextField
          label="password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained">
          Login
        </Button>
        </form>
        <br/>
        <p style={{
            color:'red'

        }}>{error}</p>
    </Box>
  );
};

export default LoginPage;
