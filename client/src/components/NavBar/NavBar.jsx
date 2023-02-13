import React, { useState } from "react";
import corazon from "../../assets/iconos/heart.png";
import play from "../../assets/iconos/Play.png";
import lupa from "../../assets/iconos/Boton busqueda.png";
import { renderGenresOptions } from "../Utils/Utils";
import {
  Img,
  Play,
  Lupa,
  Boton,
  Container,
  Searchedor,
  Barra,
  Filtros,
  NewGame,
  FiltrosLeftRight,
} from "./NavBarCSS";
import { useDispatch, useSelector } from "react-redux";
import {
  getPerPlatforms,
  getCreateds,
  orderByGenres,
  orderByLetters,
  orderByRating,
  searcher,
} from "../../actions";
import { Link } from "react-router-dom";

function NavBar({ setRenderRating, setRenderLetters }) {
  const dispatch = useDispatch();
  let state = useSelector((state) => state.genres);
  const [input, setInput] = useState("");
  let platforms = useSelector((state) => state.platforms);

  function onKeyUp(e) {
    if (e.key === "Escape") e.target.value = "";
    if (e.key === "Enter") dispatch(searcher(input));
    setInput(e.target.value);
  }

  return (
    <Container>
      <Barra>
        <h1>ELIJE TU MODO DE JUEGO</h1>
        <Filtros>
          <FiltrosLeftRight>
            <div>
              <Img src={corazon} alt="soy el nuevo" />
              <select
                onChange={(e) => dispatch(getPerPlatforms(e.target.value))}
              >
                <option hiden selected value="todos">
                  Todos
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
            <div>
              <Img src={corazon} alt="generos hearth" />
              <select onChange={(e) => dispatch(orderByGenres(e.target.value))}>
                <option value="todos">Generos</option>
                {renderGenresOptions(state)}
              </select>
            </div>
            <div>
              <Img src={corazon} alt="Soy un corazon" />
              <select onChange={(e) => dispatch(getCreateds(e.target.value))}>
                <option value="todos">Todos</option>
                <option value="noCreados">No creados</option>
                <option value="created">Creados</option>
              </select>
            </div>
          </FiltrosLeftRight>
          <NewGame>
            <Link to="/form">
              <div>
                <Play src={play} alt="Soy el play" />
                NUEVO JUEGO
              </div>
            </Link>
          </NewGame>
          <FiltrosLeftRight>
            <div>
              <Img src={corazon} alt="soy un corazon" />
              <select
                onChange={(e) => {
                  dispatch(orderByRating(e.target.value));
                  setRenderRating(e.target.value);
                }}
              >
                <option>Rating</option>
                <option value="asc">Ascendente</option>
                <option value="desc">Descendente</option>
              </select>
            </div>
            <div>
              <Img src={corazon} alt="soy un corazon" />
              <select
                onChange={(e) => {
                  dispatch(orderByLetters(e.target.value));
                  setRenderLetters(e.target.value);
                }}
              >
                <option value="A-Z">A - Z</option>
                <option value="ztoa">Z - A</option>
              </select>
            </div>
          </FiltrosLeftRight>
        </Filtros>
      </Barra>
      <Searchedor>
        <input onKeyUp={onKeyUp} type="text" placeholder="Buscar juego" />
        <Boton type="submit" onClick={() => dispatch(searcher(input))}>
          <Lupa src={lupa} alt="Soy una lupa" />
        </Boton>
      </Searchedor>
    </Container>
  );
}

export default NavBar;
