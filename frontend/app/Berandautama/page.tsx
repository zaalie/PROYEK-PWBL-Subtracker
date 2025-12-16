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
  <div className="title-block">
    <h1>SELAMAT DATANG</h1>
  </div>

  <p>
    Kelola semua tagihan langganan Anda dalam satu platform modern,
    aman, dan terintegrasi.
  </p>

  <div className="hero-buttons">
    <button className="primary-btn">LOGIN</button>
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

     .hero {
  min-height: 100vh;
  width: 100%;
 

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: linear-gradient(
      rgba(2, 6, 23, 0.8),
      rgba(2, 6, 23, 0.8)
    ),
    url("/bg.jpg");

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}





     .hero-content {
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.title-block h1 {
  font-size: 100px;  
  font-weight: 1000;
  color: #ffffff;
  margin: 0;
}


.hero p {
  font-size: 30px;
  color: #cbd5f5;
  margin-bottom: 50px;
}


        

        .hero p {
          font-size: 18px;
          color: #cbd5f5;
          margin-bottom: 35px;
        }

       .hero-buttons {
  display: flex;
  justify-content: center; 
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

        .title-block {
  padding: 24px 48px;
  
  
}

.title-block h1 {
  font-size: 50px;   
  font-weight: 800;
  color: #ffffff;
  margin: 0;
}



      `}</style>
    </>
  );
}
