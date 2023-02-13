const { Router } = require('express');
const server = require("../app.js");
const axios = require("axios")
const { Videogame, Genero, Op } = require("../db.js");


const router = Router();


router.get("/videogames", async (req, res, next) => {
    const { gameName } = req.query;

    try {
        let api = [];
        if (gameName) {
            api = await Videogame.findAll({
                where: {
                    name: { [Op.substring]: gameName }
                }
            });
            res.json(api)
        } else {
            next();
        }
    } catch (e) {
        console.log(e);
        res.status(400)
        res.send(e)
    }
})

router.get("/videogames", async (req, res) => {

    try {
        let api = [];
        api = await Videogame.findAll({
            include: Genero
        });
        if (api.length === 0) {
            let apiKey = "21829f8e4fb74e889c0242819631b23a";
            let url = `https://api.rawg.io/api/games?key=${apiKey}`;
            let moreGames = [];
            for (let i = 0; i < 1; i++) {
                const response = await axios.get(url)
                moreGames = response.data.results?.map((g) => {
                    let nameLow = g.name.toLowerCase();
                    return {
                        name: nameLow,
                        date: g.released,
                        rating: g.rating,
                        platforms: g.platforms.map((p) => p.platform.name),
                        genres: g.genres.map((g) => g.name),
                        img: g.background_image
                    }
                });
                url = response.data.next;
                api = [...api, ...moreGames];
            }
            await Videogame.bulkCreate(api)
        }

        res.json(api)
    } catch (e) {
        console.log(e);
        res.status(400)
        res.send(e)
    }
})

router.get("/videogames/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const game = await Videogame.findOne({
            where: {
                id: id
            },
            include: Genero,
        })
        res.json(game)

    } catch (e) {
        console.log(e);
        res.status(400)
        res.send(e)
    }
})

router.get("/genres", async (req, res) => {
    let apiKey = "21829f8e4fb74e889c0242819631b23a";
    let url = `https://api.rawg.io/api/genres?key=${apiKey}`;
    let generos = await Genero.findAll()
    try {
        if (generos.length == 0) {
            let creadorDeGeneros = [];
            const response = await axios.get(url)
            response.data.results?.forEach((game) => {
                if (!generos.includes(game.name)) {
                    creadorDeGeneros.push({ name: game.name })
                    generos = [...generos, game.name]
                }
            })
            await Genero.bulkCreate(creadorDeGeneros)
        } else {
            generos = generos.map((objectGen) => objectGen.name)
        }

        res.json(generos)
    } catch (e) {
        console.log(e);
        res.status(400)
        res.send(e)

    }
})

router.post("/videogame", async (req, res) => {

    const { name, description, date, rating, platforms, genresName, genresId, img } = req.body;
    try {
        if (img) {
            const newGame = await Videogame.create({
                img: img,
                name: name,
                description: description,
                date: date,
                rating: rating,
                platforms: platforms,
                genres: genresName,
                created: true,

            })
        } else {
            const newGame = await Videogame.create({
                name: name,
                description: description,
                date: date,
                rating: rating,
                platforms: platforms,
                genres: genresName,
                created: true,

            })
        }
        await newGame.addGenero(genresId);

    } catch (e) {
        console.log(e);
        res.status(400)
        res.send(e)

    }
})

module.exports = router;
