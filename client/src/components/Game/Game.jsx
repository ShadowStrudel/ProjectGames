import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../actions";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import {
  Container,
  Description,
  LeftBlock,
  Numbers,
  PlatsGen,
  RightBlock,
} from "./GameCSS";

function Game() {
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetails(params.id));
  }, []);
  let gameDetails = useSelector((state) => state.gamesDetails);
  return (
    <Container>
      <Link to="/home">
        <button>volver</button>
      </Link>
      <LeftBlock>
        <img src={gameDetails.img} alt="Soy la foto" />
      </LeftBlock>
      <RightBlock>
        <h1>Nombre: {gameDetails.name}</h1>
        <h2>Detalles</h2>
        <section>
          <PlatsGen>
            <h3>Generos: </h3>
            <section>
              {gameDetails.genres?.map((gen, i) => (
                <p key={i}>{gen}</p>
              ))}
            </section>
          </PlatsGen>
          <PlatsGen>
            <h3>Plataformas: </h3>
            <section>
              {gameDetails.platforms?.map((plat, i) => {
                let cadena = " ";
                if (cadena === " ") {
                  cadena = plat;
                } else {
                  cadena = cadena + ", " + plat;
                }
                console.log(cadena, "soy el console que buscas");
                return <p>{cadena}</p>;
              })}
            </section>
          </PlatsGen>
          <div>
            {gameDetails.description ? (
              <Description>
                <h3>Description: </h3>
                <p>{gameDetails.description}</p>
              </Description>
            ) : null}
          </div>
          <Numbers>
            <h3>Lanzamiento:</h3> <h4> {gameDetails.date}</h4>
          </Numbers>
          <Numbers>
            <h3>Rating:</h3> <h4> {gameDetails.rating}</h4>
          </Numbers>
        </section>
      </RightBlock>
    </Container>
  );
}

export default Game;
