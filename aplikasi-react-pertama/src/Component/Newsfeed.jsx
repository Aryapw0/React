import { useState, useEffect } from 'react';
import NewsCard from './NewsCard';

function NewsFeed() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [source, setSource] = useState('kompas');   // 'kompas' | 'cnn'

  const fetchNews = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(`https://api.siputzx.my.id/api/berita/${source}`);
      if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);

      const json = await res.json();

      // Samakan bentuk data CNN dengan Kompas agar NewsCard tidak perlu diubah
      const clean = (json.data || []).map((d) => ({
        ...d,
        image: d.image || d.image_thumbnail || d.image_full,
        date: d.date || d.time,
        category: d.category || source.toUpperCase(),
      }));

      setNews(clean);
    } catch (err) {
      setError(err.message || 'Gagal mengambil berita.');
    } finally {
      setIsLoading(false);
    }
  };

  // Jalan saat pertama muncul DAN setiap kali source berubah
  useEffect(() => {
    fetchNews();
  }, [source]);

  return (
    <div className="news-container">
      <div className="news-toolbar">
        <div>
          <h2>Berita terkini {source === 'kompas' ? 'Kompas' : 'CNN'}</h2>
          <p>Menampilkan {news.length} artikel</p>
        </div>

        <div className="source-switch">
          <button
            className={`source-btn ${source === 'kompas' ? 'active' : ''}`}
            onClick={() => setSource('kompas')}
            disabled={isLoading}
          >
            Kompas
          </button>
          <button
            className={`source-btn cnn ${source === 'cnn' ? 'active' : ''}`}
            onClick={() => setSource('cnn')}
            disabled={isLoading}
          >
            CNN
          </button>
        </div>

        <button className="btn-refresh" onClick={fetchNews} disabled={isLoading}>
          {isLoading ? 'Memuat...' : 'Segarkan berita'}
        </button>
      </div>

      {isLoading && (
        <div className="spinner-box">
          <div className="css-spinner"></div>
          <p>Mengunduh berita terbaru...</p>
        </div>
      )}

      {error && !isLoading && (
        <div className="error-banner">
          <h4>Terjadi kesalahan jaringan</h4>
          <p>{error}</p>
          <button onClick={fetchNews}>Coba lagi</button>
        </div>
      )}

      {!isLoading && !error && (
        <div className="news-grid">
          {news.map((item, i) => (
            <NewsCard key={i} {...item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default NewsFeed;