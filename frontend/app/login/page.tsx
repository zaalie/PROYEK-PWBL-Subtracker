"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Email dan password wajib diisi");
      return;
    }

    localStorage.setItem("token", "dummy-token");
    router.push("/");
  };

  return (
    <>
      {/* CARD LOGIN LANGSUNG */}
      <div className="login-card">
        <h2>SUBTRACKER</h2>
        <p className="subtitle">
          Login untuk mengelola langganan digital Anda
        </p>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="masukan gmail"
              value={email}
              onChange={(e) => (e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Masukan password"
              value={password}
              onChange={(e) => (e.target.value)}
            />
          </div>

          <button type="Submit">Login</button>
        </form>
      </div>

      {/* CSS LANGSUNG DI page.tsx */}
      <style jsx global>{`
       body {
  margin: 0;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Arial, sans-serif;

  background-image: linear-gradient(
      rgba(2, 6, 23, 0.75),
      rgba(2, 6, 23, 0.75)
    ),
    url("/login.png");

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

        .login-card {
          width: 380px;
          background: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
        }

        h2 {
          text-align: center;
          color: #1e40af;
          margin-bottom: 5px;
        }

        .subtitle {
          text-align: center;
          font-size: 14px;
          color: #555;
          margin-bottom: 25px;
        }

        .input-group {
          margin-bottom: 15px;
        }

        label {
          display: block;
          font-size: 14px;
          margin-bottom: 6px;
        }

        input {
          width: 100%;
          padding: 10px;
          border-radius: 6px;
          border: 1px solid #ccc;
        }

        input:focus {
          outline: none;
          border-color: #2563eb;
        }

        button {
          width: 100%;
          padding: 12px;
          background-color: #2563eb;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 16px;
          cursor: pointer;
          margin-top: 10px;
        }

        button:hover {
          background-color: #1e40af;
        }
      `}</style>
    </>
  );
}
