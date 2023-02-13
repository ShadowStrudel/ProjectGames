import { CREATE_NEW_GAME, GET_ALL_GAMES, GET_CREATEDS, GET_DETAILS, GET_GENRES, GET_PER_PLATFORMS, GET_PLATFORMS, ORDER_BY_GENRES, ORDER_BY_LETTERS, ORDER_BY_RATING, SEARCHER } from "../actions/index"

const initialState = {
    games: [],
    gamesCopy: [],
    gamesDetails: {},
    genres: [],
    platforms: [],
}

export default function rootReducer(state = initialState, action) {

    switch (action.type) {
        case GET_ALL_GAMES:
            return {
                ...state,
                games: action.payload,
                gamesCopy: action.payload,
            }

        case GET_DETAILS:
            return {
                ...state,
                gamesDetails: action.payload,
            }

        case ORDER_BY_GENRES:
            let filtrado = action.payload === "todos" ? state.gamesCopy : state.gamesCopy.filter((game) => game.genres?.includes(action.payload))
            return {
                ...state,
                games: filtrado
            }

        case ORDER_BY_LETTERS:
            let mapeo = state.games.map((game, index) => {
                return { ...game, index: index, value: game.name }
            })
            mapeo.sort((a, b) => {
                if (action.payload === "A-Z") {
                    if (a.value < b.value) {
                        return -1;
                    }
                    if (a.value > b.value) {
                        return 1;
                    }
                    return 0
                } else {
                    if (a.value < b.value) {
                        return 1;
                    }
                    if (a.value > b.value) {
                        return -1;
                    }
                    return 0
                }
            })
            console.log(mapeo, "estoy en el reducer")
            return {
                ...state,
                games: mapeo
            }

        case ORDER_BY_RATING:
            let sortedCopy = state.games;
            let sorted = sortedCopy.sort((a, b) => {

                if (action.payload === "asc") {
                    return a.rating - b.rating
                } else {
                    return b.rating - a.rating
                }
            })
            return {
                ...state,
                games: sorted
            }

        case SEARCHER:
            return {
                ...state,
                games: action.payload,
            }

        case GET_GENRES:
            return {
                ...state,
                genres: action.payload,
            }

        case GET_CREATEDS:
            let filtro = action.payload === "created" ?
                state.gamesCopy?.filter((game) => game.created === true) :
                action.payload === "noCreados" ?
                    state.gamesCopy?.filter((game) => game.created === false) :
                    state.gamesCopy
            return {
                ...state,
                games: filtro
            }


        case GET_PLATFORMS:
            let plataformas = [];
            let maped = action.payload.forEach((game) => {
                for (let i = 0; i < game.platforms.length; i++) {

                    if (!plataformas.includes(game.platforms[i])) {
                        plataformas.push(game.platforms[i])

                    }
                }
            })
            return {
                ...state,
                platforms: plataformas
            }

        case GET_PER_PLATFORMS:
            let filtrito = action.payload === "todos" ? state.gamesCopy : state.gamesCopy.filter((g) => g.platforms?.includes(action.payload))

            return {
                ...state,
                games: filtrito
            }
        default: return state
    }
}