"use client";

import { useState } from "react";

export default function ReminderPage() {
  const [reminder, setReminder] = useState({
    layanan: "",
    tanggal: "",
    waktu: "1", // H-1 default
  });