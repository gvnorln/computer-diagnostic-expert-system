// pages/api/diagnose.js

export default function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { answers } = req.body;
      console.log("Received answers:", answers); // Logging received answers

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
          detail: "Masalah pada RAM",
          solution:
            "Periksa komponen RAM dan coba bersihkan slot RAM, atau ganti RAM.",
        },
        A03: {
          questions: [
            "Apakah sering terjadi hang/crash saat menjalankan aplikasi?",
            "Apakah selalu Scandisk ketika booting?",
            "Apakah tiba-tiba OS melakukan restart otomatis?",
            "Apakah keluarnya blue screen pada OS Windows?",
            "Apakah belum sampai Windows sudah restart lagi?",
          ],
          detail: "Masalah pada Penyimpanan",
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
          detail: "Masalah pada kartu grafis/VGA",
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
          detail: "Masalah pada OS",
          solution: "Update OS atau reinstall OS.",
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
          detail: "Masalah pada software",
          solution:
            "Periksa dan update software dan driver, pertimbangkan untuk reinstall software.",
        },
      };

      const rules = [
        { issue: 'A01', symptoms: [true, true, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, true, null, null, null], cf: 0.8 },
        { issue: 'A02', symptoms: [null, null, true, true, null, true, true, null, null, null, true, true, null, true, null, null, null, null, null, null, null], cf: 0.7 },
        { issue: 'A03', symptoms: [null, null, null, null, null, null, true, true, null, null, true, true, null, true, null, null, null, null, null, null, null], cf: 0.7 },
        { issue: 'A04', symptoms: [null, null, true, null, null, true, null, null, true, true, null, true, null, null, null, null, null, null, null, null, null], cf: 0.8 },
        { issue: 'A05', symptoms: [null, null, null, null, null, null, true, null, null, true, true, true, true, null, null, null, null, null, null, null, null], cf: 0.6 },
        { issue: 'A06', symptoms: [null, null, null, null, true, null, null, null, null, null, null, null, null, null, true, null, null, null, null, true, true], cf: 0.9 },
        { issue: 'A07', symptoms: [null, null, null, null, null, true, null, null, true, true, null, null, true, null, null, null, null, true, null, true, null], cf: 0.85 },
        { issue: 'A08', symptoms: [true, true, null, true, null, null, null, null, null, null, null, null, null, null, true, true, null, null, null, null, null], cf: 0.7 },
        { issue: 'A09', symptoms: [null, null, null, null, null, null, true, null, null, null, null, true, null, null, null, null, null, null, null, null, true], cf: 0.6 },
      ];

      const identifiedIssues = rules.reduce((acc, rule) => {
        const matchedSymptoms = rule.symptoms.filter((symptom, index) => symptom !== null && symptom === answers[index]);
        const cf = rule.cf * (matchedSymptoms.length / rule.symptoms.filter(symptom => symptom !== null).length);

        if (cf > 0) {
          acc.push({
            code: rule.issue,
            detail: diagnosis[rule.issue].detail,
            solution: diagnosis[rule.issue].solution,
            cf: (cf * 100).toFixed(2), // Convert to percentage
          });
        }

        return acc;
      }, []);

      console.log("Diagnosed issues:", identifiedIssues);
      res.status(200).json({ issues: identifiedIssues });
    } catch (error) {
      console.error("Error in diagnosing:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
