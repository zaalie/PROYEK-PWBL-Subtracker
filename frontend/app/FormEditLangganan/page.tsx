"use client";

import { useState } from "react";

export default function EditLanggananPage() {
  const [formData, setFormData] = useState({
    nama: "",
    harga: "",
    siklus: "Bulanan",
    jatuhTempo: "",
  });
