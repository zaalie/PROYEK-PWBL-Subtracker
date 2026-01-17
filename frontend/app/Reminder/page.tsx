"use client";

import { useState } from "react";

export default function ReminderPage() {
  const [reminder, setReminder] = useState({
    layanan: "",
    tanggal: "",
    waktu: "1", // H-1 default
  });

  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setReminder({ ...reminder, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(reminder);
    alert("Reminder berhasil disimpan!");
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Reminder</h1>
        <p className="subtitle">
          Atur pengingat jatuh tempo langganan Anda
        </p> 

         <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nama Layanan</label>
            <input
              type="text"
              name="layanan"
              placeholder="Netflix / Spotify"
              value={reminder.layanan}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Tanggal Jatuh Tempo</label>
            <input
              type="date"
              name="tanggal"
              value={reminder.tanggal}
              onChange={handleChange}
              required
            />
          </div>

           <div className="form-group">
            <label>Waktu Pengingat</label>
            <select
              name="waktu"
              value={reminder.waktu}
              onChange={handleChange}
            >
              <option value="1">H-1</option>
              <option value="3">H-3</option>
              <option value="7">H-7</option>
            </select>

          </div>
           <button type="submit" className="btn-submit">
            Simpan Reminder
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
