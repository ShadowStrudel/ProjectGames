export const GET_ALL_GAMES = "GET_ALL_GAMES";
export const GET_DETAILS = "GET_DETAILS";
export const ORDER_BY_GENRES = "ORDER_BY_GENRES";
export const ORDER_BY_LETTERS = "ORDER_BY_LETTERS";
export const ORDER_BY_RATING = "ORDER_BY_RATING";
export const SEARCHER = "SEARCHER";
export const GET_GENRES = "GET_GENRES";
export const GET_CREATEDS = "GET_CREATEDS";
export const CREATE_NEW_GAME = "CREATE_NEW_GAME";
export const GET_PLATFORMS = "GET_PLATFORMS";
export const GET_PER_PLATFORMS = "GET_PER_PLATFORMS";

export function getAllGames() {

    return function (dispatch) {
        fetch("http://localhost:3001/videogames")
            .then(r => r.json())
            .then(r => dispatch({ type: GET_ALL_GAMES, payload: r }))
    }
}

export function getDetails(id) {
    return function (dispatch) {
        fetch(`http://localhost:3001/videogames/${id}`)
            .then(r => r.json())
            .then(r => dispatch({ type: GET_DETAILS, payload: r }))
    }
}

export function orderByGenres(tipo) {
    return function (dispatch) {
        dispatch({ type: ORDER_BY_GENRES, payload: tipo })
    }
}

export function orderByLetters(tipo) {
    return function (dispatch) {
        dispatch({ type: ORDER_BY_LETTERS, payload: tipo })
    }
}

export function orderByRating(tipo) {
    console.log("estoy en el action", tipo)
    return function (dispatch) {
        dispatch({ type: ORDER_BY_RATING, payload: tipo })
    }
}

export function searcher(name) {
    return function (dispatch) {

        fetch(`http://localhost:3001/videogames?gameName=${name}`)
            .then(r => r.json())
            .then(r => dispatch({ type: SEARCHER, payload: r }))
    }
}

export function getGenres() {
    return function (dispatch) {
        fetch("http://localhost:3001/genres")
            .then(r => r.json())
            .then(r => dispatch({ type: GET_GENRES, payload: r }))
    }
}

export function getCreateds(tipo) {
    return function (dispatch) {
        dispatch({ type: GET_CREATEDS, payload: tipo })
    }
}

export function createNewGame({ name, description, date, rating, platforms, genresName, genresId, img }) {
    return function (dispatch) {

        fetch("http://localhost:3001/videogame", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                img: img,
                name: name,
                description: description,
                date: date,
                rating: rating,
                platforms: platforms,
                genresName: genresName,
                genresId: genresId,
            })
        })
    }
}

export function getPlatforms() {
    return function (dispatch) {
        fetch("http://localhost:3001/videogames")
            .then((r) => r.json())
            .then((r) => dispatch({ type: GET_PLATFORMS, payload: r }))
    }
}

export function getPerPlatforms(tipo) {
    return function (dispatch) {
        dispatch({ type: GET_PER_PLATFORMS, payload: tipo })
    }
}