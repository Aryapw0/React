import './App.css';
import { useState } from 'react';
import Dragon from './Dragon';
import ProfileCard from './Component/ProfileCard';

function App() {
  const [hitung, setHitung] = useState(0);
  const [nama, setNama] = useState('');

  return (
    <>
      <Dragon />

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
            <h2>halo, {nama || 'Tamu'}</h2>
          </div>
        </div>
      </section>

      {/* LAYAR 2: kartu profil (di dalam komponennya sudah ada <section className="layar">) */}
      <ProfileCard />
    </>
  );
}

export default App;