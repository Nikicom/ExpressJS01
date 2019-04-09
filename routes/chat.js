const express = require('express');
const router = express.Router();

router.get('/room', (req, res)=> {
   res.send('Chat Room');
});

router.get('/detail', (req, res)=> {
   res.send('Chat Detail');
});

module.exports = router;