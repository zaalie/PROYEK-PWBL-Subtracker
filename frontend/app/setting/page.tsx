"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [username, setUsername] = useState("User SubTracker");
  const [email, setEmail] = useState("user@email.com");
  const [reminder, setReminder] = useState("3");
  const [theme, setTheme] = useState("Light");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Pengaturan berhasil disimpan (dummy)");
  };

  return (
    <>
      <div className="settings-card">
        <h1>Pengaturan Akun</h1>

        <form onSubmit={handleSave}>
          <label>Nama Pengguna</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Pengingat Tagihan</label>
          <select
            value={reminder}
            onChange={(e) => setReminder(e.target.value)}
          >
            <option value="1">H-1</option>
            <option value="3">H-3</option>
            <option value="7">H-7</option>
          </select>

          <label>Tema Aplikasi</label>
          <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option>Light</option>
            <option>Dark</option>
          </select>

          <button type="submit">Simpan Pengaturan</button>
        </form>
      </div>

      {/* CSS DIGABUNG DI FILE INI */}
      <style jsx global>{`
        body {
          margin: 0;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #6366f1, #4338ca);
          font-family: Arial, sans-serif;
        }

        .settings-card {
          width: 420px;
          background: white;
          padding: 30px;
          border-radius: 14px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
        }

        h1 {
          text-align: center;
          color: #4338ca;
          margin-bottom: 25px;
        }

        label {
          display: block;
          font-size: 14px;
          margin-bottom: 6px;
          margin-top: 12px;
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
          border-color: #6366f1;
        }

        button {
          width: 100%;
          margin-top: 20px;
          padding: 12px;
          background: #6366f1;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
        }

        button:hover {
          background: #4338ca;
        }
      `}</style>
    </>
  );
}
