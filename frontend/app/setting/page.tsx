"use client";

import { useState } from "react";

export default function SettingPage() {
  const [settings, setSettings] = useState({
    namaPengguna: "",
    email: "",
    notifikasi: "Aktif",
    tema: "Dark",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  