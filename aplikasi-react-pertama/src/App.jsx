import "./App.css";
import "./Component/AddMember.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Dragon from "./Dragon";
import ProfileCard from "./Component/ProfileCard";
import Navbar from "./Component/Navbar";
import TeamPage from "./Pages/TeamPage";
import NewsPage from "./Pages/NewsPage";
import MemberDetailPage from "./Pages/MemberDetailPage";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  const [hitung, setHitung] = useState(0);
  const [nama, setNama] = useState("");

  const [members, setMembers] = useState([
    { id: 1, name: "Arya", role: "Frontend Dev", status: "Online", stars: 4, avatar: "https://i.pravatar.cc/150?u=41", bio: "halo saya Frontend Dev" },
    { id: 2, name: "Fauzi", role: "UI/UX Designer", status: "Offline", stars: 2, avatar: "https://i.pravatar.cc/150?u=2", bio: "halo saya UI/UX Designer" },
    { id: 3, name: "Bambang", role: "Backend Engineer", status: "Online", stars: 3, avatar: "https://i.pravatar.cc/150?u=53", bio: "halo saya Backend Engineer" },
  ]);

  const handleAddMember = (newMember) => {
    const id = Date.now();
    setMembers((prev) => [
      ...prev,
      {
        status: "Online",
        stars: 0,
        avatar: `https://i.pravatar.cc/150?u=${id}`,
        ...newMember,
        id,
      },
    ]);
  };

  const handleToggleStatus = (id) => {
    setMembers((prev) =>
      prev.map((m) =>
        m.id === id
          ? { ...m, status: m.status === "Online" ? "Offline" : "Online" }
          : m
      )
    );
  };

  const handleAddStar = (id) => {
    setMembers((prev) =>
      prev.map((m) => (m.id === id ? { ...m, stars: m.stars + 1 } : m))
    );
  };

  return (
    <div className="app-layout">
      <Navbar totalMembers={members.length} />

      <main className="content-area">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Dragon />

                <section className="layar">
                  <div className="container">
                    <div className="bagian">
                      <h1>hy, nama saya arya</h1>
                      <p>first time menggunakan react & vite</p>
                      <h2>jumlah klik: {hitung}</h2>
                      <button
                        className="btn-utama"
                        onClick={() => setHitung(hitung + 1)}
                      >
                        click here
                      </button>
                    </div>

                    <hr className="garis" />

                    <div className="bagian">
                      <h1>halooo!</h1>
                      <input
                        type="text"
                        placeholder="ketik nama anda..."
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                        className="input-teks"
                      />
                      <h2>nama, {nama}</h2>
                    </div>
                  </div>
                </section>

                <ProfileCard />

                <TeamPage
                  members={members}
                  onAddMember={handleAddMember}
                  onToggleStatus={handleToggleStatus}
                  onAddStar={handleAddStar}
                />
              </>
            }
          />
          <Route path="/news" element={<NewsPage />} />
          <Route
            path="/member/:id"
            element={<MemberDetailPage members={members} />}
          />

          {/* Wajib paling akhir */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;