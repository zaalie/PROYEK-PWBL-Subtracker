"use client";

import { useState } from "react";

export default function SettingPage() {
  const [settings, setSettings] = useState({
    namaPengguna: "",
    email: "",
    notifikasi: "Aktif",
    tema: "Dark",
  });

  