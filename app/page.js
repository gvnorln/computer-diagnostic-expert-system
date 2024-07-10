"use client";

import React, { useState } from "react";
import Questionnaire from "../components/Questionnaire";

const diagnosis = {
  A01: {
    questions: [
      "Apakah lampu indikator power pada monitor tidak menyala sama sekali?",
      "Apakah terdapat garis horisontal/vertikal di tengah monitor?",
    ],
    detail: "Kerusakan pada monitor",
    solution:
      "Periksa kabel power dan konektor, jika masih tidak menyala, bawa ke teknisi.",
  },
  A02: {
    questions: [
      "Apakah tidak ada tampilan awal BIOS?",
      "Apakah muncul pesan eror pada BIOS?",
      "Apakah tombol hidup tapi tidak ada gambar tertampil di monitor?",
      "Apakah sering terjadi hang/crash saat menjalankan aplikasi?",
      "Apakah tiba-tiba OS melakukan restart otomatis?",
      "Apakah keluarnya blue screen pada OS Windows?",
      "Apakah belum sampai Windows sudah restart lagi?",
    ],
    detail: "Masalah pada motherboard atau BIOS",
    solution: "Periksa koneksi hardware, coba reset BIOS atau update BIOS.",
  },
  A03: {
    questions: [
      "Apakah sering terjadi hang/crash saat menjalankan aplikasi?",
      "Apakah selalu Scandisk ketika booting?",
      "Apakah tiba-tiba OS melakukan restart otomatis?",
      "Apakah keluarnya blue screen pada OS Windows?",
      "Apakah belum sampai Windows sudah restart lagi?",
    ],
    detail: "Masalah pada hard drive",
    solution:
      "Periksa hard drive untuk bad sector, lakukan backup data dan pertimbangkan untuk mengganti hard drive.",
  },
  A04: {
    questions: [
      "Apakah tidak ada tampilan awal BIOS?",
      "Apakah tombol hidup tapi tidak ada gambar tertampil di monitor?",
      "Apakah muncul pesan error saat menjalankan game atau aplikasi grafis?",
      "Apakah device driver informasi tidak terdeteksi dalam device manager?",
      "Apakah keluarnya blue screen pada OS Windows?",
    ],
    detail: "Masalah pada kartu grafis",
    solution:
      "Periksa koneksi kartu grafis, update atau reinstall driver kartu grafis.",
  },
  A05: {
    questions: [
      "Apakah sering terjadi hang/crash saat menjalankan aplikasi?",
      "Apakah device driver informasi tidak terdeteksi dalam device manager?",
      "Apakah tiba-tiba OS melakukan restart otomatis?",
      "Apakah keluarnya blue screen pada OS Windows?",
      "Apakah masalah pada koneksi dan inputan?",
    ],
    detail: "Masalah pada RAM",
    solution: "Periksa RAM, coba bersihkan slot RAM, atau ganti RAM.",
  },
  A06: {
    questions: [
      "Apakah fan PSU tidak nyala?",
      "Apakah sering tiba-tiba mati tanpa sebab?",
      "Apakah tidak ada indikasi masuk power?",
      "Apakah mati total?",
    ],
    detail: "Kerusakan pada PSU (Power Supply Unit)",
    solution:
      "Periksa kabel PSU, pastikan semua koneksi terpasang dengan baik. Jika masih tidak berfungsi, pertimbangkan untuk mengganti PSU.",
  },
  A07: {
    questions: [
      "Apakah tombol hidup tapi tidak ada gambar tertampil di monitor?",
      "Apakah device driver informasi tidak terdeteksi dalam device manager?",
      "Apakah masalah pada koneksi dan inputan?",
      "Apakah sering tiba-tiba mati tanpa sebab?",
      "Apakah device tidak terdeteksi dalam BIOS?",
      "Apakah mati total?",
    ],
    detail: "Kerusakan pada motherboard",
    solution:
      "Periksa koneksi hardware pada motherboard, lakukan reset BIOS, jika masih bermasalah pertimbangkan untuk mengganti motherboard.",
  },
  A08: {
    questions: [
      "Apakah tidak ada tampilan awal BIOS?",
      "Apakah muncul pesan eror pada BIOS?",
      "Apakah sering tiba-tiba mati tanpa sebab?",
      "Apakah aplikasi berjalan dengan lambat?",
    ],
    detail: "Masalah pada CPU",
    solution:
      "Periksa suhu CPU, pastikan fan CPU bekerja dengan baik, coba bersihkan dan aplikasikan ulang thermal paste, atau ganti CPU jika perlu.",
  },
  A09: {
    questions: [
      "Apakah sering terjadi hang/crash saat menjalankan aplikasi?",
      "Apakah keluarnya blue screen pada OS Windows?",
      "Apakah aplikasi sering not responding?",
    ],
    detail: "Masalah pada sistem operasi atau software",
    solution:
      "Periksa dan update sistem operasi dan driver, pertimbangkan untuk reinstall sistem operasi.",
  },
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDiagnosisOpen, setIsDiagnosisOpen] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubmit = async (answers) => {
    const res = await fetch("/api/diagnose", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ answers }),
    });

    const data = await res.json();
    setResult(data.issues);
  };

  const handleReset = () => {
    setResult(null);
    setIsDiagnosisOpen(false);
  };

  return (
    <div>
      <nav className="bg-blue-600 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white text-2xl font-bold">Diagnosa Komputer</div>
          <div className="hidden md:flex space-x-4">
            <a href="#home" className="text-white hover:text-gray-200">
              Home
            </a>
            <a href="#about" className="text-white hover:text-gray-200">
              About
            </a>
            <a href="#services" className="text-white hover:text-gray-200">
              Services
            </a>
            <a href="#contact" className="text-white hover:text-gray-200">
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-7 6h7"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <a
              href="#home"
              className="block px-4 py-2 text-white hover:bg-blue-700"
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-4 py-2 text-white hover:bg-blue-700"
            >
              About
            </a>
            <a
              href="#services"
              className="block px-4 py-2 text-white hover:bg-blue-700"
            >
              Services
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 text-white hover:bg-blue-700"
            >
              Contact
            </a>
          </div>
        )}
      </nav>

      <header
        id="home"
        className="bg-gray-200 min-h-screen flex items-center justify-center"
      >
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Sistem Pakar Diagnosa Kerusakan Komputer
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Solusi cepat dan akurat untuk mendiagnosa kerusakan komputer Anda.
          </p>
          <button
            onClick={() => setIsDiagnosisOpen(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Mulai Diagnosa
          </button>
        </div>
      </header>

      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Tentang Kami
          </h2>
          <p className="text-lg text-gray-600">
            Kami menyediakan solusi untuk mendiagnosa kerusakan komputer dengan
            cepat dan akurat menggunakan sistem pakar yang telah terbukti
            efektif.
          </p>
        </div>
      </section>

      <section id="services" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Layanan Kami
          </h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white p-6 rounded shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Diagnosa Hardware
                </h3>
                <p className="text-gray-600">
                  Mendiagnosa kerusakan pada komponen hardware komputer Anda.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white p-6 rounded shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Diagnosa Software
                </h3>
                <p className="text-gray-600">
                  Mendeteksi masalah pada software dan sistem operasi komputer
                  Anda.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white p-6 rounded shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Solusi Perbaikan
                </h3>
                <p className="text-gray-600">
                  Memberikan solusi perbaikan untuk kerusakan yang terdeteksi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Kontak Kami</h2>
          <p className="text-lg text-gray-600">
            Hubungi kami untuk informasi lebih lanjut tentang layanan kami.
          </p>
          <form className="mt-8">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <input
                type="text"
                placeholder="Nama"
                className="flex-1 p-2 mb-4 md:mb-0 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="flex-1 p-2 mb-4 md:mb-0 border border-gray-300 rounded"
              />
            </div>
            <textarea
              placeholder="Pesan"
              className="w-full p-2 mt-4 border border-gray-300 rounded"
            ></textarea>
            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </section>

      {isDiagnosisOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg w-full max-w-2xl relative">
            <button
              onClick={() => setIsDiagnosisOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
              Sistem Pakar Diagnosa Kerusakan Komputer
            </h1>
            <Questionnaire onSubmit={handleSubmit} />
            {result && (
              <div className="mt-8 p-6 bg-gray-200 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  Hasil Diagnosa
                </h2>
                {result.length > 0 ? (
                  <ul className="divide-y divide-gray-400">
                    {result.map((issue, index) => (
                      <li key={index} className="py-4">
                        <p className="text-lg text-gray-700">
                          <strong>Kode Kerusakan:</strong> {issue.code}
                        </p>
                        <p className="mt-2 text-gray-600">
                          <strong>Detail:</strong> {issue.detail}
                        </p>
                        <p className="mt-2 text-gray-600">
                          <strong>Solusi:</strong> {issue.solution}
                        </p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-lg text-gray-700">
                    Tidak ada kerusakan yang terdeteksi.
                  </p>
                )}
                <button
                  onClick={handleReset}
                  className="mt-4 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
                >
                  Apakah ada kerusakan lain?
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
