function TeamCard({ name,role,avatar,status }) {
  return (
    <div className='team-card'>
      <img src={avatar} alt={name} className="card-avatar"> </img>
      <div className='card-info'>
        <h3 className='card-name'>{name}</h3>
        <p className='card-role'>{role}</p>
        <span className={` badge $ { status === 'Online' ? 'badge-online' : 'badge-offline'}`}>
          •{status}
      </span>
      </div>
    </div>
  );
}

export default TeamCard;