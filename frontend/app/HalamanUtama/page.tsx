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
<div className="card" onClick={() => alert("Fitur Pengingat")}>
            <h3>⏰ Pengingat Tagihan</h3>
            <p>Notifikasi sebelum jatuh tempo</p>
          </div>
<div className="card" onClick={() => alert("Fitur Statistik")}>
            <h3>📊 Statistik Bulanan</h3>
            <p>Analisis total pengeluaran Anda</p>
          </div>
  <div className="card" onClick={() => alert("Fitur Pengaturan")}>
            <h3>⚙️ Pengaturan</h3>
            <p>Kelola akun dan preferensi</p>
          </div>
<div className="card" onClick={() => alert("Fitur API")}>
            <h3>🔗 REST API</h3>
            <p>Akses endpoint backend SubTracker</p>
          </div>
        </div>
      </main>
      
      {/* CSS */}
      <style jsx global>{`
        body {
          margin: 0;
          font-family: "Segoe UI", Arial, sans-serif;
          background: linear-gradient(
              rgba(2, 6, 23, 0.85),
              rgba(2, 6, 23, 0.85)
            ),
            url("/bg.jpg");
          background-size: cover;
          background-position: center;
          color: white;
        }


