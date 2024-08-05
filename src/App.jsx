// src/App.jsx

import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import ObservabilityTable from './ObservabilityTable';

const App = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          LLM Observability Framework
        </Typography>
        <Typography variant="body1" paragraph>
          Observability is a disciplene comprised of skilled professionals, specific tools and a unique mindset. With the succesful combination of these components, organizations can acieve increased confidence in their LLM Applications and maintain their brand integrity. 
          
          By defining a maturity model for observing LLM Applications, organizations can realize these benefits through an iterative delivery process. By focusing on incremental delivery, we can grow the Observability Discipline, grow the knowledge of the team and deliver business results sooner. 

          We must achieve progress over perfection. 
        </Typography>
        <ObservabilityTable />
      </Box>
    </Container>
  );
};

export default App;
