import { useParams, useNavigate, Link } from 'react-router-dom';
import { movies } from '../data/movies.js';

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
      <div className="movie-detail">
        <div className="detail-poster" style={{ background: movie.color }}>
          <span>{movie.title[0]}</span>
          <small>{movie.year}</small>
        </div>

        <div className="detail-content">
          <span className="eyebrow">{movie.genreLabel.toUpperCase()}</span>
          <h1>{movie.title}</h1>
          <p className="original-title">{movie.originalTitle}</p>

          <div className="movie-meta">
            <span>★ {movie.rating}</span>
            <span>{movie.year}</span>
            <span>{movie.duration}</span>
          </div>

          <p className="description">{movie.description}</p>

          <div className="director">
            <span>Режиссёр</span>
            <strong>{movie.director}</strong>
          </div>

          <Link to="/" className="secondary-btn" type="button" >
            ← Назад
          </Link>
        </div>
      </div>
    </section>
  );
}