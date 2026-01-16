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