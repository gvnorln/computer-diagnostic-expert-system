"use client"
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
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

      <header className="bg-gray-200 min-h-screen flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Sistem Pakar Diagnosa Kerusakan Komputer</h1>
          <p className="text-lg text-gray-600 mb-8">Solusi cepat dan akurat untuk mendiagnosa kerusakan komputer Anda.</p>
          <a href="#services" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
            Mulai Diagnosa
          </a>
        </div>
      </header>

      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Tentang Kami</h2>
          <p className="text-lg text-gray-600">
            Kami menyediakan solusi untuk mendiagnosa kerusakan komputer dengan cepat dan akurat menggunakan sistem pakar yang telah terbukti efektif.
          </p>
        </div>
      </section>

      <section id="services" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Layanan Kami</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white p-6 rounded shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Diagnosa Hardware</h3>
                <p className="text-gray-600">
                  Mendiagnosa kerusakan pada komponen hardware komputer Anda.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white p-6 rounded shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Diagnosa Software</h3>
                <p className="text-gray-600">
                  Mendeteksi masalah pada software dan sistem operasi komputer Anda.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white p-6 rounded shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Solusi Perbaikan</h3>
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
            <button type="submit" className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Kirim Pesan
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
