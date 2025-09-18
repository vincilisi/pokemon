const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const getColors = require('get-image-colors');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const app = express();
const PORT = 4000;

app.use(cors());

const genRanges = {
    gen1: [1, 151],
    gen2: [152, 251],
    gen3: [252, 386],
    gen4: [387, 493],
    gen5: [494, 649],
    gen6: [650, 721],
    gen7: [722, 809],
    gen8: [810, 905],
    gen9: [906, 1025],
};

function createGenEndpoint(genName, [start, end]) {
    let cache = null;
    const cachePath = path.join(__dirname, `${genName}.json`);

    app.get(`/api/${genName}`, async (req, res) => {
        try {
            if (cache) {
                return res.json(cache);
            }
            if (fs.existsSync(cachePath)) {
                const fileData = fs.readFileSync(cachePath, 'utf-8');
                cache = JSON.parse(fileData);
                return res.json(cache);
            }
            const resPoke = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${end}`);
            const data = await resPoke.json();
            const detailed = await Promise.all(
                data.results
                    .slice(start - 1, end)
                    .map(async (poke) => {
                        const pokeRes = await fetch(poke.url);
                        const pokeData = await pokeRes.json();
                        const speciesRes = await fetch(pokeData.species.url);
                        const speciesData = await speciesRes.json();

                        // Calcola il colore dominante dello sprite
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
                            mainType: pokeData.types[0]?.type?.name, // <-- tipo principale
                        };
                    })
            );
            cache = detailed;
            fs.writeFileSync(cachePath, JSON.stringify(detailed));
            res.json(detailed);
        } catch (err) {
            res.status(500).json({ error: `Errore nel recupero dei dati Pokémon ${genName}` });
        }
    });
}

Object.entries(genRanges).forEach(([genName, range]) => {
    createGenEndpoint(genName, range);
});

app.listen(PORT, () => {
    console.log(`Backend Pokémon in ascolto su http://localhost:${PORT}`);
});