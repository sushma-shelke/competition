import React, { useEffect, useState } from 'react';
import { Avatar, Button, Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';

const UserDetail = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }, []);

    console.log("user from detail",user);

  return (
    <>
    <Grid Container xs={8} style={{backgroundColor:'#fff444', width:"80%"}}>
    <Container>
     
      <Profile>
        <Avatar src="/path/to/avatar.jpg" alt="Samantha Jones" sx={{ width: 80, height: 80 }} />
        <Typography variant="h5">Samantha Jones</Typography>
        <Typography variant="subtitle1">New York, United States</Typography>
        <Typography variant="body1">
          Web Producer - Web Specialist<br />
          Columbia University - New York
        </Typography>
       
      
      </Profile>
    </Container>
    </Grid>
    </>
  );
}

export default UserDetail;

// Styled components
const Container = styled(Box)(({ theme }) => ({
  maxWidth: '400px',
  margin: '0 auto',
  marginTop:'20px',
  padding: '20px',
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
}));

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px',
}));

const IconButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#f50057',
  color: '#fff',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  minWidth: '40px',
  minHeight: '40px',
}));

const Profile = styled(Box)(({ theme }) => ({
  padding: '20px',
}));

const Stats = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  margin: '20px 0',
}));

const Stat = styled(Box)(({ theme }) => ({
  textAlign: 'center',
}));
