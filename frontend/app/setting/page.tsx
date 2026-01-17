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