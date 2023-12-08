const pool = require("./db");

const getInfo = (request, response) => {
    response.send({ info: 'Node.js, Express, and Postgres API' })
  };

const getNews = (request, response) => {
    pool.query('SELECT * FROM news', (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows)
    })
  };

const getSideNews = (request, response) => {
    pool.query('SELECT * FROM side_news', (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows)
    })
  };

const getFaq = (request, response) => {
    pool.query('SELECT * FROM faq', (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows)
    })
  };

const getTeam = (request, response) => {
    pool.query('SELECT * FROM team', (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows)
    })
  };

const postFeedback = (request, response) => {
    const { name, country, subject, rating } = request.body;

    pool.query('INSERT INTO feedback (name, country, subject, rating) VALUES ($1, $2, $3, $4)', [name, country, subject, rating], (error, results) => { 
      if (error) {
        throw error;
      }
      response.status(201).send({message: 'Terimakasih atas feedbacknya!'});
    })
  };

module.exports = { getInfo, getNews, getSideNews, getFaq, getTeam, postFeedback };