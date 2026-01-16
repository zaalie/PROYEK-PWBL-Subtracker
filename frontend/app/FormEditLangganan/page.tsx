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