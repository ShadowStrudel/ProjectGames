import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllGames, getGenres } from "../../actions";
import { useDispatch } from "react-redux";
import { Container } from "./landingCSS";

function Landing() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllGames());
    dispatch(getGenres());
    console.log("me cargué landing");
  }, []);

  return (
    <Container>
      <Link to="/home">
        <button>Bienvenidos</button>
      </Link>
    </Container>
  );
}

export default Landing;
