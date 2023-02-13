import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import Games from "../Games/Games";
import Pagination from "../Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllGames, getGenres, getPlatforms } from "../../actions/index";
import { Container, Grid } from "./HomeCSS";

function Home() {
  const [renderRating, setRenderRating] = useState("");
  const [renderLetters, setRenderLetters] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllGames());
    dispatch(getGenres());
    dispatch(getPlatforms());
  }, []);
  let games = useSelector((state) => state.games);
  let [page, setPage] = useState(1);
  let [perPage, setPerPage] = useState(9);
  let max = games.length / perPage;

  return (
    <Container>
      <nav>
        <NavBar
          setRenderRating={setRenderRating}
          setRenderLetters={setRenderLetters}
        />
      </nav>
      <Grid>
        {games
          ?.slice((page - 1) * perPage, (page - 1) * perPage + perPage)
          ?.map((game, i) => {
            return (
              <Link to={`/home/${game.id}`} key={i}>
                <Games key={i} props={game} />
              </Link>
            );
          })}
      </Grid>
      <footer>
        <Pagination page={page} setPage={setPage} max={max} />
      </footer>
    </Container>
  );
}

export default Home;
