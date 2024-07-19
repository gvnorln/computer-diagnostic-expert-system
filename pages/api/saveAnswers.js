// pages/api/saveAnswers.js
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, answers } = req.body;

    if (!username || !answers) {
      return res.status(400).json({ error: 'Username and answers are required' });
    }

    try {
      const filePath = path.resolve('./public/answers.json');
      const fileData = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf-8') : '[]';
      const jsonData = JSON.parse(fileData);

      jsonData.push({ username, answers, timestamp: new Date() });

      fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));

      res.status(200).json({ message: 'Data saved successfully' });
    } catch (error) {
      console.error('Error saving data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
