const express = require('express');
const app = express();

// Define the port your server will run on
const PORT = process.env.PORT || 3000;

// Define the endpoint
app.get('/api', (req, res) => {
  const slackName = req.query.slack_name || 'example_name';
  const track = req.query.track || 'backend';
  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const utcTime = new Date().toISOString();

  // Construct the JSON response
  const jsonResponse = {
    "slack_name": "Johnkennedy",
    "utc_time": utcTime,
    "current_day": currentDay,
    "track": "backend",
    "github_file_url": "https://github.com/mathjken/hng-bk-task-1/blob/main/hng-task/app.js",
    "github_repo_url": "https://github.com/mathjken/hng-bk-task-1",
    "status_code": 200
  };

  res.json(jsonResponse);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


