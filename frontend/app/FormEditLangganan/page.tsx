"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddSubscriptionPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [cycle, setCycle] = useState("Bulanan");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !price || !dueDate) {
      alert("Semua field wajib diisi");
      return;
    }

    alert("Langganan berhasil ditambahkan (dummy)");
    router.push("/");
  };

  return (
    <>
      <div className="form-card">
        <h1>Tambah Langganan</h1>

        <form onSubmit={handleSubmit}>
          <label>Nama Layanan</label>
          <input
            type="text"
            placeholder="Netflix / Spotify"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Harga (Rp)</label>
          <input
            type="number"
            placeholder="150000"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <label>Siklus Langganan</label>
          <select value={cycle} onChange={(e) => setCycle(e.target.value)}>
            <option>Bulanan</option>
            <option>Tahunan</option>
          </select>

          <label>Tanggal Jatuh Tempo</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />

          <button type="submit">Simpan Langganan</button>
        </form>
      </div>

      {/* CSS DIGABUNG DI SINI */}
      <style jsx global>{`
        body {
          margin: 0;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #22c55e, #166534);
          font-family: Arial, sans-serif;
        }

        .form-card {
          width: 400px;
          background: white;
          padding: 30px;
          border-radius: 14px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
        }

        h1 {
          text-align: center;
          color: #166534;
          margin-bottom: 25px;
        }

        label {
          display: block;
          font-size: 14px;
          margin-bottom: 6px;
          margin-top: 10px;
        }

        input,
        select {
          width: 100%;
          padding: 10px;
          border-radius: 6px;
          border: 1px solid #ccc;
          font-size: 14px;
        }

        input:focus,
        select:focus {
          outline: none;
          border-color: #22c55e;
        }

        button {
          width: 100%;
          margin-top: 20px;
          padding: 12px;
          background: #22c55e;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
        }

        button:hover {
          background: #166534;
        }
      `}</style>
    </>
  );
}
