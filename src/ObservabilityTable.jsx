// src/ObservabilityTable.jsx

import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, Typography, Box, LinearProgress } from '@mui/material';

const ObservabilityTable = () => {
  const rows = [
    { 
      key: 'Key Characteristics', 
      crawl: ['Basic logging'], 
      walk: ['Detailed logging', 'Monitoring alerts'], 
      run: ['Real-time analytics', 'Automated detection and communication of poor performance', 'Deployment of specific models for distinct use cases'] 
    },
    { 
      key: 'Achievements / Attributes', 
      crawl: ['Basic Application logging', 'Ad hoc Prompt Engineering', 'Users call support to submit feedback'], 
      walk: ['LLM Evals in Deployment Pipeline', 'Prompt A|B Testing', 'Ability to observe LLM traces', 'RAG Relevance Scores', 'Users can submit feedback about LLM Performance'], 
      run: ['Safety Controls Implemented to limit unsafe (toxic) LLM output', 'Email Alerts to Product-Development Team when LLM produces undesired responses', 'Different LLMs used for specific tasks or purposes'] 
    },
    { 
      key: 'Business Impact', 
      crawl: ['Limited insights'], 
      walk: ['Improved decision making'], 
      run: ['Maximized ROI', 'Strategic insights'] 
    },
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Crawl</TableCell>
            <TableCell>Walk</TableCell>
            <TableCell>Run</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.key}</TableCell>
              <TableCell>
                {row.crawl.map((item, idx) => (
                  <Typography key={idx}>
                    <Checkbox checked={true} />
                    {item}
                  </Typography>
                ))}
              </TableCell>
              <TableCell>
                {row.walk.map((item, idx) => (
                  <Typography key={idx}>
                    <Checkbox checked={true} />
                    {item}
                  </Typography>
                ))}
              </TableCell>
              <TableCell>
                {row.run.map((item, idx) => (
                  <Typography key={idx}>
                    <Checkbox checked={true} />
                    {item}
                  </Typography>
                ))}
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={4}>
              <Box display="flex" alignItems="center">
                <Typography variant="body2" color="textSecondary" style={{ width: '15%' }}>
                  High Risk / Manual Effort
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={50}
                  sx={{
                    flexGrow: 1,
                    height: 10,
                    borderRadius: 5,
                    margin: '0 10px',
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light' ? '#f0f0f0' : '#303030',
                    '& .MuiLinearProgress-bar': {
                      borderRadius: 5,
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'light' ? '#81c784' : '#a5d6a7',
                    },
                  }}
                />
                <Typography variant="body2" color="textSecondary" style={{ width: '15%', textAlign: 'right' }}>
                  Low Risk / High Automation
                </Typography>
              </Box>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ObservabilityTable;
