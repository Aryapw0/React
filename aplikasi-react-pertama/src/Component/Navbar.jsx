import { NavLink } from 'react-router-dom';

export default function Navbar({ totalMembers }) {
  const getLinkClass = ({ isActive }) =>
    isActive ? 'nav-link active' : 'nav-link';

  return (
    <nav className="navbar-container">
      <div className="navbar-brand">Direktori Tim</div>

      <div className="navbar-menu">
        <NavLink to="/" end className={getLinkClass}>
          Direktori
        </NavLink>
        <NavLink to="/news" className={getLinkClass}>
          Berita terkini
        </NavLink>
      </div>

      <span className="badge-count">{totalMembers} anggota</span>
    </nav>
  );
}