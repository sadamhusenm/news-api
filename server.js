const { getInfo, getNews, getSideNews, getFaq, getTeam, postFeedback } = require("./query");
const express = require("express");
const app = express();
app.use(express.json());

app.get('/', getInfo);

app.get("/api/news", getNews); 

app.get("/api/side-news", getSideNews);

app.get("/api/faq", getFaq);

app.get("/api/team", getTeam);

app.post("/api/feedback", postFeedback);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});