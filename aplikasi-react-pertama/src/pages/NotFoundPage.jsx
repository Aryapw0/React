import { Link, useLocation } from 'react-router-dom';

export default function NotFoundPage () {
    const { pathname } = useLocation();


 return (
    <div className="page-card not-found-countainer">
        <dic className="not-found-code">404</dic>
        <h2>Ups! Halaman tidak ditemukan</h2>
        <p>Alamat <b>{pathname}</b> mungkin sudah dipindahkan atau salah ketik.</p>
        <Link to="/" className="btn-primary">Kembali ke link TeamDirectory</Link>
    </div>
 );
}