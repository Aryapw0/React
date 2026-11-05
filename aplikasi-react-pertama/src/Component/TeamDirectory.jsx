import { useState } from "react";
import TeamCard from "./TeamCard";
import fadein from "../fadein";

   function TeamDirectory({ members, setMembers }) {
   
  

  // 1. State untuk kata kunci pencarian & filter
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("Semua");
  const [ref, tampil] = fadein();

  const handleToggleStatus = (id) => {
    setMembers((prevMembers) =>
      prevMembers.map((member) =>
        member.id === id
          ? {
              ...member,
              status: member.status === "Online" ? "Offline" : "Online",
            }
          : member,
      ),
    );
  };

  const handleAddStar = (id) => {
    setMembers((prevMembers) =>
      prevMembers.map((member) =>
        member.id === id ? { ...member, stars: member.stars + 1 } : member,
      ),
    );
  };

  const filteredMembers = members.filter((m) => {
    const cocokNama = m.name
      .toLowerCase()
      .includes(searchTerm.trim().toLowerCase());
    const cocokStatus = filterStatus === "Semua" || m.status === filterStatus;
    return cocokNama && cocokStatus;
  });

  const totalMembers = members.length;
  const onlineCount = members.filter((m) => m.status === "Online").length;
  const offlineCount = totalMembers - onlineCount;

  return (
    <section className="layar" ref={ref}>
      <div className={`team-container ${tampil ? "tampil" : ""}`}>
        <div className="directory-container">
          <h2 className="directory-title">Daftar Anggota Tim Developer</h2>

          <div className="stats-bar">
            <div className="stat-box">
              <div className="stat-num">{totalMembers}</div>
              <div className="stat-label">Total Members</div>
            </div>

            <div className="stat-box">
              <div className="stat-num online">{onlineCount}</div>
              <div className="stat-label">Online</div>
            </div>

            <div className="stat-box">
              <div className="stat-num offline">{offlineCount}</div>
              <div className="stat-label">Offline</div>
            </div>
          </div>

          <input
            type="text"
            placeholder="Cari nama anggota tim..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />

          <div className="filter-bar">
            {["Semua", "Online", "Offline"].map((opsi) => (
              <button
                key={opsi}
                className={`btn-filter ${filterStatus === opsi ? "aktif" : ""}`}
                onClick={() => setFilterStatus(opsi)}
              >
                {opsi}
              </button>
            ))}
          </div>

          {filteredMembers.length === 0 ? (
            <div className="empty-state">
              ⚠️ Tidak ada anggota tim yang cocok dengan pencarian
              {searchTerm && <> "{searchTerm}"</>}
              {filterStatus !== "Semua" && <> berstatus {filterStatus}</>}.
            </div>
          ) : (
            <div className="team-grid">
              {filteredMembers.map((member) => (
                <TeamCard
                  key={member.id}
                  {...member}
                  onToggleStatus={handleToggleStatus}
                  onAddStar={handleAddStar}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default TeamDirectory;
