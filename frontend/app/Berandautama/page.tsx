"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">SubTracker</h2>
        <button className="login-btn" onClick={() => router.push("/login")}>
          Login
        </button>
      </nav>

{/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content"></div>
        <h1>
            Manajemen & Pengingat
            <br />
            Langganan Digital
          </h1>
          <p>
            Kelola semua tagihan langganan Anda dalam satu platform modern,
            aman, dan terintegrasi RESTful API.
          </p>
<div className="hero-buttons">
            <button className="primary-btn">Mulai Sekarang</button>
            <button className="secondary-btn">Pelajari Lebih Lanjut</button>
          </div>
        </div>
      </section>
{/* CSS LANGSUNG DI FILE */}
      <style jsx global>{`
        body {
          margin: 0;
          font-family: "Segoe UI", Arial, sans-serif;
          color: white;
        }
/* NAVBAR */
        .navbar {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 25px 60px;
          z-index: 10;
        }
.logo {
          font-size: 22px;
          font-weight: 700;
          letter-spacing: 1px;
        }
.login-btn {
          padding: 10px 26px;
          background: transparent;
          color: #38bdf8;
          border: 1px solid #38bdf8;
          border-radius: 8px;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
.login-btn:hover {
          background: #38bdf8;
          color: #020617;
        }
/* HERO */
        .hero {
          height: 100vh;
          display: flex;
          align-items: center;
          padding-left: 80px;

