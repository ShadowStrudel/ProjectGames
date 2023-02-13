import React from "react";
import { Container, Img } from "./GamesCSS";
import { stringeando } from "../Utils/Utils";

function Games({ props }) {
  return (
    <Container>
      <Img src={props.img} alt="Soy la foto del juego" />
      <h2>{props.name}</h2>
      <section>
        <p>Generos: </p>
        <span>{stringeando(props.genres)}</span>
      </section>
    </Container>
  );
}

export default Games;
