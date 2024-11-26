const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;
const cors = require('cors');

app.use(cors());

// middleware
app.use(express.json());


router.post('/signup', (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM users WHERE email = ?', [email], (error, results) => {
    if (error) {
      return res.status(500).json({ message: '註冊失敗' });
    }

    if (results.length > 0) {
      return res.status(400).json({ message: '此 email 已註冊' });
    }

    db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, password], (error, results) => {
      if (error) {
        return res.status(500).json({ message: '註冊失敗' });
      }

      res.json({ message: '註冊成功' });
    });
  });
});

app.use('/api', router);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});