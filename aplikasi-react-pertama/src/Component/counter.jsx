import { useState } from "react";
function Counter() {
    const [hitung, seHitung] = useState(0);

    return (
        <div style={{margin: '20px 0'}}>
            <h3>komponen Hitungan: {hitung}</h3>
            <button className="btn-utama" on-click={() => seHitung(hitung + 1)}>tambah angka</button>
        </div>
    )
}
export default Counter;