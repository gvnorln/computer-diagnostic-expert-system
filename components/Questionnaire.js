import React, { useState } from 'react';

const questions = [
  "Apakah lampu indikator power pada monitor tidak menyala sama sekali?",
  "Apakah terdapat garis horisontal/vertikal di tengah monitor?",
  "Apakah tidak ada tampilan awal BIOS?",
  "Apakah muncul pesan error pada BIOS (isi pesan selalu berbeda tergantung pada kondisi tertentu)?",
  "Apakah fan PSU tidak nyala?",
  "Apakah tombol hidup tapi tidak ada gambar tertampil di monitor?",
  "Apakah sering terjadi hang/crash saat menjalankan aplikasi?",
  "Apakah selalu Scandisk ketika booting?",
  "Apakah muncul pesan error saat menjalankan game atau aplikasi grafis?",
  "Apakah device driver informasi tidak terdeteksi dalam device manager, meski driver telah di install?",
  "Apakah tiba-tiba OS melakukan restart otomatis?",
  "Apakah keluarnya blue screen pada OS Windows (isi pesan selalu berbeda tergantung pada kondisi tertentu)?",
  "Apakah masalah pada koneksi dan inputan?",
  "Apakah belum sampai Windows sudah restart lagi?",
  "Apakah sering tiba-tiba mati tanpa sebab?",
  "Apakah aplikasi berjalan dengan lambat, respon yang lambat terhadap inputan?",
  "Apakah device tidak terdeteksi dalam BIOS?",
  "Apakah tampak blok hitam, dan gambar tidak simetris/acak?",
  "Apakah aplikasi sering not responding?",
  "Apakah tidak ada indikasi masuk power?",
  "Apakah mati total?"
];

const Questionnaire = ({ onSubmit }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleChange = (value) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = value === 'yes';
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    setCurrentQuestionIndex((prevIndex) => Math.min(prevIndex + 1, questions.length - 1));
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(answers);
  };

  const allQuestionsAnswered = answers.every(answer => answer !== null);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="p-4 bg-white rounded shadow-md text-slate-800">
        <p className="mb-4">{currentQuestionIndex + 1}. {questions[currentQuestionIndex]}</p>
        <div className="flex items-center space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name={`question-${currentQuestionIndex}`}
              value="yes"
              checked={answers[currentQuestionIndex] === true}
              onChange={() => handleChange('yes')}
              className="mr-2"
            />
            Ya
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name={`question-${currentQuestionIndex}`}
              value="no"
              checked={answers[currentQuestionIndex] === false}
              onChange={() => handleChange('no')}
              className="mr-2"
            />
            Tidak
          </label>
        </div>
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          className="px-4 py-2 bg-gray-500 text-white rounded disabled:opacity-50"
        >
          Previous
        </button>
        {currentQuestionIndex < questions.length - 1 ? (
          <button
            type="button"
            onClick={handleNext}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Next
          </button>
        ) : (
          allQuestionsAnswered && (
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Submit
            </button>
          )
        )}
      </div>
    </form>
  );
};

export default Questionnaire;
