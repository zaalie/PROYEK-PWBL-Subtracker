"use client";

import { useEffect, useState } from "react";

export default function ReminderPage() {
  const [reminders, setReminders] = useState([
    {
      name: "Netflix",
      dueDate: "2025-01-25",
      daysLeft: 3,
    },
    {
      name: "Spotify",
      dueDate: "2025-01-20",
      daysLeft: 1,
    },
    {
      name: "Google Drive",
      dueDate: "2025-01-30",
      daysLeft: 10,
    },
  ]);

  return (
    <>
      <div className="container">
        <h1>Pengingat Tagihan</h1>
        <p className="subtitle">
          Langganan yang akan segera jatuh tempo
        </p>

        <div className="reminder-list">
          {reminders.map((item, index) => (
            <div
              key={index}
              className={`reminder-card ${
                item.daysLeft <= 1
                  ? "danger"
                  : item.daysLeft <= 3
                  ? "warning"
                  : "safe"
              }`}
            >
              <h3>{item.name}</h3>
              <p>Jatuh tempo: {item.dueDate}</p>
              <span>{item.daysLeft} hari lagi</span>
            </div>
          ))}
        </div>
      </div>

      {/* CSS DIGABUNG DI SINI */}
      <style jsx global>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #f3f4f6;
        }

        .container {
          padding: 30px;
        }

        h1 {
          color: #1e40af;
          margin-bottom: 5px;
        }

        .subtitle {
          color: #555;
          margin-bottom: 25px;
        }

        .reminder-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 20px;
        }

        .reminder-card {
          background: white;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .reminder-card h3 {
          margin: 0 0 10px;
        }

        .reminder-card p {
          font-size: 14px;
          margin: 0 0 8px;
          color: #555;
        }

        .reminder-card span {
          font-weight: bold;
        }

        /* STATUS WARNA */
        .danger {
          border-left: 6px solid #ef4444;
        }

        .warning {
          border-left: 6px solid #f59e0b;
        }

        .safe {
          border-left: 6px solid #22c55e;
        }
      `}</style>
    </>
  );
}
