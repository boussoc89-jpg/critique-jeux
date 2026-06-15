require("dotenv").config();
const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const axios = require("axios");

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://critique-jeux-6htg-pink.vercel.app",
    ],
  }),
);
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { error: "Trop de requêtes, réessaie plus tard." },
});
app.use(limiter);

app.get("/api/games", async (req, res) => {
  try {
    const { search, page = 1, ordering, genre } = req.query;
    const params = {
      key: process.env.RAWG_API_KEY,
      page_size: 20,
      page,
      ...(search && { search }),
      ...(ordering && { ordering }),
      ...(genre && { genres: genre }),
    };
    const response = await axios.get(`${process.env.RAWG_API_URL}/games`, {
      params,
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
});

app.get("/api/export", async (req, res) => {
  try {
    const response = await axios.get(`${process.env.RAWG_API_URL}/games`, {
      params: {
        key: process.env.RAWG_API_KEY,
        page_size: 10,
        ordering: "-rating",
      },
    });
    res.json({
      exportDate: new Date().toISOString(),
      totalItems: response.data.count,
      topResults: response.data.results.map((g) => ({
        name: g.name,
        rating: g.rating,
        genre: g.genres?.[0]?.name || "N/A",
        released: g.released,
      })),
    });
  } catch (err) {
    res.status(500).json({ error: "Erreur export" });
  }
});

app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ error: err.message || "Erreur interne" });
});

app.listen(process.env.PORT, () =>
  console.log(`✅ Backend lancé sur http://localhost:${process.env.PORT}`),
);
