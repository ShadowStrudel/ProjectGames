import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Buttons,
  Container,
  Formm,
  Generos,
  Guardar,
  LeftContainer,
  Platforms,
  Rating,
  RihgtContainer,
  Volver,
} from "./FormCSS";
import { createNewGame, getGenres, getPlatforms } from "../../actions";
import x from "../../assets/iconos/x.png";
import { validate } from "../Utils/Utils";

function Form() {
  const dispatch = useDispatch();
  let genres = useSelector((state) => state.genres);
  let platforms = useSelector((state) => state.platforms);
  const [newGame, setNewGame] = useState({
    img: "",
    name: "",
    description: "",
    date: "",
    rating: 0,
    platforms: [],
    genresName: [],
    genresId: [],
  });

  useEffect(() => {
    dispatch(getPlatforms());
    dispatch(getGenres());
  }, []);

  function hanlderInputs(e) {
    setNewGame((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    // let stateCopy = newGame;
    // if (stateCopy[e.target.name].length > 0) {
    //   console.log(
    //     "entré",
    //     stateCopy[e.target.name].length > 0,
    //     stateCopy[e.target.name]
    //   );
    //   setError(validate(stateCopy, e.target.name));
    // }
  }

  function handlerChangeGenres(e) {
    if (!newGame.genresName?.includes(e.target.value.split(",")[0])) {
      setNewGame({
        ...newGame,
        genresName: [...newGame.genresName, e.target.value.split(",")[0]],
        genresId: [...newGame.genresId, e.target.value.split(",")[1]],
      });
    }
  }

  function handlerChangePlatforms(e) {
    if (!newGame.platforms?.includes(e.target.value)) {
      setNewGame({
        ...newGame,
        platforms: [...newGame.platforms, e.target.value],
      });
    }
  }

  function createGame() {
    if (validate(newGame).length === 0) {
      dispatch(createNewGame(newGame));
      alert("Juego creado con éxito!");
    } else {
      alert(validate(newGame));
    }
    setNewGame({
      img: "",
      name: "",
      description: "",
      date: "",
      rating: 0,
      platforms: [],
      genresName: [],
      genresId: [],
    });
  }

  function quitListPlat(e) {
    setNewGame({
      ...newGame,
      platforms: newGame.platforms?.filter((plat) => plat !== e.target.value),
    });
  }

  function quitListGen(e) {
    setNewGame({
      ...newGame,
      genresName: newGame.genresName?.filter((gen) => gen !== e.target.value),
    });
    console.log("soy despues", newGame.genresName);
  }
  return (
    <Container>
      <LeftContainer>
        <h1>CREA TU JUEGO</h1>
        <Formm>
          <div>
            <input
              autoFocus
              value={newGame.img}
              onChange={hanlderInputs}
              name="img"
              type="text"
              placeholder="URL de imagen..."
            />
          </div>
          <div>
            <input
              value={newGame.name}
              onChange={hanlderInputs}
              name="name"
              type="text"
              placeholder="Nombre..."
            />
          </div>
          <div>
            <input
              value={newGame.description}
              onChange={hanlderInputs}
              name="description"
              type="text"
              placeholder="Descripción..."
            />
          </div>
          <div>
            <input
              value={newGame.date}
              onChange={hanlderInputs}
              name="date"
              type="date"
              placeholder="Lanzamiento..."
            />
          </div>
          <Rating>
            <div>
              <p>rating:</p>
              <input
                value={newGame.rating}
                onChange={hanlderInputs}
                name="rating"
                type="range"
                step=".01"
                min={0}
                max={5}
                placeholder="Rating..."
              />
            </div>
            {/* <span>{newGame.rating}</span> */}
            <input
              className="input-rating"
              type="number"
              readOnly
              value={newGame.rating}
            />
          </Rating>
          <div>
            <select onChange={handlerChangeGenres}>
              <option hidden selected>
                Generos
              </option>
              {genres?.map((gen, index) => {
                return (
                  <option name={gen} value={gen} key={index}>
                    {gen}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <select onChange={handlerChangePlatforms}>
              <option hidden selected>
                Plataformas
              </option>
              {platforms?.map((plat, index) => {
                return (
                  <option value={plat} key={index}>
                    {plat}
                  </option>
                );
              })}
            </select>
          </div>
        </Formm>
        <Buttons>
          {/* <Link to="/home"> */}
          <Guardar onClick={createGame}>Guardar</Guardar>
          {/* </Link> */}
          <Link to="/home">
            <Volver>Volver</Volver>
          </Link>
        </Buttons>
      </LeftContainer>
      <RihgtContainer>
        <h1>GENEROS</h1>
        <Generos>
          {newGame.genresName?.map((gen, index) => {
            return (
              <div>
                <span key={index} value={gen}>
                  {gen}
                </span>
                <button onClick={quitListGen} value={newGame.genresName[index]}>
                  X
                </button>
              </div>
            );
          })}
        </Generos>
        <h1>PLATAFORMAS</h1>
        <Platforms>
          {newGame.platforms?.map((plat, index) => {
            return (
              <div>
                <span key={index} value={plat}>
                  {plat}
                </span>
                <button onClick={quitListPlat} value={newGame.platforms[index]}>
                  X
                </button>
              </div>
            );
          })}
        </Platforms>
      </RihgtContainer>
    </Container>
  );
}

export default Form;
