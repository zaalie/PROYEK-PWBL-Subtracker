"use client";

import { useState } from "react";

export default function SettingPage() {
  const [settings, setSettings] = useState({
    namaPengguna: "",
    email: "",
    notifikasi: "Aktif",
    tema: "Dark",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(settings);
    alert("Pengaturan berhasil disimpan!");
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Pengaturan</h1>
        <p className="subtitle">
          Atur preferensi akun dan aplikasi Anda
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nama Pengguna</label>
            <input
              type="text"
              name="namaPengguna"
              placeholder="Annisa Zulfa"
              value={settings.namaPengguna}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="email@example.com"
              value={settings.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Notifikasi</label>
            <select
              name="notifikasi"
              value={settings.notifikasi}
              onChange={handleChange}
            ></select>

            <option value="Aktif">Aktif</option>
              <option value="Nonaktif">Nonaktif</option>
            </select>
          </div>

           <div className="form-group">
            <label>Tema Aplikasi</label>
            <select
              name="tema"
              value={settings.tema}
              onChange={handleChange}
            ></select>

             <option value="Dark">Dark</option>
              <option value="Light">Light</option>
            </select>
          </div>

           <button type="submit" className="btn-submit">
            Simpan Pengaturan
          </button>
        </form>
      </div>