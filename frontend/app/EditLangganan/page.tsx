"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function EditSubscriptionPage() {
  const router = useRouter();

  // DATA DUMMY (SEOLAH DARI DATABASE)
  const [name, setName] = useState("Netflix");
  const [price, setPrice] = useState("150000");
  const [cycle, setCycle] = useState("Bulanan");
  const [dueDate, setDueDate] = useState("2025-01-25");

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !price || !dueDate) {
      alert("Semua field wajib diisi");
      return;
    }

    alert("Langganan berhasil diperbarui (dummy)");
    router.push("/");
  };

  return (
    <>
      <div className="form-card">
        <h1>Edit Langganan</h1>

        <form onSubmit={handleUpdate}>
          <label>Nama Layanan</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Harga (Rp)</label>
          <input
            type="number"
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

          <button type="submit">Update Langganan</button>
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
          background: linear-gradient(135deg, #2563eb, #1e40af);
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
          color: #1e40af;
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
          border-color: #2563eb;
        }

        button {
          width: 100%;
          margin-top: 20px;
          padding: 12px;
          background: #2563eb;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
        }

        button:hover {
          background: #1e40af;
        }
      `}</style>
    </>
  );
}
