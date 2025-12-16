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