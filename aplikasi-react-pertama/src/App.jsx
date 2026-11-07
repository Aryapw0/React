import "./App.css";
import { useState } from "react";
import Dragon from "./Dragon";
import ProfileCard from "./Component/ProfileCard";
import TeamDirectory from "./Component/TeamDirectory";
import AddMemberForm from "./Component/AddMember";
import "./Component/AddMember.css";


function App() {
  const [hitung, setHitung] = useState(0);
  const [nama, setNama] = useState("");
  const [activeTab, setActiveTab] = useState('team');
  const handleAddMember = (member) => {
    setMembers((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: member.name,
        role: member.role,
        bio:member.bio,
        status: "Online",
        stars: 0,
        avatar: `https://i.pravatar.cc/150?u=${member.email}`,
      },
    ]);
  };

  const [members, setMembers] = useState([
  { id: 1, name: "Arya", role: "Frontend Dev", status: "Online", stars: 4, avatar: "https://i.pravatar.cc/150?u=41", bio: "halo saya Fronted Dev", },
  { id: 2, name: "Fauzi", role: "UI/UX Designer", status: "Offline", stars: 2, avatar: "https://i.pravatar.cc/150?u=2", bio: "halo saya UI/UX Designer", },
  { id: 3, name: "Bambang", role: "Backend Engineer", status: "Online", stars: 3, avatar: "https://i.pravatar.cc/150?u=53", bio: "halo saya Backend Engineer", },
]);



  return (
    <>
      {/* LAYAR 1: kartu utama */}
		   <section className="layar">
        <div className="container">
          <div className="bagian">
            <h1>hy, nama saya arya</h1>
            <p>first time menggunakan react & vite</p>
            <h2>jumlah klik: {hitung}</h2>
            <button className="btn-utama" onClick={() => setHitung(hitung + 1)}>
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
            <h2>nama, {nama || ""}</h2>
          </div>
        </div>
      </section>
      {/* LAYAR 2: kartu profil (di dalam komponennya sudah ada <section className="layar">) */}
      <ProfileCard />
      <AddMemberForm onAddMember={handleAddMember} />
      <TeamDirectory members={members} setMembers={setMembers} />


      <Dragon />
    </>
  );
  
}

export default App;
