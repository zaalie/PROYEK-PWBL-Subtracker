"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const [subscriptions, setSubscriptions] = useState([
    {
      name: "Netflix",
      price: 150000,
      dueDate: "2025-01-25",
    },
    {
      name: "Spotify",
      price: 54000,
      dueDate: "2025-01-20",
    },
  ]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
  }, [router]);

  return (
    <>
      <div className="dashboard">
        <h1>Dashboard SubTracker</h1>
        <p className="subtitle">
          Kelola dan pantau tagihan langganan digital Anda
        </p>

        <div className="summary">
          <div className="card">
            <h3>Total Langganan</h3>
            <p>{subscriptions.length}</p>
          </div>

          <div className="card">
            <h3>Total Biaya / Bulan</h3>
            <p>
              Rp{" "}
              {subscriptions
                .reduce((a, b) => a + b.price, 0)
                .toLocaleString("id-ID")}
            </p>
          </div>
        </div>

        <h2>Langganan Aktif</h2>

        <table>
          <thead>
            <tr>
              <th>Nama Layanan</th>
              <th>Harga</th>
              <th>Jatuh Tempo</th>
            </tr>
          </thead>
          <tbody>
            {subscriptions.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>Rp {item.price.toLocaleString("id-ID")}</td>
                <td>{item.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          className="logout"
          onClick={() => {
            localStorage.removeItem("token");
            router.push("/login");
          }}
        >
          Logout
        </button>
      </div>

      {/* CSS HALAMAN UTAMA */}
      <style jsx global>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #f3f4f6;
        }

        .dashboard {
          padding: 30px;
        }

        h1 {
          color: #1e40af;
          margin-bottom: 5px;
        }

        .subtitle {
          color: #555;
          margin-bottom: 30px;
        }

        .summary {
          display: flex;
          gap: 20px;
          margin-bottom: 30px;
        }

        .card {
          background: white;
          padding: 20px;
          border-radius: 10px;
          width: 200px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .card h3 {
          font-size: 14px;
          color: #555;
        }

        .card p {
          font-size: 22px;
          font-weight: bold;
          color: #2563eb;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          background: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        th,
        td {
          padding: 12px;
          text-align: left;
        }

        th {
          background: #2563eb;
          color: white;
        }

        tr:nth-child(even) {
          background: #f9fafb;
        }

        .logout {
          margin-top: 30px;
          padding: 10px 20px;
          background: #ef4444;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }

        .logout:hover {
          background: #b91c1c;
        }
      `}</style>
    </>
  );
}
