import { useSearchParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard.jsx';
import GenreFilter from '../components/GenreFilter.jsx';
import { movies, genres } from '../data/movies.js';

export default function MoviesPage() {
  const [searchParams] = useSearchParams();
  const activeGenre = searchParams.get('genre') || '';

  const visible = activeGenre
    ? movies.filter((m) => m.genre === activeGenre)
    : movies;

  return (
    <section className="page-shell">
      <h1 className="page-title">Фильмы</h1>
      <GenreFilter genres={genres} />
      <div className="movie-grid">
        {visible.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}