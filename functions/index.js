const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const getColors = require('get-image-colors');

const app = express();
app.use(cors());

// Esempio: endpoint Gen1 (aggiungi altri endpoint come nel tuo server.js)
app.get("/api/gen1", async (req, res) => {
    try {
        const resPoke = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
        const data = await resPoke.json();
        const detailed = await Promise.all(
            data.results.map(async (poke) => {
                const pokeRes = await fetch(poke.url);
                const pokeData = await pokeRes.json();
                const speciesRes = await fetch(pokeData.species.url);
                const speciesData = await speciesRes.json();
                let dominantColor = "#ddd";
                if (pokeData.sprites.front_default) {
                    try {
                        const imgRes = await fetch(pokeData.sprites.front_default);
                        const imgBuffer = await imgRes.buffer();
                        const colors = await getColors(imgBuffer, 'image/png');
                        dominantColor = colors[0].hex();
                    } catch (e) { }
                }
                return {
                    name: pokeData.name,
                    id: pokeData.id,
                    sprite: pokeData.sprites.front_default,
                    color: speciesData.color.name,
                    dominantColor,
                    mainType: pokeData.types[0]?.type?.name,
                };
            })
        );
        res.json(detailed);
    } catch (err) {
        res.status(500).json({ error: "Errore nel recupero dei dati Pokémon Gen1" });
    }
});

exports.api = functions.https.onRequest(app);