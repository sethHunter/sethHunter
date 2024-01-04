// Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Seth Hunter</Typography>
        <Button color="inherit" href="/sethHunter">
          Home
        </Button>
        <Button color="inherit" href="/SethHunter/contact">
          Contact
        </Button>
        <Button color="inherit" href="/SethHunter/projects">
          Projects
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
