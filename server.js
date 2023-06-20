const fs = require('fs');
const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

// Serve the musicDB JSON directly
app.get('/music', (req, res) => {
  const filePath = path.join(__dirname, 'music.js');

  try {
    const musicDBJson = fs.readFileSync(filePath, 'utf8');
    const musicDB = JSON.parse(musicDBJson);
    res.json(musicDB);
  } catch (error) {
    console.error('Error reading musicDB:', error);
    res.status(500).send('Error reading musicDB');
  }
});

// Update the musicDB JSON
app.put('/music', (req, res) => {
  const updatedMusicDB = req.body;
  const filePath = path.join(__dirname, 'music.js');

  try {
    const updatedMusicDBJson = JSON.stringify(updatedMusicDB, null, 2);
    fs.writeFileSync(filePath, `module.exports = ${updatedMusicDBJson};`);
    res.send('musicDB updated successfully');
  } catch (error) {
    console.error('Error updating musicDB:', error);
    res.status(500).send('Error updating musicDB');
  }
});

// Add new music to the musicDB JSON
app.post('/music', (req, res) => {
  const newMusic = req.body;
  const filePath = path.join(__dirname, 'music.js');

  try {
    const musicDBJson = fs.readFileSync(filePath, 'utf8');
    const existingMusicDB = JSON.parse(musicDBJson);

    // Generate a new ID for the music item
    const maxId = existingMusicDB.reduce((max, music) => Math.max(max, music.id || 0), 0);
    newMusic.id = maxId + 1;

    // Append the new music item to the array
    existingMusicDB.push(newMusic);

    const updatedMusicDBJson = JSON.stringify(existingMusicDB, null, 2);
    fs.writeFileSync(filePath, updatedMusicDBJson);
    res.send('musicDB updated successfully');
  } catch (error) {
    console.error('Error updating musicDB:', error);
    res.status(500).send('Error updating musicDB');
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
