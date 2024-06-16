const express = require("express");
const urlRoute = require("./routes/url");
const app = express();
const path = require("path");

const URL = require("./models/url");

const { connectToMongoDB } = require("./connect");
const PORT = 3000;

connectToMongoDB("mongodb://localhost:27017/url-shortner")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/url", urlRoute);

// Serve static files from the views directory
app.use(express.static(path.join(__dirname, 'views')));

app.get('/:shortID', async (req, res) => {
    const shortID = req.params.shortID;
    try {
        const entry = await URL.findOneAndUpdate({
            shortId: shortID, // Correct field name
        }, {
            $push: {
                visitHistory: {
                    timestamp: Date.now(),
                },
            }
        }, { new: true }); // Ensure the updated document is returned

        if (!entry) {
            return res.status(404).send('URL not found');
        }

        res.redirect(entry.redirectUrl);
    } catch (error) {
        console.error('Error fetching the short URL:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
