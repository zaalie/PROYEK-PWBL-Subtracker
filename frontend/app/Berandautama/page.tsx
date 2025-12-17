"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <>

    
      {/* NAVBAR */}
     <nav className="navbar">
 

  {/* KANAN */}
  <div className="navbar-right">
    <img
      src="/logo.png"
      alt="SubTracker Logo"
      className="navbar-logo"
    />
  </div>
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

        .logo-text {
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 1px;
  color: white;
}

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

.navbar {
  background: rgba(2, 6, 23, 0.55);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255,255,255,0.08);
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
  font-size: 20px;
  font-weight: 400;
  max-width: 760px;

  color: rgba(226, 232, 240, 0.85); /* putih soft */
  line-height: 1.7;
  letter-spacing: 0.3px;

  margin: 28px auto 45px;
}



        

        .hero-subtitle {
  position: relative;
}

.hero-subtitle::after {
  content: "";
  display: block;
  width: 80px;
  height: 3px;
  margin: 22px auto 0;

  background: linear-gradient(90deg, #38bdf8, #22c55e);
  border-radius: 999px;
}

.hero p {
  animation: fadeUp 1s ease-out forwards;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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

     .title-block h1 {
  letter-spacing: 3px;
  text-shadow: 0 8px 30px rgba(0,0,0,0.6);
}


.title-block h1 {
  background: linear-gradient(90deg, #ffffff, #94a3b8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}



.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  padding: 20px 60px;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;

  z-index: 9999;
}
 .navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;          /* ⬅️ KUNCI TINGGI NAVBAR */
  padding: 0 60px;
  box-sizing: border-box;
}

.navbar-right {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%); /* ⬅️ TETAP CENTER */
}

.navbar-logo {
  height: 60px;         /* BOLEH DIGEDEIN */
  width: auto;
}


.navbar-logo {
  height: 300px;
  width: auto;
}







      `}</style>
    </>
  );
}
