import { useParams, useNavigate, Link } from 'react-router-dom';
import { movies, labelForGenre } from '../data/movies.js';

export default function MoviePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === id);

  if (!movie) {
    return (
      <section className="page-shell">
        <div className="empty-note">Такого фильма нет в каталоге.</div>
        <Link to="/movies" className="btn ghost">← К каталогу</Link>
      </section>
    );
  }

  return (
    <section className="page-shell">
      <button type="button" className="btn ghost" onClick={() => navigate(-1)}>
        ← Назад
      </button>

      <div className="movie-detail">
        <div className="detail-poster" style={{ background: movie.color }}>
          {movie.title[0]}
        </div>
        <div className="detail-body">
          <h1>{movie.title}</h1>
          <p className="detail-cat">{labelForGenre(movie.genre)} · {movie.year}</p>
          <div className="rating"><span>★</span> {movie.rating}</div>
          <p className="detail-desc">{movie.description}</p>
        </div>
      </div>
    </section>
  );
}