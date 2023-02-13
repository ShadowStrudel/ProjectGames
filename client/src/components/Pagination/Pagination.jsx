import React, { useState } from "react";
import flecha from "../../assets/iconos/flechita.png";
import { Container, Img, Previous } from "./PaginationCSS";

function Pagination({ page, setPage, max }) {
  const [input, setInput] = useState(1);

  function nextPage() {
    setInput(parseInt(input) + 1);
    setPage(parseInt(input) + 1);
  }

  function previousPage() {
    setInput(parseInt(input) - 1);
    setPage(parseInt(input) - 1);
  }

  function onKeyDown(e) {
    if (e.keyCode === 13) {
      setPage(parseInt(e.target.value));
      if (
        parseInt(e.target.value) < 1 ||
        parseInt(e.target.value) > Math.ceil(max) ||
        isNaN(parseInt(e.target.value))
      ) {
        setInput(1);
        setPage(1);
      } else {
        setPage(parseInt(e.target.value));
      }
    }
  }

  function onChange(e) {
    setInput(e.target.value);
  }
  return (
    <Container>
      <Previous onClick={previousPage} disabled={page === 1 || page < 1}>
        Anterior
      </Previous>
      <input onChange={onChange} onKeyDown={onKeyDown} value={input} />
      <p> de {Math.ceil(max)}</p>
      <button
        onClick={nextPage}
        disabled={page === Math.ceil(max) || page > Math.ceil(max)}
      >
        Siguiente
      </button>

      <a href="/home/#">
        <Img src={flecha} alt="flechaaa" />
      </a>
    </Container>
  );
}

export default Pagination;
