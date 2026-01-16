"use client";

import { useState } from "react";

export default function EditLanggananPage() {
  const [formData, setFormData] = useState({
    nama: "",
    harga: "",
    siklus: "Bulanan",
    jatuhTempo: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

      // Contoh kirim ke REST API
    console.log(formData);

    alert("Langganan berhasil diperbarui!");
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Edit Langganan</h1>
        <p className="subtitle">
          Perbarui detail langganan digital Anda
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nama Layanan</label>
 <input
              type="text"
              name="nama"
              placeholder="Netflix / Spotify"
              value={formData.nama}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Harga (Rp)</label>
            <input
              type="number"
              name="harga"
              placeholder="150000"
              value={formData.harga}
              onChange={handleChange}
              required
            />
          </div>

           <div className="form-group">
            <label>Siklus Langganan</label>
            <select
              name="siklus"
              value={formData.siklus}
              onChange={handleChange}
            >
              <option value="Bulanan">Bulanan</option>
              <option value="Tahunan">Tahunan</option>
            </select>
          </div>

          <div className="form-group">
            <label>Tanggal Jatuh Tempo</label>
            <input
              type="date"
              name="jatuhTempo"
              value={formData.jatuhTempo}
              onChange={handleChange}
              required
            />
          </div>

           <button type="submit" className="btn-submit">
            Simpan Langganan
          </button>
        </form>
      </div>

      
      {/* CSS langsung di page.tsx */}
      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #050b2e, #020617);
          color: #ffffff;
        }

        .card {
          width: 100%;
          max-width: 420px;
          padding: 30px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          border-radius: 16px;
          box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
        }

        h1 {
          text-align: center;
          margin-bottom: 6px;
        }

        .subtitle {
          text-align: center;
          font-size: 14px;
          color: #cbd5f5;
          margin-bottom: 25px;
        }

         .form-group {
          margin-bottom: 18px;
        }

                label {
          display: block;
          margin-bottom: 6px;
          font-size: 14px;
        }

        input,
        select {
          width: 100%;
          padding: 10px 12px;
          border-radius: 8px;
          border: none;
          outline: none;
          background: rgba(255, 255, 255, 0.15);
          color: #ffffff;
        }

        input::placeholder {
          color: #cbd5f5;
        }

        .btn-submit {
          width: 100%;
          padding: 12px;
          margin-top: 10px;
          border: none;
          border-radius: 10px;
          background: linear-gradient(135deg, #6366f1, #4f46e5);
          color: #ffffff;
          font-size: 16px;
          cursor: pointer;
          transition: 0.3s;
        }

        .btn-submit:hover {
          opacity: 0.9;
        }
      `}</style>
    </div>
  );
}