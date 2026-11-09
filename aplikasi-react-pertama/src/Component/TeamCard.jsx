import { Link } from 'react-router-dom';


function TeamCard({ id, name, role, avatar, status, stars, onToggleStatus, onAddStar, bio }) {
  const isOnline = status === 'Online';

  return (
    <div className="team-card">
      <img src={avatar} alt={name} className="card-avatar" />

      <div className="card-info">
        <h3 className="card-name">{name}</h3>
        <h3 className="card-bio">{bio}</h3>
        <p className="card-role">{role}</p>

        <div className="card-badges">
          <span className={`badge ${isOnline ? 'badge-online' : 'badge-offline'}`}>
            • {status}
          </span>
          <span className="badge-stars">⭐ {stars} Bintang</span>
        </div>

        <div className="card-actions">
          <button className="btn-star" onClick={() => onAddStar(id)}>
            ⭐ Beri Bintang
          </button>
          <button className="btn-status-toggle" onClick={() => onToggleStatus(id)}>
            Ubah ke {isOnline ? 'Offline' : 'Online'}
          </button>
        </div>

        {
          <Link to={`/member/${id}`} className="btn-view-profile">
            Lihat profil detail →
          </Link>
        }
      </div>
    </div>
  );
}

export default TeamCard;