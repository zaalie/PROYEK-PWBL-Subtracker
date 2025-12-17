"use client";

import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };
   return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-left">
          <h2>SubTracker</h2>
        </div>
 <div className="navbar-right">
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>
 {/* MAIN CONTENT */}
      <main className="dashboard">
        <h1>Dashboard</h1>
        <p className="subtitle">
          Kelola dan pantau seluruh langganan digital Anda dengan mudah
        </p>
{/* FEATURE CARDS */}
        <div className="grid">
          <div className="card" onClick={() => alert("Fitur Tambah Langganan")}>
            <h3>➕ Tambah Langganan</h3>
            <p>Catat layanan baru seperti Netflix, Spotify, Adobe</p>
          </div>
 <div className="card" onClick={() => alert("Fitur Daftar Langganan")}>
            <h3>📋 Daftar Langganan</h3>
            <p>Lihat semua langganan aktif Anda</p>
          </div>

