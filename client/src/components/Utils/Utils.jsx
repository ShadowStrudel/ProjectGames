import React from "react";

export function renderGenresOptions(state) {
  return state.map((gen, index) => (
    <option key={index} value={gen}>
      {gen}
    </option>
  ));
}

export function validate(value) {
  let error = "";
  if (!value.name) {
    error = "Nombre necesario. No fue posible crear el juego.";
  } else if (!value.description) {
    error = "Descripción necesaria. No fue posible crear el juego.";
  } else if (!value.date) {
    error = "Fecha necesaria. No fue posible crear el juego.";
  } else if (value.genresName?.length === 0) {
    error = "Genero necesario. No fue posible crear el juego.";
  } else if (value.platforms?.length === 0) {
    error = "Plataforma necesaria. No fue posible crear el juego.";
  }
  return error;
}

export function stringeando(gen) {
  let string = "";
  for (let i = 0; i < gen?.length; i++) {
    if (i === 0) {
      string += gen[i];
    } else {
      string += ", " + gen[i];
    }
  }
  return string;
}
