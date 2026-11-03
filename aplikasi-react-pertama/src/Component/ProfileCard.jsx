import { useState, useEffect, useRef } from 'react';

function ProfileCard() {
  const [isOnline, setOnline] = useState(false);
  const [tampil, setTampil] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setTampil(entry.isIntersecting),
      { threshold: 0.3 }   // tampil saat 30% bagian sudah terlihat
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="layar" ref={ref}>
      <div className={`card-profile ${tampil ? 'tampil' : ''}`}>
        <h3>Arya</h3>
        <span style={{ color: isOnline ? '#16a34a' : '#94a3b8' }}>
          • {isOnline ? 'sedang aktif' : 'Offline'}
        </span>

        <button onClick={() => setOnline(!isOnline)}>
          ganti status
        </button>
      </div>
    </section>
  );
}

export default ProfileCard;