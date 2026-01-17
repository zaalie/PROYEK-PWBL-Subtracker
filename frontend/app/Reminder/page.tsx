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