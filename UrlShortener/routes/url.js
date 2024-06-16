const express = require("express");
const { handlegenerateNewShortUrl, handlegetAnalytics } = require("../controllers/url");

const router = express.Router();

router.post('/', handlegenerateNewShortUrl);

router.get('/analytics/:shortId', handlegetAnalytics);

module.exports = router;
