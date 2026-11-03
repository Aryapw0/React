import { useState } from "react";

function Greetingfrom() {
    const [nama, setNama] = useState('');

    return (
        <div style={{margin: '20px 0'}}>
            <input>
                type="text"
                placeholder="ketik nama anda..."
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="input-teks"
            </input>
            <p>hay (nama || '')</p>
        </div>
    )
}

export default Greetingform;