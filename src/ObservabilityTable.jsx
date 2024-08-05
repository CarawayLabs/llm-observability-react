// src/ObservabilityTable.jsx

import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  LinearProgress,
} from '@mui/material';

const ObservabilityTable = () => {
  const rows = [
    {
      key: 'Key Characteristics',
      crawl: [
        'Establish foundational components of observability',
        'Basic data logging and monitoring practices',
        'Collect information on performance and interactions',
        'Focus on understanding usage patterns and gathering feedback',
        'Limited metrics and reliance on human insights',
      ],
      walk: [
        'Structured approach to observability',
        'Automated evaluation processes for LLM responses',
        'Integration of prompt A/B testing',
        'Safety controls to reduce undesirable outputs',
        'Enhanced ability to observe and validate performance',
      ],
      run: [
        'Robust automated monitoring systems',
        'Real-time analytics and swift reaction to events',
        'Advanced predictive analytics and modular setups',
        'Automated alerts for performance issues and model drift',
        'Leverage rich insights for improved experiences and efficiencies',
      ],
    },
    {
      key: 'Business Outcomes',
      crawl: [
        'Rudimentary understanding of user interactions',
        'Baseline application performance',
        'Foundation for informed development decisions',
      ],
      walk: [
        'Data-driven optimization of LLM offerings',
        'Enhanced user satisfaction through quality responses',
        'Proactive risk mitigation for model outputs',
      ],
      run: [
        'Resilient and adaptive LLM systems',
        'Minimized operational risks and maximized satisfaction',
        'Continuous evolution through strategic adjustments',
      ],
    },
    {
      key: 'Functional Requirements',
      crawl: [
        'Basic Application Logging',
        'Ad hoc Prompt Engineering',
        'Users call support to submit feedback',
        'Manual tracking of user satisfaction',
        'Limited observability into errors and metrics',
        'Basic incident reporting for problematic interactions',
        'Collection of preliminary user behavior data',
      ],
      walk: [
        'LLM Evaluations in Deployment Pipeline',
        'Prompt A/B Testing for better performance',
        'Capability to observe LLM traces and spans',
        'RAG Relevance Scores',
        'User-Reported Feedback Mechanism',
        'Implementation of Safety Controls (LLM Guardrails)',
        'Systematic analysis of logging data',
      ],
      run: [
        'Automated alerts for LLM Guardrails breaches',
        'Email Alerts for undesired responses or anomalies',
        'Deployment of LLMs for specific tasks',
        'Automated alerts for model drift',
        'Comprehensive dashboards with real-time metrics',
        'Continuous performance evaluations',
        'Advanced user feedback loops',
      ],
    },
  ];

  return (
    <TableContainer component={Paper} sx={{ maxWidth: 900, margin: 'auto', marginTop: 4 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5', textAlign: 'center' }}></TableCell>
            <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem', textAlign: 'center', backgroundColor: '#e0f7fa' }}>
              Crawl
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem', textAlign: 'center', backgroundColor: '#b2ebf2' }}>
              Walk
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem', textAlign: 'center', backgroundColor: '#80deea' }}>
              Run
            </TableCell>
          </TableRow>
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
                    backgroundColor: (theme) => (theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'),
                    '& .MuiLinearProgress-bar': {
                      borderRadius: 5,
                      backgroundColor: (theme) => (theme.palette.mode === 'light' ? '#81c784' : '#a5d6a7'),
                    },
                  }}
                />
                <Typography variant="body2" color="textSecondary" style={{ width: '15%', textAlign: 'right' }}>
                  Low Risk / High Automation
                </Typography>
              </Box>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index} sx={{ '&:nth-of-type(even)': { backgroundColor: '#f9f9f9' } }}>
              <TableCell sx={{ fontWeight: 'bold', width: '20%' }}>{row.key}</TableCell>
              <TableCell>
                {row.crawl.map((item, idx) => (
                  <Typography key={idx}>
                    • {item}
                  </Typography>
                ))}
              </TableCell>
              <TableCell>
                {row.walk.map((item, idx) => (
                  <Typography key={idx}>
                    • {item}
                  </Typography>
                ))}
              </TableCell>
              <TableCell>
                {row.run.map((item, idx) => (
                  <Typography key={idx}>
                    • {item}
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
