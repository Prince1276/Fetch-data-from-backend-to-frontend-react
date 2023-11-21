// backend/server.js
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '1234',
  port: 5432,
});

// Route to fetch and display all statuses
app.get('/statuses', async (req, res) => {
  try {
    const query = `
      SELECT status, COUNT(*) 
      FROM clientData 
      GROUP BY status`;
      
    const { rows } = await pool.query(query);
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Route to fetch and display data for 'Open Contract' status
app.get('/openContract', async (req, res) => {
  try {
    const query = `
      SELECT * 
      FROM clientData 
      WHERE status = 'Open Contract'`;
      
    const { rows } = await pool.query(query);
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Route to fetch and display data for 'Contract Deferral' status
app.get('/contractDeferral', async (req, res) => {
  try {
    const query = `
      SELECT * 
      FROM clientData 
      WHERE status = 'Contract Deferral'`;
      
    const { rows } = await pool.query(query);
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Route to fetch and display data for 'Newly Requested' status
app.get('/newlyRequested', async (req, res) => {
  try {
    const query = `
      SELECT * 
      FROM clientData 
      WHERE status = 'Newly Requested'`;
      
    const { rows } = await pool.query(query);
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Route to fetch and display data for 'Approval Pending' status
app.get('/approvalPending', async (req, res) => {
  try {
    const query = `
      SELECT * 
      FROM clientData 
      WHERE status = 'Approval Pending'`;
      
    const { rows } = await pool.query(query);
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Route to fetch and display data for 'In Review' status
app.get('/inReview', async (req, res) => {
  try {
    const query = `
      SELECT * 
      FROM clientData 
      WHERE status = 'In Review'`;
      
    const { rows } = await pool.query(query);
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
