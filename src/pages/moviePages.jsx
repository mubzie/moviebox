import { useParams, useLocation, Link } from "react-router-dom";

const MoviePage = () => {
  let { movieId = "" } = useParams();
  const location = useLocation();
  const movieData = location.state;

  console.log(movieId);
  console.log(movieData);

  return (
    <>
      <div>
        <h1>
          Movie Page For {movieData?.title} with ID {movieId}
        </h1>
        <p>Titie: {movieData?.title}</p>
        <p>vote_average: {movieData?.vote_average}</p>
        <p>vote_count: {movieData?.vote_count}</p>
        <Link to="/">Go Back Home</Link>
      </div>
    </>
  );
};

export default MoviePage;
