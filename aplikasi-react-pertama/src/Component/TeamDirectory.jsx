import { useState } from 'react';
const members= [
    {id: 1, name: 'Arya', role: 'Frontend Dev', status: 'Online'},
    {id: 2, name: 'Fauzi', role: 'UI/UX Designer', status: 'Offline'},
    {id: 3, name: 'Bambang', role: 'Backend Engineer', status: 'Online'}
];

function TeamDirectory() {
    const [filterOnlne, setFilterOnline] = useState(false);
    const displayedMembers = filterOnlne
        ? members.filter((item) => item.status === 'Online')
        : members;

    return (
        <section className="layar">
        <div className="team-container">
            <h2>Project Team Directory</h2>
            <button onClick={() => setFilterOnline(!filterOnlne)}>{filterOnlne ? 'Show All' : 'Filter Online Only'}</button>
            <div className='team-list'>
                {displayedMembers.map((member) => (
                        <div key={member.id} className="card-item">
                        <h4>{member.name}</h4>
                        <p>Role: {member.role}</p>
                        <span style={{ color: member.status == 'Online' ? '#16a34a' : '#64748b'}}>
                           • {member.status}
                        </span>
                    </div>
                ))}
            </div>
        </div>
        </section>
    );

}

export default TeamDirectory