const { nanoid } = require("nanoid");
const URL = require("../models/url");

async function handlegenerateNewShortUrl(req, res) {
    const body = req.body;
    if (!body.url) {
        return res.status(400).json({ message: "URL is required" });
    }
    const shortID = nanoid(8);
    await URL.create({
        shortId: shortID,
        redirectUrl: req.body.url,
        visitHistory: [],
    });
    return res.status(201).json({ shortId: shortID, message: "URL created successfully with short ID: " + shortID });
}

async function handlegetAnalytics(req, res) {
    const shortId = req.params.shortId;
    try {
        const entry = await URL.findOne({ shortId: shortId });

        if (!entry) {
            return res.status(404).json({ message: "Short URL not found" });
        }

        return res.status(200).json({
            totalClicks: entry.visitHistory.length,
            analytics: entry.visitHistory
        });
    } catch (error) {
        console.error('Error fetching analytics:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = {
    handlegenerateNewShortUrl,
    handlegetAnalytics,
};
