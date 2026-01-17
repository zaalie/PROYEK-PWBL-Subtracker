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

      {/* Styling */}
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