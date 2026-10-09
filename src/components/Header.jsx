import {NavLink, useNavigate} from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const value = event.target.elements.q.value.trim();
    if (value) {
      naviagte('search?q=' + enclodeURIComponents(value));
      event.target.reset();
    }
  }

    const linkClass = ({ isActive }) =>
    'nav-item' + (isActive ? ' active' : '');

  return (
    <header className="header">
      <div className="header-inner">
        <NavLink to="/" className="logo">
          <span className="logo-icon">▶</span>
          <span>MovieBox</span>
        </NavLink>

       <nav className="nav">
          <NavLink to="/" end className={linkClass}>Главная</NavLink>
          <NavLink to="/movies" className={linkClass}>Фильмы</NavLink>
          <NavLink to="/about" className={linkClass}>О проекте</NavLink>
        </nav>

        <form className="search" onSubmit={handleSubmit}>
          <span className="search-icon">⌕</span>
          <input name="q" placeholder="Поиск фильмов" />
        </form>
      </div>
    </header>
  );
}
