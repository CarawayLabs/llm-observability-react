// src/App.jsx

import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import ObservabilityTable from './ObservabilityTable';

const App = () => {
  return (
    <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        my={4}
        sx={{ textAlign: 'center' }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          LLM Observability Framework
        </Typography>
        <Typography variant="body1" paragraph>
          The path to excellence in AI applications lies in mastering the observability of Large Language Models (LLMs). Observability is not merely a technical requirement but a discipline that combines expertise, innovative tools, and a proactive mindset. By embedding observability into the core of their operations, organizations can strengthen their LLM applications' reliability and uphold their brand's integrity.
        </Typography>
        <Typography variant="body1" paragraph>
          Developing a maturity model for LLM Observability is crucial for unlocking these benefits. By adopting an iterative approach to delivery, organizations can progressively enhance their observability practices, empowering teams to learn and adapt while delivering measurable business results.
        </Typography>
        <Typography variant="body1" paragraph>
          Embracing <strong>progress over perfection</strong> is key to sustaining momentum and driving innovation.
        </Typography>
        <ObservabilityTable />
      </Box>
    </Container>
  );
};

export default App;
