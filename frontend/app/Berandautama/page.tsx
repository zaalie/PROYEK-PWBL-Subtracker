"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">SubTracker</h2>
        <button className="" onClick={() => router.push("/")}>
         
        </button>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            SELAMAT DATANG
            <br />
            
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
          background-image: linear-gradient(
              rgba(2, 6, 23, 0.75),
              rgba(2, 6, 23, 0.75)
            ),
            url("https://images.unsplash.com/photo-1553877522-43269d4ea984");
          background-size: cover;
          background-position: center;
        }

        .hero-content {
          max-width: 600px;
        }

        .hero h1 {
          font-size: 48px;
          font-weight: 800;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .hero p {
          font-size: 18px;
          color: #cbd5f5;
          margin-bottom: 35px;
        }

        .hero-buttons {
          display: flex;
          gap: 15px;
        }

        .primary-btn {
          padding: 14px 28px;
          background: #38bdf8;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          color: #020617;
        }

        .primary-btn:hover {
          background: #0ea5e9;
        }

        .secondary-btn {
          padding: 14px 28px;
          background: transparent;
          border: 1px solid #94a3b8;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
          color: #e5e7eb;
        }

        .secondary-btn:hover {
          border-color: #38bdf8;
          color: #38bdf8;
        }
      `}</style>
    </>
  );
}
