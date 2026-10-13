import { useSearchParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard.jsx';
import { movies } from '../data/movies.js';

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get('q') || '').trim();

  const results = query
    ? movies.filter((m) =>
        m.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <section className="page-shell">
      <p className="page-sub">
        {query ? `Результаты по запросу: «${query}»` : 'Введите запрос в поиске сверху'}
      </p>
      <div className="movie-grid">
        {results.length > 0 ? (
          results.map((m) => <MovieCard key={m.id} movie={m} />)
        ) : (
          <div className="empty-note">
            {query ? 'Ничего не найдено' : 'Начните вводить название фильма'}
          </div>
        )}
      </div>
    </section>
  );
}