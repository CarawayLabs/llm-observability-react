// src/ObservabilityTable.jsx

import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, Typography } from '@mui/material';

const ObservabilityTable = () => {
  const rows = [
    { key: 'Key Characteristics', crawl: ['Basic logging'], walk: ['Detailed logging', 'Monitoring alerts'], run: ['Real-time analytics', 'Automated anomaly detection'] },
    { key: 'Achievements / Attributes', crawl: ['Basic Application logging', 'Ad hoc Prompt Engineering', 'Users call support to submit feedbac'], walk: ['LLM Evals in Deployment Pipeline', 'Prompt A|B Testing', 'Ability to observe LLM traces', 'Users can submit feedback about LLM Performance'], run: ['insights', 'Predictive analytics', 'Email Alerts to Product-Development Team when LLM produces undesired responses'] },
    { key: 'Business Impact', crawl: ['Limited insights'], walk: ['Improved decision making'], run: ['Maximized ROI', 'Strategic insights'] },
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
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ObservabilityTable;
