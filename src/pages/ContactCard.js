import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { ThemeProvider, createMuiTheme } from '@mui/material/styles';

const theme = createMuiTheme();

const ContactCard = ({ name, email, phone }) => {
  const cardStyle = {
    minWidth: 275,
    maxWidth: 400,
    margin: '20px',
  };

  return (
    <ThemeProvider theme={theme}>
      <Card style={cardStyle}>
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography color="text.secondary" gutterBottom>
            Email: {email}
          </Typography>
          <Typography color="text.secondary">Phone: {phone}</Typography>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};

export default ContactCard;