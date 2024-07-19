"use client";

import React, { useState } from "react";
import Questionnaire from "../components/Questionnaire";

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
            <a href="#home" className="text-white hover:text-gray-200">Home</a>
            <a href="#about" className="text-white hover:text-gray-200">About</a>
            <a href="#services" className="text-white hover:text-gray-200">Services</a>
            <a href="#contact" className="text-white hover:text-gray-200">Contact</a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <a href="#home" className="block px-4 py-2 text-white hover:bg-blue-700">Home</a>
            <a href="#about" className="block px-4 py-2 text-white hover:bg-blue-700">About</a>
            <a href="#services" className="block px-4 py-2 text-white hover:bg-blue-700">Services</a>
            <a href="#contact" className="block px-4 py-2 text-white hover:bg-blue-700">Contact</a>
          </div>
        )}
      </nav>

      <header id="home" className="bg-gray-200 min-h-screen flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Sistem Pakar Diagnosa Kerusakan Komputer</h1>
          <p className="text-lg text-gray-600 mb-8">Solusi cepat dan akurat untuk mendiagnosa kerusakan komputer Anda.</p>
          <button onClick={() => setIsDiagnosisOpen(true)} className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Mulai Diagnosa</button>
        </div>
      </header>

      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Tentang Kami</h2>
          <p className="text-lg text-gray-600">Kami menyediakan solusi untuk mendiagnosa kerusakan komputer dengan cepat dan akurat menggunakan sistem pakar yang telah terbukti efektif.</p>
        </div>
      </section>

      <section id="services" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Layanan Kami</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white p-6 rounded shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Diagnosa Hardware</h3>
                <p className="text-gray-600">Mendiagnosa kerusakan pada komponen hardware komputer Anda.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white p-6 rounded shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Diagnosa Software</h3>
                <p className="text-gray-600">Mendeteksi masalah pada software dan sistem operasi komputer Anda.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white p-6 rounded shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Solusi Perbaikan</h3>
                <p className="text-gray-600">Memberikan solusi perbaikan untuk kerusakan yang terdeteksi.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Kontak Kami</h2>
            <p className="text-lg text-gray-600 mb-8">Hubungi kami untuk informasi lebih lanjut tentang layanan kami.</p>
            <form className="space-y-4">
              <div className="flex flex-col">
                <input type="text" placeholder="Nama" className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="flex flex-col">
                <input type="email" placeholder="Email" className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="flex flex-col">
                <textarea placeholder="Pesan" className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-200">Kirim Pesan</button>
            </form>
          </div>
        </div>
      </section>

      {isDiagnosisOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded shadow-lg w-full max-w-2xl relative overflow-y-auto max-h-screen">
          <button onClick={() => setIsDiagnosisOpen(false)} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Sistem Pakar Diagnosa Kerusakan Komputer</h1>
          <Questionnaire onSubmit={handleSubmit} />
          {result && (
            <div className="mt-8 p-6 bg-gray-200 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Hasil Diagnosa</h2>
              {result.length > 0 ? (
                <ul className="divide-y divide-gray-400">
                  {result.map((issue, index) => (
                    <li key={index} className="py-4">
                      <p className="text-lg text-gray-700"><strong>Kode Kerusakan:</strong> {issue.code}</p>
                      <p className="mt-2 text-gray-600"><strong>Detail:</strong> {issue.detail}</p>
                      <p className="mt-2 text-gray-600"><strong>Persentase:</strong> {issue.cf}%</p>
                      <p className="mt-2 text-gray-600"><strong>Solusi:</strong> {issue.solution}</p>
                      
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-lg text-gray-700">Tidak ada kerusakan terdeteksi berdasarkan jawaban Anda.</p>
              )}
              <button onClick={handleReset} className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Reset Diagnosa</button>
            </div>
          )}
        </div>
      </div>
      
      )}
    </div>
  );
};

export default App;
