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
          By defining a maturity model for observing LLM Applications, organizations can have increased confidence in the safety and robustness of their Generative AI-based products.
        </Typography>
        <ObservabilityTable />
      </Box>
    </Container>
  );
};

export default App;
