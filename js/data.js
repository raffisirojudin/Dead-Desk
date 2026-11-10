      // DATABASE HANTU
      const ghosts = [
        {
          nama: "Budi Santoso",
          alias: "Si Budi Mulut Manis",
          umur: 54,
          sebab: "Tersedak Bakso",
          asal: "Kebumen, Jawa Tengah",
          pekerjaan: "Pedagang Keliling",
          dosa: "Suka Berbohong",
          kebiasaan: "Hobi melebih-lebihkan cerita di warung kopi",
          karma: ["Rajin Sholat", "Jarang Mandi", "Suka Ngutang"],
          catatan: "Pernah menipu 3 tetangga soal arisan.",
          warna: {
            body: "#c8e8d0",
            aksen: "#5a9a6a",
            mata: "#1a4a2a",
            pipi: "#f0c0a0",
          },
          barang: [
            {
              icon: "📒",
              nama: "Buku Catatan Hutang",
              hint: "Berisi 47 nama dengan tinta berbeda-beda. Mencurigakan.",
            },
            {
              icon: "🧧",
              nama: "Amplop Arisan Kosong",
              hint: "Amplop 'MENANG ARISAN' tapi kosong. Ada noda tip-ex.",
            },
            {
              icon: "🚬",
              nama: "Rokok Kretek",
              hint: "Biasa saja. Tidak ada yang mencurigakan.",
            },
          ],
          dialog: [
            {
              pertanyaan: "Apakah kamu pernah menipu orang lain?",
              jujur: "Saya... ya, saya pernah bohong soal arisan. Saya malu.",
              bohong: "Saya? Menipu? Tidak pernah! Saya pedagang jujur sejati!",
            },
            {
              pertanyaan: "Apa yang kamu lakukan tiap hari?",
              jujur:
                "Jualan keliling. Tapi mulut saya suka nambah-nambahin cerita.",
              bohong:
                "Saya berdagang dengan penuh kejujuran dan membantu tetangga!",
            },
          ],
        },
        {
          nama: "Siti Rahayu",
          alias: "Mbak Siti Dermawan",
          umur: 67,
          sebab: "Usia Tua",
          asal: "Solo, Jawa Tengah",
          pekerjaan: "Guru SD (Purn.)",
          dosa: "Suka Berbagi",
          kebiasaan: "Tiap Jumat bagi-bagi nasi bungkus gratis",
          karma: ["Sabar", "Murah Hati", "Rajin Mengaji"],
          catatan: "Mendirikan yayasan anak yatim di usia 40.",
          warna: {
            body: "#e8d8c8",
            aksen: "#a87850",
            mata: "#3a2010",
            pipi: "#f8c0a8",
          },
          barang: [
            {
              icon: "📚",
              nama: "Buku Rapor Murid Lama",
              hint: "Nilai merah diubah jadi biru — karena beliau bimbing muridnya.",
            },
            {
              icon: "🍱",
              nama: "Rantang Nasi Kosong",
              hint: "Lecek dan penuh goresan. Sering dipakai untuk orang lain.",
            },
            {
              icon: "📿",
              nama: "Tasbih Kayu",
              hint: "Butiran aus di beberapa titik. Tanda sering digunakan.",
            },
          ],
          dialog: [
            {
              pertanyaan: "Apa yang paling kamu banggakan semasa hidup?",
              jujur:
                "Anak-anak didik saya. Banyak yang jadi orang sukses. Itu cukup.",
              bohong: "",
            },
            {
              pertanyaan: "Apakah kamu pernah berbuat jahat?",
              jujur:
                "Pernah marah ke murid nakal, tapi selalu minta maaf keesokan harinya.",
              bohong: "",
            },
          ],
        },
        {
          nama: "Pak Karno",
          alias: "Kang Karno Bluffing",
          umur: 43,
          sebab: "Kecelakaan Motor",
          asal: "Brebes, Jawa Tengah",
          pekerjaan: "Calo Tiket",
          dosa: "Suka Berbohong",
          kebiasaan: "Menjual tiket palsu konser dangdut",
          karma: ["Perokok Berat", "Anti Antri", "Hobi Gosip"],
          catatan: "Pernah ditangkap polisi 2x, lolos 2x.",
          warna: {
            body: "#d0c8c0",
            aksen: "#706050",
            mata: "#2a1808",
            pipi: "#d0a888",
          },
          barang: [
            {
              icon: "🎟️",
              nama: "Tiket Konser Palsu",
              hint: "Tipis dan warnanya luntur. Nomor seri: '000000001'.",
            },
            {
              icon: "📱",
              nama: "HP Dua Kartu",
              hint: "Banyak kontak yang sudah diblokir.",
            },
            {
              icon: "🧴",
              nama: "Parfum Murah Menyengat",
              hint: "Mungkin untuk menutupi bau rokok. Atau menutupi diri.",
            },
          ],
          dialog: [
            {
              pertanyaan: "Kamu kerja apa semasa hidup?",
              jujur:
                "Calo tiket. Tapi yang palsu juga iya, kadang-kadang... sering.",
              bohong:
                "Saya pekerja seni! Membantu distribusi tiket ke masyarakat!",
            },
            {
              pertanyaan: "Pernah ditangkap polisi?",
              jujur: "Dua kali. Tapi saya selalu bisa keluar. Kenal orangnya.",
              bohong: "Tidak pernah! Saya warga negara yang taat hukum!",
            },
          ],
        },
        {
          nama: "Mbak Dewi",
          alias: "Dewi Bunga Desa",
          umur: 29,
          sebab: "Demam Berdarah",
          asal: "Yogyakarta",
          pekerjaan: "Perawat",
          dosa: "Suka Berbagi",
          kebiasaan: "Donor darah tiap 3 bulan, sukarela ke pelosok",
          karma: ["Empati Tinggi", "Suka Kucing", "Vegetarian"],
          catatan: "Merawat ibunya hingga nafas terakhir.",
          warna: {
            body: "#f0e0d8",
            aksen: "#c07888",
            mata: "#3a1820",
            pipi: "#f8b8c0",
          },
          barang: [
            {
              icon: "🩸",
              nama: "Kartu Donor Darah",
              hint: "18 kali donor. Hampir robek di lipatannya karena sering dibuka.",
            },
            {
              icon: "💊",
              nama: "Kotak P3K Mini",
              hint: "Isinya rapi. Ada catatan: 'untuk siapapun yang butuh'.",
            },
            {
              icon: "🐾",
              nama: "Foto Kucing Kampung",
              hint: "Di belakangnya tertulis 'Jangan lupa makan ya, Kopi.'",
            },
          ],
          dialog: [
            {
              pertanyaan: "Apa motivasimu jadi perawat?",
              jujur:
                "Ibu saya sakit lama. Saya tahu rasanya sendirian di rumah sakit.",
              bohong: "",
            },
            {
              pertanyaan: "Apakah kamu pernah menyakiti orang lain?",
              jujur:
                "Tidak sengaja pernah. Tapi saya selalu berusaha memperbaikinya.",
              bohong: "",
            },
          ],
        },
        {
          nama: "Agus Prabowo",
          alias: "Agus PHP King",
          umur: 38,
          sebab: "Stres Kerja",
          asal: "Bandung, Jawa Barat",
          pekerjaan: "Sales Asuransi",
          dosa: "Suka Berbohong",
          kebiasaan: "Menjual produk dengan klaim palsu",
          karma: ["Rajin Gym", "Sering Lembur", "Pelit Tips"],
          catatan: "Berhasil menipu 47 nasabah lansia.",
          warna: {
            body: "#c8d0d8",
            aksen: "#506070",
            mata: "#182030",
            pipi: "#d0b0a0",
          },
          barang: [
            {
              icon: "💼",
              nama: "Tas Kulit Murah Mirip Mahal",
              hint: "Jahitannya sudah copot. Logonya sedikit miring.",
            },
            {
              icon: "📋",
              nama: "Brosur Asuransi Dicoret",
              hint: "Klaim asli dicoret dan diganti angka lebih besar dengan spidol merah.",
            },
            {
              icon: "🏆",
              nama: "Piala 'Sales Terbaik' Plastik",
              hint: "Bulannya dikosongkan. Jelas diproduksi massal.",
            },
          ],
          dialog: [
            {
              pertanyaan:
                "Produk asuransimu benar-benar menguntungkan nasabah?",
              jujur: "Sejujurnya... tidak. Saya sudah tahu dari awal.",
              bohong:
                "Tentu saja! Produk saya terbaik! Nasabah saya pasti untung semua!",
            },
            {
              pertanyaan: "Kamu merasa bersalah?",
              jujur: "Iya. Terutama yang lansia. Mereka percaya saya.",
              bohong: "Tidak ada yang perlu disesali. Bisnis ya bisnis!",
            },
          ],
        },
        {
          nama: "Ibu Lastri",
          alias: "Bu Lastri Warung",
          umur: 71,
          sebab: "Diabetes",
          asal: "Surabaya, Jawa Timur",
          pekerjaan: "Pemilik Warung Makan",
          dosa: "Suka Berbagi",
          kebiasaan: "Sering kasih makan gratis ke tukang becak",
          karma: ["Cerewet Tapi Baik", "Kuat Bekerja", "Penyayang Cucu"],
          catatan: "Warungnya jadi tempat ngadem anak jalanan.",
          warna: {
            body: "#e8c8b0",
            aksen: "#b07840",
            mata: "#3a1808",
            pipi: "#f0b890",
          },
          barang: [
            {
              icon: "🍛",
              nama: "Centong Nasi Kayu Tua",
              hint: "Sudah hitam di ujungnya. Dipakai sejak 1978 kata tulisan di gagang.",
            },
            {
              icon: "📓",
              nama: "Buku Hutang Warung",
              hint: "Semua nama dicoret dengan tulisan 'lunas gratis'.",
            },
            {
              icon: "🧣",
              nama: "Kain Lap Usang",
              hint: "Sudah sangat tua. Tapi dilipat rapi. Orang yang menjaga barangnya.",
            },
          ],
          dialog: [
            {
              pertanyaan: "Warungmu terkenal karena apa?",
              jujur:
                "Porsinya besar dan kalau tidak ada uang ya boleh hutang dulu, atau gratis.",
              bohong: "",
            },
            {
              pertanyaan: "Kamu cerewet, apakah kamu orang baik?",
              jujur:
                "Haha, iya saya cerewet. Tapi cerewet karena sayang. Tanya tetangga saya.",
              bohong: "",
            },
          ],
        },
        {
          nama: "Tono bin Tono",
          alias: "Tono Duplikat",
          umur: 47,
          sebab: "Tersambar Petir",
          asal: "Pamekasan, Madura",
          pekerjaan: "Pembuat KTP Palsu",
          dosa: "Suka Berbohong",
          kebiasaan: "Memalsukan dokumen, surat, dan ijazah",
          karma: ["Cerdas Tapi Nakal", "Soksokan Dermawan", "Anti KPK"],
          catatan: "Tercatat 14 identitas berbeda di sistem negara.",
          warna: {
            body: "#c0c8b0",
            aksen: "#607050",
            mata: "#202810",
            pipi: "#c8b090",
          },
          barang: [
            {
              icon: "🪪",
              nama: "KTP (x3 berbeda nama)",
              hint: "Tiga KTP. Tiga nama berbeda. Tiga foto yang semuanya wajah yang sama.",
            },
            {
              icon: "🖨️",
              nama: "Cartridge Tinta Hampir Habis",
              hint: "Warnanya persis warna tinta dokumen resmi pemerintah.",
            },
            {
              icon: "📎",
              nama: "Klip Kertas Emas",
              hint: "Menjepit berkas yang tampaknya resmi — padahal kertas HVS biasa.",
            },
          ],
          dialog: [
            {
              pertanyaan: "Siapa nama aslimu?",
              jujur: "Tono. Cuma Tono. Yang lain itu... pekerjaan.",
              bohong: "Saya bisa jawab dengan 14 nama berbeda kalau Anda mau!",
            },
            {
              pertanyaan: "Apakah kamu pernah membantu orang?",
              jujur:
                "Pernah bantu orang yang butuh dokumen. Tapi caranya salah.",
              bohong:
                "Saya pahlawan rakyat kecil! Membantu yang tidak bisa urus administrasi!",
            },
          ],
        },
        {
          nama: "Ningsih Wulan",
          alias: "Ning Bulan Berbagi",
          umur: 55,
          sebab: "Kanker",
          asal: "Semarang, Jawa Tengah",
          pekerjaan: "Apoteker",
          dosa: "Suka Berbagi",
          kebiasaan: "Berikan obat gratis ke warga miskin",
          karma: ["Disiplin", "Penyayang", "Suka Tanaman"],
          catatan: "Mendanai beasiswa 20 anak kurang mampu.",
          warna: {
            body: "#d8e8d0",
            aksen: "#608858",
            mata: "#182810",
            pipi: "#e8c0a8",
          },
          barang: [
            {
              icon: "💉",
              nama: "Suntikan Kosong (Steril)",
              hint: "Bersih dan terbungkus rapi. Stok apotek yang belum sempat dipakai.",
            },
            {
              icon: "🌿",
              nama: "Tanaman Lidah Buaya Kecil",
              hint: "Label kecil: 'untuk luka bakar ringan, gratis, ambil saja'.",
            },
            {
              icon: "📜",
              nama: "Sertifikat Beasiswa",
              hint: "Sertifikat atas nama orang lain dengan tanda tangan Ningsih sebagai donatur.",
            },
          ],
          dialog: [
            {
              pertanyaan:
                "Kamu memberi obat gratis — bukankah itu merugikan bisnis?",
              jujur:
                "Iya rugi. Tapi kalau tidak ada yang bantu, siapa lagi? Saya punya ilmunya.",
              bohong: "",
            },
            {
              pertanyaan: "Apa yang kamu sesali?",
              jujur:
                "Tidak sempat menyelesaikan program beasiswa yang ke-21. Sakit keburu datang.",
              bohong: "",
            },
          ],
        },
        {
          nama: "Pak Harto Jr.",
          alias: "Junior Manipulasi",
          umur: 62,
          sebab: "Serangan Jantung",
          asal: "Jakarta Selatan",
          pekerjaan: "Kontraktor",
          dosa: "Suka Berbohong",
          kebiasaan: "Korupsi anggaran proyek jalan dan gedung",
          karma: ["Kaya Raya", "Punya Rumah 5", "Jarang ke Masjid"],
          catatan: "Proyek jembatannya ambruk seminggu setelah diresmikan.",
          warna: {
            body: "#c8c0b8",
            aksen: "#686058",
            mata: "#281808",
            pipi: "#d0a888",
          },
          barang: [
            {
              icon: "🏗️",
              nama: "Cetak Biru Proyek Jembatan",
              hint: "'12mm' diubah jadi '4mm'. Selisihnya masuk kantong siapa?",
            },
            {
              icon: "💳",
              nama: "Kartu Kredit Platinum (4 buah)",
              hint: "Empat kartu, empat bank berbeda. Semua atas nama PT berbeda.",
            },
            {
              icon: "⌚",
              nama: "Jam Tangan Mewah",
              hint: "Dibeli dari anggaran 'operasional proyek'.",
            },
          ],
          dialog: [
            {
              pertanyaan: "Proyek jembatanmu ambruk — apa komentarmu?",
              jujur:
                "Itu... salah saya. Saya potong anggaran material. Saya tahu risikonya.",
              bohong:
                "Itu force majeure! Bencana alam! Bukan salah konstruksi kami!",
            },
            {
              pertanyaan: "Kamu kaya — dari mana sumber kekayaanmu?",
              jujur:
                "Dari proyek pemerintah. Dan saya tidak selalu jujur soal anggarannya.",
              bohong:
                "Kerja keras selama 30 tahun! Murni hasil keringat sendiri!",
            },
          ],
        },
        {
          nama: "Sri Mulyati",
          alias: "Bu Sri Teladan",
          umur: 60,
          sebab: "Stroke",
          asal: "Purwokerto, Jawa Tengah",
          pekerjaan: "Bidan Desa",
          dosa: "Suka Berbagi",
          kebiasaan: "Bantu persalinan gratis selama 30 tahun",
          karma: ["Tangguh", "Rendah Hati", "Suka Memasak"],
          catatan: "Lahirkan lebih dari 2000 bayi tanpa kecelakaan.",
          warna: {
            body: "#e0d8c8",
            aksen: "#907850",
            mata: "#302010",
            pipi: "#f0c0a0",
          },
          barang: [
            {
              icon: "🩺",
              nama: "Stetoskop Tua",
              hint: "Sudah retak tapi masih berfungsi. Ditambal dengan lakban biru.",
            },
            {
              icon: "📔",
              nama: "Buku Catatan Kelahiran",
              hint: "2.847 nama bayi yang dilahirkan. Semua ditulis tangan Sri.",
            },
            {
              icon: "🧤",
              nama: "Sarung Tangan Lateks Bersih",
              hint: "Terlipat rapi di plastik. Sampai akhir hidupnya, masih siap membantu.",
            },
          ],
          dialog: [
            {
              pertanyaan: "2000 lebih bayi — tidak pernah ada yang bermasalah?",
              jujur:
                "Alhamdulillah tidak. Saya selalu berdoa sebelum setiap persalinan.",
              bohong: "",
            },
            {
              pertanyaan: "Apakah kamu pernah minta bayaran?",
              jujur:
                "Kalau mereka mampu, ya saya terima. Kalau tidak, ya tidak apa-apa.",
              bohong: "",
            },
          ],
        },
        {
          nama: "Gatot Mukidi",
          alias: "Gatot Sotoy",
          umur: 35,
          sebab: "Jatuh dari Pohon Kelapa",
          asal: "Magelang, Jawa Tengah",
          pekerjaan: "Influencer",
          dosa: "Suka Berbohong",
          kebiasaan: "Sebarkan hoaks medis ke 500rb followers",
          karma: ["Narsis", "Suka Selfie", "Takut Jarum Suntik"],
          catatan: "Viral soal 'obat corona dari bawang putih'.",
          warna: {
            body: "#c8d8e0",
            aksen: "#507888",
            mata: "#182838",
            pipi: "#c8a890",
          },
          barang: [
            {
              icon: "📸",
              nama: "Ring Light Portable",
              hint: "Ada bekas lipstik di cermin ring light. Dipakai untuk banyak orang.",
            },
            {
              icon: "🧄",
              nama: "Bawang Putih Diblender",
              hint: "Berlabel 'OBAT COVID-19 ALAMI — TERBUKTI SECARA SAINS'. Tidak ada referensinya.",
            },
            {
              icon: "💊",
              nama: "Suplemen Endorse Tak Bermerek",
              hint: "Tidak ada nomor BPOM. Ada logo 'Recommended by Gatot Sotoy'.",
            },
          ],
          dialog: [
            {
              pertanyaan: "Apakah bawang putih benar-benar obat COVID?",
              jujur:
                "Tidak. Saya tahu itu tidak benar. Tapi videonya viral, saya dapat endorse.",
              bohong: "100% terbukti! Ratusan orang sembuh karena video saya!",
            },
            {
              pertanyaan: "Kamu bertanggung jawab atas kontenmu?",
              jujur:
                "Seharusnya iya. Saya menyesal sudah menyebarkan informasi yang salah.",
              bohong:
                "Saya hanya berbagi informasi! Orang bebas percaya atau tidak!",
            },
          ],
        },
        {
          nama: "Endang Pertiwi",
          alias: "Mbak Endang Tulus",
          umur: 48,
          sebab: "Tenggelam (menyelamatkan anak)",
          asal: "Malang, Jawa Timur",
          pekerjaan: "Guru Ngaji",
          dosa: "Suka Berbagi",
          kebiasaan: "Ajar ngaji gratis, bantu anak yatim piatu",
          karma: ["Pemberani", "Tulus", "Tidak Pernah Mengeluh"],
          catatan: "Meninggal saat menyelamatkan muridnya yang tenggelam.",
          warna: {
            body: "#d8e0f0",
            aksen: "#507098",
            mata: "#182040",
            pipi: "#e8c0b8",
          },
          barang: [
            {
              icon: "📖",
              nama: "Al-Quran Lusuh Berpenanda",
              hint: "Hampir setiap halaman ada coretan pensil — catatan pelajaran untuk murid.",
            },
            {
              icon: "🪢",
              nama: "Tali Pelampung Putus",
              hint: "Putus di tengah. Tanda tarikan keras. Dipakai untuk menyelamatkan seseorang.",
            },
            {
              icon: "👟",
              nama: "Sepatu Basah",
              hint: "Masih basah. Belum sempat kering.",
            },
          ],
          dialog: [
            {
              pertanyaan:
                "Kamu meninggal saat menyelamatkan anak — apa yang kamu rasakan?",
              jujur:
                "Saya tidak sempat berpikir apa-apa. Refleks saja. Itu murid saya.",
              bohong: "",
            },
            {
              pertanyaan: "Apakah kamu menyesal?",
              jujur: "Tidak. Kalau diulangi, saya akan lakukan hal yang sama.",
              bohong: "",
            },
          ],
        },
        {
          nama: "Wiyono Kopral",
          alias: "Pak Wiyono Tegas",
          umur: 58,
          sebab: "Luka Lama Perang",
          asal: "Lampung",
          pekerjaan: "Mantan Tentara / Debt Collector",
          dosa: "Suka Berbohong",
          kebiasaan: "Mengintimidasi warga dengan jabatan palsu",
          karma: ["Pemberani (untuk hal salah)", "Perokok", "Suka Tinju"],
          catatan: "Pensiun lalu jadi preman berseragam tidak resmi.",
          warna: {
            body: "#b8b0a8",
            aksen: "#504840",
            mata: "#201808",
            pipi: "#c0a080",
          },
          barang: [
            {
              icon: "🎖️",
              nama: "Medali Militer (Palsu)",
              hint: "Logamnya terlalu ringan. Cat emasnya mengelupas. Bukan dari dinas resmi.",
            },
            {
              icon: "📣",
              nama: "Megafon Kecil",
              hint: "Dipakai untuk teriak di depan rumah orang yang dianggap berutang.",
            },
            {
              icon: "👊",
              nama: "Sarung Tinju Usang",
              hint: "Ada noda cokelat tua yang bukan dari latihan tinju biasa.",
            },
          ],
          dialog: [
            {
              pertanyaan: "Kamu masih pakai seragam militer setelah pensiun?",
              jujur:
                "Iya. Itu cara saya supaya orang takut. Lebih mudah kerja kalau orang takut.",
              bohong: "Saya menggunakannya dengan bangga sebagai veteran!",
            },
            {
              pertanyaan: "Debt collector — kamu pernah menyakiti orang?",
              jujur: "Pernah. Terlalu sering. Saya tidak bangga dengan itu.",
              bohong: "Saya hanya menjalankan tugas! Tidak ada yang tersakiti!",
            },
          ],
        },
        {
          nama: "Mbok Jamu",
          alias: "Simbah Jamu Ajaib",
          umur: 82,
          sebab: "Usia Tua (Damai)",
          asal: "Salatiga, Jawa Tengah",
          pekerjaan: "Penjual Jamu Gendong",
          dosa: "Suka Berbagi",
          kebiasaan: "Bagi jamu gratis ke yang sakit tidak mampu",
          karma: ["Bijak", "Kuat Fisik", "Hafal Ratusan Ramuan"],
          catatan: "Tidak pernah absen berjualan 50 tahun, hujan maupun terik.",
          warna: {
            body: "#e0c8a0",
            aksen: "#907830",
            mata: "#302010",
            pipi: "#f0b888",
          },
          barang: [
            {
              icon: "🫙",
              nama: "Botol Jamu Kunyit Asam",
              hint: "Masih ada sisa jamu. Harum. Label kecil: 'gratis kalau sakit'.",
            },
            {
              icon: "🎒",
              nama: "Bakul Gendong Bambu",
              hint: "Retak di beberapa sudut tapi diperkuat tali rafia. Menemani 50 tahun.",
            },
            {
              icon: "🌺",
              nama: "Bunga Kamboja Kering",
              hint: "Diselipkan di sela bakul. Kata Mbok Jamu sebagai pengingat akan kematian.",
            },
          ],
          dialog: [
            {
              pertanyaan: "50 tahun jualan jamu — tidak pernah absen?",
              jujur:
                "Tidak pernah. Hujan ya tetap berangkat. Panas ya tetap berangkat.",
              bohong: "",
            },
            {
              pertanyaan: "Apa rahasiamu panjang umur?",
              jujur:
                "Jamu saya sendiri. Dan tidak pernah menyimpan dendam. Itu yang paling manjur.",
              bohong: "",
            },
          ],
        },
        {
          nama: "Dalang Surya",
          alias: "Ki Surya Bohong",
          umur: 66,
          sebab: "Keracunan Makanan",
          asal: "Cirebon, Jawa Barat",
          pekerjaan: "Dalang / Seniman",
          dosa: "Suka Berbohong",
          kebiasaan: "Mengklaim karya orang lain, manipulasi dana seni",
          karma: ["Berbakat", "Licik", "Pandai Bicara"],
          catatan: "Menggugat seniman junior yang mengungguli karya aslinya.",
          warna: {
            body: "#c0b8d0",
            aksen: "#605878",
            mata: "#201828",
            pipi: "#c8a898",
          },
          barang: [
            {
              icon: "🪆",
              nama: "Wayang Kulit (Milik Orang Lain)",
              hint: "Di bawah wayang ada inisial 'RS' — bukan 'DS'. Punya Rudi Santoso.",
            },
            {
              icon: "📰",
              nama: "Kliping Artikel 'Maestro Wayang'",
              hint: "Semua karya yang disebut bukan miliknya.",
            },
            {
              icon: "🍢",
              nama: "Tusuk Sate Sisa Makan",
              hint: "Penyebab kematiannya. Keracunan sate di acara pesta.",
            },
          ],
          dialog: [
            {
              pertanyaan: "Apakah semua karya wayangmu benar-benar milikmu?",
              jujur: "Tidak. Banyak yang saya klaim dari murid-murid saya.",
              bohong:
                "Semua karya saya original! Saya maestro! Yang lain hanya meniru saya!",
            },
            {
              pertanyaan: "Kamu menggugat seniman junior — mengapa?",
              jujur:
                "Karena dia lebih baik dari saya. Dan saya takut tersaingi.",
              bohong: "Karena dia mencuri teknik saya! Saya yang mengajarinya!",
            },
          ],
        },
        // ── GHOST TAMBAHAN ──
        // ── WESTERN NAMES ──
        {
          nama: "Victor Hargrove",
          alias: "The Smiling Shark",
          umur: 58,
          sebab: "Keracunan Whiskey Oplosan",
          asal: "Texas, USA",
          pekerjaan: "Pengacara Korporat",
          dosa: "Suka Berbohong",
          kebiasaan:
            "Membela perusahaan minyak yang menghancurkan lingkungan demi bayaran",
          karma: ["Berjas Mahal", "Senyum Palsu", "Tidak Punya Nurani"],
          catatan:
            "Berhasil membebaskan 14 perusahaan dari tuntutan lingkungan. Total kerusakan: 3 sungai, 2 hutan, 1 kota kecil.",
          warna: {
            body: "#c0c8d8",
            aksen: "#5870a8",
            mata: "#182040",
            pipi: "#d0b0a0",
          },
          barang: [
            {
              icon: "💼",
              nama: "Koper Penuh Kontrak",
              hint: "Setiap kontrak di sini punya klausul tersembunyi yang merugikan pihak yang lebih lemah. Ditulis dengan font size 6.",
            },
            {
              icon: "🥃",
              nama: "Gelas Whiskey Terakhir",
              hint: "Whiskey ini dikirim oleh klien yang tidak puas. Victor tidak curiga karena terlalu yakin tidak punya musuh.",
            },
            {
              icon: "🤝",
              nama: "Foto Bersama Politisi",
              hint: "17 foto dengan 17 politisi berbeda. Semua tersenyum. Semua punya kepentingan yang sama.",
            },
          ],
          dialog: [
            {
              pertanyaan: "Apakah kamu tahu klienmu merusak lingkungan?",
              jujur:
                "Tahu. Tapi itu bukan urusan saya. Urusan saya adalah memenangkan kasus.",
              bohong:
                "Klien saya semua perusahaan yang taat hukum! Saya membela kebenaran!",
            },
            {
              pertanyaan: "Apakah kamu bangga dengan karirmu?",
              jujur:
                "Dulu iya. Sekarang... saya tidak bisa tidur memikirkan sungai-sungai itu.",
              bohong:
                "Sangat! Saya salah satu pengacara terbaik yang pernah ada!",
            },
          ],
        },
        {
          nama: "Eleanor Whitfield",
          alias: "Lady Nell",
          umur: 82,
          sebab: "Usia Tua — Meninggal Sambil Membaca",
          asal: "Yorkshire, England",
          pekerjaan: "Pustakawan / Guru Baca Gratis",
          dosa: "Suka Berbagi",
          kebiasaan:
            "Mengajari orang dewasa buta huruf membaca selama 50 tahun tanpa bayaran",
          karma: ["Sabar Tak Terbatas", "Pencinta Buku", "Tidak Pernah Marah"],
          catatan:
            "Lebih dari 2.000 orang dewasa belajar membaca melalui programnya. Banyak yang kemudian menulis buku sendiri.",
          warna: {
            body: "#e8ddd0",
            aksen: "#a89070",
            mata: "#302018",
            pipi: "#f0c8b0",
          },
          barang: [
            {
              icon: "📚",
              nama: "Buku Catatan Murid",
              hint: "Berisi nama dan progres setiap murid sejak 1974. Halaman terakhir diisi 3 hari sebelum meninggal.",
            },
            {
              icon: "🔖",
              nama: "Pembatas Buku Dari Murid",
              hint: "Ratusan pembatas buku buatan tangan dari murid-murid. Eleanor menyimpan semuanya.",
            },
            {
              icon: "👓",
              nama: "Kacamata Tua Berlensa Tebal",
              hint: "Kacamata ini sudah sangat tebal — matanya memburuk karena terlalu banyak membaca. Tidak pernah dia sesali.",
            },
          ],
          dialog: [
            {
              pertanyaan: "Apa yang paling membahagiakanmu?",
              jujur:
                "Momen ketika seseorang membaca kalimat pertama mereka sendiri. Itu seperti melihat lampu menyala.",
              bohong: "",
            },
            {
              pertanyaan:
                "Apakah kamu menyesal tidak pernah menikah atau punya keluarga?",
              jujur:
                "Tidak. Dua ribu murid adalah keluarga yang cukup besar untuk siapapun.",
              bohong: "",
            },
          ],
        },
        {
          nama: "Marcus DeLeon",
          alias: "The Fixer",
          umur: 47,
          sebab: "Ditembak Oleh Kliennya Sendiri",
          asal: "Miami, Florida",
          pekerjaan: "Fixer / Pemecah Masalah Ilegal",
          dosa: "Suka Berbohong",
          kebiasaan:
            "Menutupi kejahatan orang kaya — mulai dari kecelakaan hingga pembunuhan",
          karma: [
            "Tahu Banyak Rahasia",
            "Tidak Bisa Dipercaya",
            "Akhirnya Dikhianati",
          ],
          catatan:
            "Menutupi lebih dari 200 kasus ilegal selama 20 tahun. Ironinya, mati karena klien takut rahasianya bocor.",
          warna: {
            body: "#b8c0c8",
            aksen: "#586070",
            mata: "#182028",
            pipi: "#c0a888",
          },
          barang: [
            {
              icon: "📱",
              nama: "HP Terenkripsi",
              hint: "Berisi rekaman percakapan dengan 47 klien. Semua disimpan sebagai 'asuransi'. Klien tahu ini — itulah kenapa dia dibunuh.",
            },
            {
              icon: "🔑",
              nama: "Kunci Brankas Tersembunyi",
              hint: "Brankas ini berisi dokumen yang bisa memenjarakan 12 orang terkenal. Lokasinya tidak diketahui siapapun selain Marcus.",
            },
            {
              icon: "🧳",
              nama: "Koper Pindahan Yang Tidak Pernah Dibuka",
              hint: "Marcus selalu siap kabur. Koper ini sudah dikemas selama 3 tahun. Tidak sempat dipakai.",
            },
          ],
          dialog: [
            {
              pertanyaan: "Apakah kamu menyesal menutupi kejahatan orang lain?",
              jujur:
                "Setiap hari. Tapi saya sudah terlalu dalam. Tidak ada jalan keluar.",
              bohong:
                "Saya hanya memberikan layanan yang dibutuhkan. Tidak ada yang sempurna.",
            },
            {
              pertanyaan: "Siapa yang membunuhmu?",
              jujur:
                "Klien yang paling saya percaya. Yang saya bantu paling banyak.",
              bohong: "Saya tidak tahu. Mungkin musuh lama.",
            },
          ],
        },
        {
          nama: "Sister Agnes O'Brien",
          alias: "The Iron Nun",
          umur: 74,
          sebab: "Kanker — Menolak Kemoterapi Agar Bisa Terus Bekerja",
          asal: "Dublin, Ireland",
          pekerjaan: "Biarawati / Pendiri Rumah Singgah Tunawisma",
          dosa: "Suka Berbagi",
          kebiasaan:
            "Mengelola rumah singgah 24 jam selama 40 tahun tanpa pernah ambil hari libur",
          karma: [
            "Keras Tapi Adil",
            "Tidak Kenal Menyerah",
            "Ditakuti Sekaligus Dicintai",
          ],
          catatan:
            "Menolak tawaran pengobatan kanker karena 'masih ada 300 orang yang butuh tempat tidur malam ini'.",
          warna: {
            body: "#d8d0e0",
            aksen: "#888098",
            mata: "#281828",
            pipi: "#e0c0c8",
          },
          barang: [
            {
              icon: "✝️",
              nama: "Salib Kayu Sederhana",
              hint: "Kayu ini berasal dari bangku gereja yang rusak. Agnes membuatnya sendiri karena 'tidak perlu yang mahal'.",
            },
            {
              icon: "📋",
              nama: "Daftar Tunggu Tempat Tidur",
              hint: "Daftar ini selalu ada 50-100 nama lebih banyak dari kapasitas. Agnes tidak pernah menolak siapapun — selalu ada cara.",
            },
            {
              icon: "🔑",
              nama: "Kunci Master Rumah Singgah",
              hint: "Agnes tidak pernah melepaskan kunci ini. Bahkan saat dirawat di rumah sakit, kunci ini ada di sakunya.",
            },
          ],
          dialog: [
            {
              pertanyaan: "Mengapa kamu menolak pengobatan kanker?",
              jujur:
                "Karena pengobatan itu butuh waktu 6 bulan. 6 bulan tanpa saya, siapa yang jaga mereka?",
              bohong: "",
            },
            {
              pertanyaan: "Apakah kamu takut mati?",
              jujur:
                "Tidak. Yang saya takutkan adalah meninggalkan pekerjaan yang belum selesai. Dan pekerjaan itu tidak pernah selesai.",
              bohong: "",
            },
          ],
        },
        {
          nama: "James 'Jimmy' Caldwell",
          alias: "Jimmy Two-Faced",
          umur: 44,
          sebab: "Jatuh dari Atap Saat Mencuri",
          asal: "Chicago, Illinois",
          pekerjaan: "Pencuri Profesional / Penipu",
          dosa: "Suka Berbohong",
          kebiasaan:
            "Berpura-pura menjadi petugas amal untuk mengumpulkan donasi palsu",
          karma: ["Licik", "Karismatik", "Tidak Punya Rasa Malu"],
          catatan:
            "Mengumpulkan lebih dari $2 juta dari donasi palsu atas nama bencana yang tidak pernah ada.",
          warna: {
            body: "#c8c0b8",
            aksen: "#706858",
            mata: "#282010",
            pipi: "#d0a888",
          },
          barang: [
            {
              icon: "🎭",
              nama: "Seragam Palsu dari 12 Organisasi",
              hint: "Setiap seragam untuk 'operasi' berbeda. Jimmy bisa berubah identitas dalam 5 menit.",
            },
            {
              icon: "📊",
              nama: "Brosur Amal Fiktif",
              hint: "Brosur ini sangat profesional. Ada foto anak-anak sedih yang diambil dari internet. Ada nomor rekening yang bukan milik amal manapun.",
            },
            {
              icon: "💵",
              nama: "Dompet Tebal",
              hint: "Penuh uang tunai dari donasi terakhir. Masih berbau tinta baru dari mesin cetak struk donasi palsu.",
            },
          ],
          dialog: [
            {
              pertanyaan:
                "Apakah kamu pernah merasa bersalah mencuri dari orang yang ingin berbuat baik?",
              jujur:
                "Kadang. Terutama yang lansia yang menyumbang dari pensiunan mereka. Itu yang paling sulit dilupakan.",
              bohong:
                "Tidak ada yang dirugikan. Mereka ikhlas memberikan uang itu!",
            },
            {
              pertanyaan: "Apakah ada hal baik yang pernah kamu lakukan?",
              jujur:
                "Satu kali. Saya kembalikan dompet yang saya temukan ke pemiliknya. Tapi itu karena tidak ada uang di dalamnya.",
              bohong:
                "Saya selalu menyisihkan 10% untuk amal yang benar-benar nyata!",
            },
          ],
        },
        {
          nama: "Dr. Evelyn Cross",
          alias: "Dr. Eve",
          umur: 51,
          sebab: "Overdosis — Kecelakaan Saat Bekerja di Lab",
          asal: "Boston, Massachusetts",
          pekerjaan: "Peneliti Obat / Dokter",
          dosa: "Suka Berbagi",
          kebiasaan:
            "Mengembangkan obat murah untuk penyakit langka yang diabaikan industri farmasi",
          karma: [
            "Brilian",
            "Tidak Kenal Kompromi",
            "Digugat 3 Kali oleh Perusahaan Farmasi",
          ],
          catatan:
            "Berhasil mengembangkan 2 obat yang menyelamatkan ribuan orang, namun dipatenkan secara paksa oleh investor. Meninggal saat mengerjakan obat ketiga.",
          warna: {
            body: "#d0dce8",
            aksen: "#5880a8",
            mata: "#182840",
            pipi: "#c8b8a8",
          },
          barang: [
            {
              icon: "🧪",
              nama: "Tabung Reaksi Dengan Senyawa Belum Selesai",
              hint: "Ini adalah formula obat ketiga yang tidak sempat diselesaikan. Para peneliti lain meneruskannya setelah kematiannya.",
            },
            {
              icon: "📄",
              nama: "Surat Gugatan dari Perusahaan Farmasi",
              hint: "3 gugatan, semua kalah. Evelyn menang di pengadilan setiap kali karena datanya terlalu kuat untuk dibantah.",
            },
            {
              icon: "📓",
              nama: "Jurnal Penelitian Pribadi",
              hint: "Berisi catatan 15 tahun penelitian. Halaman terakhir berbunyi: 'Sedikit lagi. Besok kita coba lagi.'",
            },
          ],
          dialog: [
            {
              pertanyaan:
                "Apakah kamu marah karena penelitianmu dicuri oleh investor?",
              jujur:
                "Marah? Dulu iya. Tapi obatnya tetap sampai ke pasien. Itu yang penting.",
              bohong: "",
            },
            {
              pertanyaan: "Apa yang akan kamu lakukan jika bisa hidup lagi?",
              jujur:
                "Menyelesaikan formula ketiga. Dan kali ini tidak menandatangani kontrak apapun dengan investor.",
              bohong: "",
            },
          ],
        },
        {
          nama: "Robert 'Bobby' Finch",
          alias: "Sweet Bobby",
          umur: 39,
          sebab: "Kecelakaan Konstruksi",
          asal: "New Orleans, Louisiana",
          pekerjaan: "Musisi Jalanan / Pengamen",
          dosa: "Suka Berbagi",
          kebiasaan:
            "Memainkan musik gratis di rumah sakit dan panti jompo setiap akhir pekan",
          karma: ["Berbakat", "Murah Hati", "Tidak Pernah Minta Imbalan"],
          catatan:
            "Tidak pernah rekaman atau tampil di panggung besar meski punya bakat luar biasa. Berkata: 'Musik paling berharga adalah yang membuat seseorang tersenyum hari ini, bukan yang membuatku terkenal.'",
          warna: {
            body: "#c8d8c0",
            aksen: "#688858",
            mata: "#182810",
            pipi: "#d8c0a8",
          },
          barang: [
            {
              icon: "🎸",
              nama: "Gitar Akustik Usang",
              hint: "Senar nomor 3 sudah diganti 47 kali. Badan gitar penuh tanda tangan dari pasien-pasien rumah sakit.",
            },
            {
              icon: "📔",
              nama: "Buku Lagu",
              hint: "Berisi 200 lagu yang ditulis sendiri. Tidak satu pun pernah direkam secara profesional.",
            },
            {
              icon: "🏥",
              nama: "Kartu Pengunjung Tetap 12 Rumah Sakit",
              hint: "Bobby adalah satu-satunya pengamen yang punya kartu akses resmi ke 12 rumah sakit berbeda.",
            },
          ],
          dialog: [
            {
              pertanyaan: "Mengapa kamu tidak pernah mencoba menjadi terkenal?",
              jujur:
                "Pernah kepikiran. Tapi setiap kali saya main di rumah sakit dan lihat wajah mereka... terkenal tiba-tiba tidak terasa penting.",
              bohong: "",
            },
            {
              pertanyaan: "Apakah kamu menyesal tidak merekam musikmu?",
              jujur:
                "Sedikit. Tapi musik itu sudah hidup di ingatan orang-orang yang mendengarnya. Itu lebih baik dari rekaman.",
              bohong: "",
            },
          ],
        },
        {
          nama: "Harold Sinclair III",
          alias: "Old Money Harry",
          umur: 77,
          sebab: "Serangan Jantung di Klub Golf",
          asal: "Connecticut, USA",
          pekerjaan: "Pewaris Kekayaan / Hedge Fund Manager",
          dosa: "Suka Berbohong",
          kebiasaan:
            "Manipulasi pasar saham dan menghancurkan perusahaan kecil untuk keuntungan pribadinya",
          karma: [
            "Lahir Kaya",
            "Mati Lebih Kaya",
            "Tidak Pernah Bekerja Keras",
          ],
          catatan:
            "Menghancurkan 34 perusahaan kecil melalui short selling predatif. Ribuan karyawan kehilangan pekerjaan. Harold naik pesawat pribadi ke Bahamas keesokan harinya.",
          warna: {
            body: "#c8c0b0",
            aksen: "#706848",
            mata: "#282010",
            pipi: "#d8b890",
          },
          barang: [
            {
              icon: "⛳",
              nama: "Stik Golf Bermerk",
              hint: "Stik ini harganya lebih dari gaji tahunan salah satu karyawan yang dipecat Harold. Harold tidak tahu nama karyawan itu.",
            },
            {
              icon: "📈",
              nama: "Laporan Short Position",
              hint: "Dokumen ini menunjukkan Harold sudah memposisikan diri untuk untung SEBELUM menyebarkan rumor negatif tentang perusahaan target.",
            },
            {
              icon: "🥂",
              nama: "Gelas Champagne Setengah Isi",
              hint: "Champagne ini dari koleksi tahun 1987. Harold membukanya untuk merayakan salah satu perusahaan yang berhasil dihancurkan.",
            },
          ],
          dialog: [
            {
              pertanyaan:
                "Apakah kamu tahu karyawan-karyawan yang kehilangan pekerjaan karena kamu?",
              jujur:
                "Tidak secara personal. Dan itu cara saya bertahan — tidak mengenal mereka.",
              bohong:
                "Itu bukan salah saya. Itu dinamika pasar. Mereka seharusnya bekerja di perusahaan yang lebih kuat.",
            },
            {
              pertanyaan: "Apakah ada yang kamu sesali?",
              jujur:
                "...Saya tidak pernah mengizinkan diri saya untuk menyesali apapun. Saya tidak tahu cara melakukannya.",
              bohong: "Tidak ada. Saya menjalankan bisnis secara legal.",
            },
          ],
        },
        {
          nama: "Nurse Patricia Walsh",
          alias: "Pat the Brave",
          umur: 36,
          sebab: "Tertular Penyakit Pasien Saat Pandemi",
          asal: "Dublin, Ireland",
          pekerjaan: "Perawat ICU",
          dosa: "Suka Berbagi",
          kebiasaan:
            "Tetap bekerja saat APD tidak cukup karena 'pasien tidak bisa menunggu'",
          karma: [
            "Pemberani",
            "Tidak Pernah Mengeluh",
            "Meninggal di Usia Terlalu Muda",
          ],
          catatan:
            "Merawat 400+ pasien kritis selama pandemi. Menulis surat untuk keluarga pasien yang tidak bisa dikunjungi. Meninggal 3 minggu setelah pandemi mereda.",
          warna: {
            body: "#e0d8ec",
            aksen: "#9088b8",
            mata: "#302048",
            pipi: "#e8c0c8",
          },
          barang: [
            {
              icon: "😷",
              nama: "APD Usang Yang Sudah Diperbaiki",
              hint: "APD ini sudah diperbaiki dengan lakban 3 kali. Patricia tidak mau ambil APD baru karena 'stoknya terbatas dan yang lain lebih butuh'.",
            },
            {
              icon: "✉️",
              nama: "500 Surat Untuk Keluarga Pasien",
              hint: "Patricia menulis surat tangan untuk keluarga setiap pasien kritis yang tidak bisa dikunjungi. Semua masih tersimpan di laci mejanya.",
            },
            {
              icon: "📵",
              nama: "HP Penuh Pesan Tak Terbalas",
              hint: "800+ pesan dari keluarga mengucapkan terima kasih. Patricia tidak sempat membalas karena terlalu sibuk.",
            },
          ],
          dialog: [
            {
              pertanyaan: "Apakah kamu takut tertular saat bekerja?",
              jujur:
                "Takut. Sangat takut. Tapi pasien-pasien itu lebih takut lagi, dan sendirian pula.",
              bohong: "",
            },
            {
              pertanyaan: "Apakah kamu marah karena APD tidak cukup?",
              jujur:
                "Marah? Iya. Tapi saya tidak punya waktu untuk marah. Ada pasien yang butuh bantuan sekarang.",
              bohong: "",
            },
          ],
        },
        {
          nama: "Thomas 'Tommy' Greco",
          alias: "Tommy the Rat",
          umur: 52,
          sebab: "Jatuh dari Jembatan Saat Dikejar",
          asal: "New York City, USA",
          pekerjaan: "Informan Polisi / Pengkhianat",
          dosa: "Suka Berbohong",
          kebiasaan:
            "Menjual informasi tentang rekan-rekan kriminalnya demi perlindungan dan uang",
          karma: [
            "Bertahan Hidup Dengan Cara Apapun",
            "Tidak Ada Yang Percaya",
            "Kesepian",
          ],
          catatan:
            "Mengkhianati 23 orang ke polisi. Beberapa tidak bersalah. Tommy tahu tapi tetap memberikan nama mereka karena butuh angka.",
          warna: {
            body: "#c0c8b8",
            aksen: "#607050",
            mata: "#202810",
            pipi: "#c8b090",
          },
          barang: [
            {
              icon: "📞",
              nama: "Telepon Umum Yang Sering Dipakai",
              hint: "Tommy selalu pakai telepon umum untuk melapor ke polisi. Tidak ada bukti digital. Bukan karena profesional — karena paranoid.",
            },
            {
              icon: "🗂️",
              nama: "File Berisi Nama-Nama",
              hint: "Berisi nama 23 orang yang dia jual ke polisi. Di sebelah 6 nama ada tanda bintang — mereka yang Tommy tahu tidak bersalah.",
            },
            {
              icon: "🍺",
              nama: "Botol Bir Kosong",
              hint: "Tommy minum sendiri setiap malam. Tidak ada teman — semua teman lama sudah tahu siapa dia sebenarnya.",
            },
          ],
          dialog: [
            {
              pertanyaan:
                "Apakah ada yang tidak bersalah di antara yang kamu jual ke polisi?",
              jujur:
                "Enam orang. Saya tahu mereka tidak bersalah tapi saya butuh angka untuk memenuhi kuota.",
              bohong:
                "Tidak ada! Semua yang saya laporkan adalah kriminal yang berbahaya.",
            },
            {
              pertanyaan: "Apakah kamu punya teman?",
              jujur:
                "Dulu punya. Sebelum mereka tahu siapa saya. Sekarang... tidak ada.",
              bohong: "Saya punya banyak teman di kepolisian!",
            },
          ],
        },
        {
          nama: "Reza Kurniawan",
          alias: "Bang Reza Peminjam",
          umur: 41,
          sebab: "Jantung Mendadak",
          asal: "Depok, Jawa Barat",
          pekerjaan: "Makelar Properti",
          dosa: "Suka Berbohong",
          kebiasaan: "Meminjam uang dengan janji palsu lalu menghilang",
          karma: ["Suka Pesta", "Berlidah Manis", "HP Selalu Mati"],
          catatan:
            "Tercatat meminjam uang dari 31 orang berbeda tanpa berniat mengembalikan.",
          warna: {
            body: "#c8d0c0",
            aksen: "#687858",
            mata: "#283018",
            pipi: "#d0b8a0",
          },
          barang: [
            {
              icon: "📵",
              nama: "HP Mati Kehabisan Baterai",
              hint: "Ini sengaja. Log panggilan terakhir: 47 missed call dari orang yang sama dalam seminggu.",
            },
            {
              icon: "🤝",
              nama: "Kontrak Pinjaman Bermaterai",
              hint: "Kontrak ini valid secara hukum. Tapi tanggal jatuh tempo sudah lewat 3 tahun yang lalu. Tidak pernah dibayar.",
            },
            {
              icon: "🎭",
              nama: "Foto Pesta Mewah",
              hint: "Foto ini diambil seminggu sebelum meninggal. Lokasi: resort bintang 5. Dibayar dari uang pinjaman terakhir.",
            },
          ],
          dialog: [
            {
              pertanyaan:
                "Berapa orang yang masih menunggu uang mereka kembali?",
              jujur: "...Banyak. Saya tidak berani hitung.",
              bohong: "Semua sudah saya kembalikan! Mereka yang salah ingat!",
            },
            {
              pertanyaan: "Mengapa HP-mu selalu mati?",
              jujur: "Supaya tidak perlu angkat telepon dari yang nagih.",
              bohong: "Baterai saya memang cepat habis. Mau bagaimana lagi?",
            },
          ],
        },
        {
          nama: "Suster Margaretha",
          alias: "Suster Baik Hati",
          umur: 63,
          sebab: "Usia Tua",
          asal: "Flores, NTT",
          pekerjaan: "Biarawati / Perawat Rumah Sakit Swasta",
          dosa: "Suka Berbagi",
          kebiasaan: "Merawat pasien tidak mampu secara gratis selama 35 tahun",
          karma: ["Sabar Luar Biasa", "Pantang Menyerah", "Tidak Pernah Cuti"],
          catatan:
            "Tidak pernah mengambil gaji penuh — sisanya selalu disumbangkan ke pasien miskin.",
          warna: {
            body: "#e8e0d8",
            aksen: "#a89888",
            mata: "#302820",
            pipi: "#f0c8b0",
          },
          barang: [
            {
              icon: "📿",
              nama: "Rosario Tua",
              hint: "Dipakai setiap hari selama 40 tahun. Sudah aus di beberapa bagian. Masih dipakai sampai hari terakhir.",
            },
            {
              icon: "💊",
              nama: "Obat-Obatan Pribadi Yang Tak Pernah Diambil",
              hint: "Dokter meresepkan obat untuk dirinya sendiri. Tapi uangnya dipakai untuk pasien lain. Dia memilih tidak minum obat.",
            },
            {
              icon: "📋",
              nama: "Daftar Nama Pasien Sembuh",
              hint: "Lebih dari 800 nama. Semua ditulis tangan. Di bawah setiap nama ada catatan kecil tentang keluarganya.",
            },
          ],
          dialog: [
            {
              pertanyaan: "Kamu tidak pernah mengambil gaji penuh — mengapa?",
              jujur: "Saya tidak butuh banyak. Yang butuh adalah mereka.",
              bohong: "",
            },
            {
              pertanyaan:
                "Apakah kamu menyesal tidak menjaga kesehatanmu sendiri?",
              jujur:
                "Sedikit. Tapi kalau diulang, saya akan lakukan hal yang sama.",
              bohong: "",
            },
          ],
        },
        {
          nama: "Pak Ujang",
          alias: "Ujang Si Tukang Fitnah",
          umur: 55,
          sebab: "Tersengat Lebah Satu Sarang",
          asal: "Ciamis, Jawa Barat",
          pekerjaan: "Pengangguran / Tukang Gosip RT",
          dosa: "Suka Berbohong",
          kebiasaan:
            "Menyebarkan fitnah ke seluruh RT sampai beberapa keluarga hancur",
          karma: ["Rajin ke Warung", "Malas Kerja", "Mulut Ember"],
          catatan:
            "Bertanggung jawab atas perceraian 3 pasangan dan perkelahian antar tetangga yang belum selesai sampai sekarang.",
          warna: {
            body: "#c0c8b8",
            aksen: "#607050",
            mata: "#202810",
            pipi: "#c8b090",
          },
          barang: [
            {
              icon: "☕",
              nama: "Gelas Kopi Warung Langganan",
              hint: "Di gelas ini sudah tertinggal 'kesan' dari ribuan jam bergosip. Pengelola warung bersaksi dia duduk dari pagi sampai sore setiap hari.",
            },
            {
              icon: "📱",
              nama: "HP Penuh Screenshot",
              hint: "Semua screenshot percakapan orang lain yang dia dapatkan secara tidak sah. Digunakan sebagai 'bukti' fitnah.",
            },
            {
              icon: "🗞️",
              nama: "Koran Lama Dengan Coretan",
              hint: "Koran ini penuh coretan — bukan karena dibaca, tapi karena dia coret nama-nama tetangga yang sudah 'berhasil' dia adu domba.",
            },
          ],
          dialog: [
            {
              pertanyaan: "Berapa keluarga yang rusak karena mulutmu?",
              jujur:
                "...Saya tidak pernah hitung. Tapi saya tahu itu salah saya.",
              bohong: "Tidak ada! Saya hanya menyampaikan kebenaran!",
            },
            {
              pertanyaan: "Mengapa kamu suka bergosip?",
              jujur:
                "Karena hidup saya membosankan dan saya tidak punya keberanian untuk memperbaikinya.",
              bohong: "Saya ini informan RT! Menjaga ketertiban lingkungan!",
            },
          ],
        },
        {
          nama: "Ibu Ratnasari",
          alias: "Bu Ratna Guru Sejati",
          umur: 58,
          sebab: "Kecelakaan Saat Mengajar di Daerah Terpencil",
          asal: "Toraja, Sulawesi Selatan",
          pekerjaan: "Guru SD Terpencil",
          dosa: "Suka Berbagi",
          kebiasaan:
            "Mengajar di daerah tanpa listrik dan jalan aspal selama 28 tahun",
          karma: ["Tangguh", "Tidak Pernah Mengeluh", "Dicintai Murid"],
          catatan:
            "Meninggal saat perjalanan kembali dari sekolah — jalan longsor. Murid-muridnya yang menemukan.",
          warna: {
            body: "#d8c8b8",
            aksen: "#987850",
            mata: "#3a2818",
            pipi: "#e8c0a0",
          },
          barang: [
            {
              icon: "📚",
              nama: "Buku Pelajaran Usang",
              hint: "Buku ini sudah dipakai bergantian oleh 6 angkatan murid. Sampulnya sudah hilang. Masih dipakai karena tidak ada yang baru.",
            },
            {
              icon: "🕯️",
              nama: "Lilin Cadangan",
              hint: "Guru ini membawa lilin sendiri karena sekolahnya tidak punya listrik. Kadang mengajar sampai larut malam.",
            },
            {
              icon: "🖼️",
              nama: "Foto Kelas Bersama Murid",
              hint: "Foto ini diambil dari kamera disposable yang dikumpulkan murid-muridnya dari uang jajan selama sebulan sebagai hadiah ulang tahun.",
            },
          ],
          dialog: [
            {
              pertanyaan:
                "28 tahun di daerah terpencil — tidak pernah minta pindah?",
              jujur:
                "Pernah diajak pindah. Saya tolak. Kalau saya pergi, siapa yang mengajar mereka?",
              bohong: "",
            },
            {
              pertanyaan: "Apakah kamu bahagia dengan pilihanmu?",
              jujur:
                "Sangat. Melihat murid bisa membaca dan berhitung — itu tidak bisa dibeli dengan apapun.",
              bohong: "",
            },
          ],
        },
        {
          nama: "Febri Ananta",
          alias: "Febri Si Ghostwriter",
          umur: 33,
          sebab: "Overdosis Kopi dan Deadline",
          asal: "Yogyakarta",
          pekerjaan: "Penulis Hantu / Ghostwriter",
          dosa: "Suka Berbohong",
          kebiasaan:
            "Menulis buku orang lain lalu merahasiakan identitasnya seumur hidup",
          karma: [
            "Berbakat Tersembunyi",
            "Hidup dalam Bayang",
            "Tidak Pernah Diakui",
          ],
          catatan:
            "Menulis 47 buku bestseller atas nama orang lain. Tidak pernah satu pun atas namanya sendiri.",
          warna: {
            body: "#c8d8e8",
            aksen: "#5878a8",
            mata: "#182840",
            pipi: "#c0b0a8",
          },
          barang: [
            {
              icon: "✍️",
              nama: "Pena Favorit",
              hint: "Di pena ini terukir nama bukan 'Febri' — tapi nama kliennya. Hadiah dari klien pertama. Ironis.",
            },
            {
              icon: "📖",
              nama: "Buku Bestseller Tanpa Namanya",
              hint: "Buku ini terjual 200.000 eksemplar. Di halaman acknowledgement hanya tertulis: 'terima kasih kepada tim kreatif kami'.",
            },
            {
              icon: "📝",
              nama: "Naskah Yang Tidak Pernah Dikirim",
              hint: "Ini satu-satunya naskah yang Febri tulis untuk dirinya sendiri. Tidak pernah dikirim ke penerbit. Terlalu takut.",
            },
          ],
          dialog: [
            {
              pertanyaan:
                "Apakah kamu menyesal tidak pernah menulis atas namamu sendiri?",
              jujur: "Setiap hari. Tapi saya terlalu takut untuk mencoba.",
              bohong: "Tidak! Saya bangga bisa membantu orang lain berkarya!",
            },
            {
              pertanyaan: "Apakah pekerjaan ghostwriter adalah kebohongan?",
              jujur:
                "Iya. Saya membantu orang lain berbohong kepada pembaca mereka. Dan saya juga berbohong pada diri sendiri.",
              bohong:
                "Tidak! Ini profesi yang mulia! Saya tidak berbohong siapapun!",
            },
          ],
        },
        {
          nama: "Kakek Slamet",
          alias: "Mbah Slamet Pejuang",
          umur: 89,
          sebab: "Usia Tua — Tidur Tidak Bangun",
          asal: "Solo, Jawa Tengah",
          pekerjaan: "Pejuang Kemerdekaan (Purn.)",
          dosa: "Suka Berbagi",
          kebiasaan:
            "Mengajarkan sejarah kemerdekaan kepada anak cucu secara gratis",
          karma: ["Veteran Sejati", "Rendah Hati", "Penuh Luka Lama"],
          catatan:
            "Pernah menolak tunjangan veteran karena merasa rekan-rekannya yang gugur lebih berhak.",
          warna: {
            body: "#d0c8b8",
            aksen: "#888070",
            mata: "#302820",
            pipi: "#d8b898",
          },
          barang: [
            {
              icon: "🎖️",
              nama: "Medali Asli",
              hint: "Ini medali asli, bukan palsu. Diverifikasi dari arsip negara. Tapi Mbah Slamet menyimpannya di laci, bukan dipajang.",
            },
            {
              icon: "📸",
              nama: "Foto Hitam Putih Bersama Kawan",
              hint: "Foto ini diambil 1945. Dari 12 orang di foto, hanya Mbah Slamet yang masih hidup lebih dari 10 tahun setelah kemerdekaan.",
            },
            {
              icon: "🍃",
              nama: "Daun Pisang Kering",
              hint: "Ini bukan artefak bersejarah. Ini bekal nasi yang dia simpan dari hari terakhir sebelum pertempuran. Disimpan 70 tahun sebagai pengingat bahwa dulu mereka berjuang dengan perut lapar.",
            },
          ],
          dialog: [
            {
              pertanyaan: "Kenapa kamu menolak tunjangan veteran?",
              jujur:
                "Teman-teman saya mati di sana. Mereka tidak bisa menikmati kemerdekaan. Saya tidak pantas menerima lebih dari mereka.",
              bohong: "",
            },
            {
              pertanyaan: "Apa yang paling kamu sesali?",
              jujur:
                "Tidak bisa hadir di pemakaman semua rekan saya satu per satu. Ada yang pergi saat saya sakit. Ada yang pergi tanpa kabar.",
              bohong: "",
            },
          ],
        },
        {
          nama: "Drs. Bambang Koruptor",
          alias: "Pak Bambang Yang Terhormat",
          umur: 66,
          sebab: "Serangan Jantung Saat Sidang",
          asal: "Jakarta Pusat",
          pekerjaan: "Anggota Dewan / Koruptor",
          dosa: "Suka Berbohong",
          kebiasaan: "Korupsi dana infrastruktur dan bansos selama 20 tahun",
          karma: ["Berdasi Mahal", "Rajin Berpidato", "Jarang di Kantor"],
          catatan:
            "Dana bantuan sosial senilai 47 miliar diselewengkan. Sidang baru dimulai saat meninggal mendadak.",
          warna: {
            body: "#c8c0b0",
            aksen: "#706858",
            mata: "#282010",
            pipi: "#d0a880",
          },
          barang: [
            {
              icon: "💼",
              nama: "Tas Hermes Asli",
              hint: "Dibeli dari uang 'honorarium rapat' yang fiktif. Nota pembelian masih ada di dalam tasnya.",
            },
            {
              icon: "🏠",
              nama: "Sertifikat 9 Rumah",
              hint: "Semua atas nama anggota keluarga. Tapi sumbernya ada di laporan keuangan yang sudah dicairkan Pak Bambang.",
            },
            {
              icon: "🖊️",
              nama: "Pena Emas Bermeterai DPR",
              hint: "Pena resmi DPR. Dipakai untuk menandatangani persetujuan dana yang kemudian dikorupsi. Masih ada sidik jarinya.",
            },
          ],
          dialog: [
            {
              pertanyaan:
                "Dana bansos yang kamu korupsi — kamu tahu itu untuk siapa?",
              jujur: "...Untuk rakyat miskin. Saya tahu. Dan saya tetap ambil.",
              bohong:
                "Dana itu digunakan sesuai peruntukannya! Ada oknum lain yang memalsukan laporannya!",
            },
            {
              pertanyaan: "Apakah kamu menyesal?",
              jujur:
                "Sekarang iya. Tapi dulu tidak. Dan itu yang paling mengerikan.",
              bohong: "Saya tidak bersalah! Pengadilan belum memutuskan!",
            },
          ],
        },
        {
          nama: "Nyi Kasih",
          alias: "Emak Kasih Warung Nasi",
          umur: 74,
          sebab: "Kelelahan",
          asal: "Indramayu, Jawa Barat",
          pekerjaan: "Penjual Nasi Murah",
          dosa: "Suka Berbagi",
          kebiasaan:
            "Menjual nasi dengan harga seikhlasnya — yang tidak punya uang boleh makan gratis",
          karma: [
            "Tidak Pernah Menolak",
            "Tidur Selalu Terakhir",
            "Bangun Selalu Pertama",
          ],
          catatan:
            "Warungnya buka 50 tahun tanpa tutup satu hari pun kecuali saat banjir. Bangkrut berkali-kali tapi selalu buka lagi.",
          warna: {
            body: "#e0c8a8",
            aksen: "#a88050",
            mata: "#382810",
            pipi: "#f0b888",
          },
          barang: [
            {
              icon: "🍚",
              nama: "Centong Nasi Plastik Retak",
              hint: "Centong ini sudah retak di gagangnya tapi masih dipakai karena 'masih bisa dipakai'. Filosofi hidup Nyi Kasih dalam satu benda.",
            },
            {
              icon: "📓",
              nama: "Buku Catatan 'Seikhlasnya'",
              hint: "Bukan buku hutang. Ini catatan berapa banyak orang yang makan gratis setiap hari. Total: lebih dari 90.000 porsi dalam 50 tahun.",
            },
            {
              icon: "🔑",
              nama: "Kunci Warung Yang Tidak Pernah Dikunci",
              hint: "Kunci ini tidak pernah dipakai karena warungnya tidak pernah dikunci. 'Siapa tahu ada yang lapar malam-malam,' kata Nyi Kasih.",
            },
          ],
          dialog: [
            {
              pertanyaan: "Warungmu sering rugi — mengapa terus buka?",
              jujur:
                "Karena kalau saya tutup, ada yang tidak makan. Saya tidak bisa tidur kalau tahu ada yang lapar.",
              bohong: "",
            },
            {
              pertanyaan: "Kamu punya tabungan?",
              jujur: "Tidak. Tapi saya punya banyak teman. Itu lebih berharga.",
              bohong: "",
            },
          ],
        },
        {
          nama: "Hermawan Susilo",
          alias: "Pak Herwanto Makelar Ijazah",
          umur: 49,
          sebab: "Ditabrak Motor Saat Kabur dari KPK",
          asal: "Surabaya, Jawa Timur",
          pekerjaan: "Calo Ijazah Palsu",
          dosa: "Suka Berbohong",
          kebiasaan:
            "Menjual ijazah palsu dari SD sampai S3 kepada siapapun yang bayar",
          karma: ["Cerdas Dipakai Salah", "Jaringan Luas", "Harga Bisa Nego"],
          catatan:
            "Lebih dari 2.000 ijazah palsu beredar atas jasanya. Termasuk ijazah dokter dan insinyur.",
          warna: {
            body: "#c0c8d0",
            aksen: "#5870a0",
            mata: "#182038",
            pipi: "#c8a898",
          },
          barang: [
            {
              icon: "🖨️",
              nama: "Printer Khusus Dokumen",
              hint: "Printer ini menggunakan tinta yang persis sama dengan tinta dokumen resmi pemerintah. Seharga motor.",
            },
            {
              icon: "🎓",
              nama: "Sampel Ijazah Dari 47 Universitas",
              hint: "Semua palsu tapi sangat meyakinkan. Termasuk satu universitas yang tidak pernah ada.",
            },
            {
              icon: "💳",
              nama: "Rekening Atas 12 Nama Berbeda",
              hint: "Semua aktif. Semua atas namanya dengan KTP berbeda. Berisi total pendapatan dari 12 tahun bisnis ijazah palsu.",
            },
          ],
          dialog: [
            {
              pertanyaan: "Ijazah dokter palsu — kamu tahu risikonya?",
              jujur:
                "Tahu. Saya pernah dapat kabar salah satu 'dokter' saya membuat pasien salah diagnosis. Saya tidak tidur 3 hari.",
              bohong:
                "Itu tanggung jawab mereka sendiri! Saya hanya penjual dokumen!",
            },
            {
              pertanyaan:
                "Berapa orang yang merasa punya keahlian yang sebenarnya tidak mereka miliki karena jasamu?",
              jujur: "...Lebih dari yang saya mau ingat.",
              bohong: "Mereka semua kompeten! Ijazah hanya formalitas!",
            },
          ],
        },
      ];

      // ── BOSS POOL: dikelompokkan per stage, makin dalam makin mencekam ──
      // dosa = jawaban BENAR yang harus dicari lewat clue
      // formulir menampilkan kebalikannya untuk menipu
      const bossPool = {
        // ══ STAGE 1 — manusia licik, bisa diinterogasi ══ (4 boss, timer 35s)
        1: [
          {
            nama: "Datuk Licik Soeharto",
            alias: "Si Raja Dalih",
            umur: 77,
            sebab: "Lupa Meninggal",
            asal: "Tidak Diketahui",
            pekerjaan: "Pejabat Publik (Dirahasiakan)",
            dosa: "Suka Berbohong",
            kebiasaan: "Selalu punya alibi untuk setiap kejahatan",
            karma: ["Kebal Hukum", "Ahli Manipulasi", "Senyum Ramah Berbahaya"],
            catatan:
              "⚠ JIWA MERAGUKAN — Formulir mungkin telah dimodifikasi. Gunakan BARANG & TANYA!",
            timerLimit: 35,
            warna: {
              body: "#6a0a0a",
              aksen: "#cc2222",
              mata: "#ff0000",
              pipi: "#4a0000",
            },
            isBoss: true,
            bossLevel: 1,
            bossIntroDesc:
              "Pejabat paling licin yang pernah melewati meja ini. Formulirnya bisa memalsukan dirinya sendiri. Gunakan BARANG & TANYA sebelum sortir! Waktu: 35 detik.",
            barang: [
              {
                icon: "📁",
                nama: "Berkas Tebal Tersegel",
                hint: "Dibuka paksa: semua surat perintah mengorbankan orang lain. Tanda tangan dipalsu semua.",
              },
              {
                icon: "🖊️",
                nama: "Pena Tinta Merah",
                hint: "Hanya dipakai mencoret nama orang dari daftar. Ribuan nama.",
              },
              {
                icon: "😁",
                nama: "Foto Senyum Resmi",
                hint: "Di balik foto: 'Senyum adalah senjata terbaik seorang pembohong.'",
              },
            ],
            dialog: [
              {
                pertanyaan: "Apa dosamu yang sesungguhnya?",
                jujur:
                  "*terdiam lama* ...Saya menghancurkan terlalu banyak orang demi jabatan.",
                bohong:
                  "Saya tidak pernah berdosa! Semua yang saya lakukan demi rakyat!",
              },
              {
                pertanyaan: "Apakah kamu pernah berbagi?",
                jujur: "Tidak. Yang saya bagi hanya penderitaan.",
                bohong: "Saya SELALU berbagi! Saya dermawan sekali!",
              },
              {
                pertanyaan: "Mengapa data formulirmu tampak dimanipulasi?",
                jujur:
                  "...Karena saya yang mengubahnya sebelum sampai ke meja ini.",
                bohong:
                  "Data formulir tidak pernah salah. Itu sistem yang bermasalah.",
              },
            ],
          },
          {
            nama: "Nyonya Seraphine",
            alias: "Bidadari Palsu",
            umur: 55,
            sebab: "Kecelakaan Tak Terduga",
            asal: "Tidak Tercatat",
            pekerjaan: "Filantropis / Penipu Amal",
            dosa: "Suka Berbohong",
            kebiasaan: "Mengumpulkan donasi untuk yayasan fiktif",
            karma: ["Wajah Malaikat", "Hati Iblis", "Rekening Gendut"],
            catatan:
              "⚠ JIWA KELAS MERAGUKAN — Catatan amal sangat mencurigakan. Cek BARANG & TANYA sebelum memutuskan.",
            timerLimit: 35,
            warna: {
              body: "#3a2a4a",
              aksen: "#8844aa",
              mata: "#cc88ff",
              pipi: "#5a3a6a",
            },
            isBoss: true,
            bossLevel: 1,
            bossIntroDesc:
              "Tampak seperti santo. Tercatat ribuan donasi atas namanya. Tapi rekening bank bicara lain. 35 detik untuk memutuskan.",
            barang: [
              {
                icon: "💝",
                nama: "Buku Donatur Palsu",
                hint: "Semua nama donatur adalah nama orang yang sudah meninggal. Tidak ada yang bisa dikonfirmasi.",
              },
              {
                icon: "🏦",
                nama: "Bukti Transfer (ke rekening sendiri)",
                hint: "Dana yayasan 'dipindahkan untuk keamanan' ke 14 rekening atas nama keluarganya.",
              },
              {
                icon: "🌸",
                nama: "Rangkaian Bunga Dari Penggemar",
                hint: "Bunga asli dari orang yang percaya padanya. Mereka tidak tahu apa yang sebenarnya terjadi.",
              },
            ],
            dialog: [
              {
                pertanyaan: "Yayasanmu — benarkah ada?",
                jujur:
                  "*menghela napas* ...Alamatnya adalah gudang kosong. Saya tahu dari awal.",
                bohong: "Yayasan saya nyata dan sudah membantu ribuan jiwa!",
              },
              {
                pertanyaan: "Ke mana uang donasi pergi?",
                jujur:
                  "Ke tempat yang seharusnya tidak pergi. Saya tahu itu salah.",
                bohong:
                  "Semua masuk ke program pemberdayaan! Laporan keuangannya transparan!",
              },
              {
                pertanyaan: "Apakah kamu layak masuk Surga?",
                jujur: "...Tidak. Saya tahu jawabannya.",
                bohong: "Tentu saja! Saya salah satu orang paling dermawan!",
              },
            ],
          },
          {
            nama: "Prof. Hartanto Wibisono",
            alias: "Si Penemu Palsu",
            umur: 68,
            sebab: "Tersedak Penghargaan Emas",
            asal: "Bandung, Jawa Barat",
            pekerjaan: "Ilmuwan / Pencuri Riset",
            dosa: "Suka Berbohong",
            kebiasaan:
              "Mengklaim penemuan mahasiswa bimbingannya sebagai miliknya",
            karma: ["Gelar Berderet", "Tanpa Hati Nurani", "Kolega Membenci"],
            catatan:
              "⚠ 14 mahasiswa mengajukan gugatan plagiarisme. Semua gagal secara misterius. Periksa BARANG.",
            timerLimit: 35,
            warna: {
              body: "#c8c0b0",
              aksen: "#888070",
              mata: "#302820",
              pipi: "#c8a888",
            },
            isBoss: true,
            bossLevel: 1,
            bossIntroDesc:
              "Ratusan gelar, ribuan sitasi — semuanya hasil kerja orang lain. Mengaku sebagai ilmuwan terbaik negeri ini. Buktikan sebaliknya. 35 detik.",
            barang: [
              {
                icon: "🏆",
                nama: "Piala Nobel (Palsu?)",
                hint: "Bahan dasarnya plastik. Cat emasnya mengelupas. Dan nama di plakat sudah ditimpa stiker baru.",
              },
              {
                icon: "📄",
                nama: "Makalah Dengan Nama Yang Dihapus",
                hint: "Ada bekas tipe-ex di baris pertama. Nama yang dihapus adalah: Dewangga R., mahasiswa S3 angkatan 2018.",
              },
              {
                icon: "🔬",
                nama: "Mikroskop Branded",
                hint: "Di bagian bawah ada tulisan kecil: 'Milik Lab 304 - jangan dibawa pulang'. Tapi ada di sini.",
              },
            ],
            dialog: [
              {
                pertanyaan: "Siapa yang sebenarnya menemukan teori andalanmu?",
                jujur:
                  "...Dua mahasiswa S3. Saya hanya yang pertama submit ke jurnal.",
                bohong:
                  "Saya! Sepenuhnya saya! Mahasiswa hanya membantu administrasi.",
              },
              {
                pertanyaan:
                  "Apakah kamu pernah memberikan kredit pada orang yang seharusnya?",
                jujur:
                  "Tidak pernah. Dan saya selalu bisa menemukan alasan untuk tidak melakukannya.",
                bohong:
                  "Selalu! Nama mereka ada di acknowledgement halaman 47!",
              },
              {
                pertanyaan:
                  "Apakah ilmu pengetahuan yang kamu tinggalkan bermanfaat?",
                jujur: "Ilmunya iya. Tapi saya bukan yang menciptakannya.",
                bohong:
                  "Saya mengubah dunia sains! Tanpa saya, tidak ada yang bisa dicapai!",
              },
            ],
          },
          {
            nama: "Mak Wening",
            alias: "Emak Racun",
            umur: 72,
            sebab: "Termakan Masakan Sendiri",
            asal: "Banyumas, Jawa Tengah",
            pekerjaan: "Dukun / Peracun Berkedok Obat Herbal",
            dosa: "Suka Berbohong",
            kebiasaan:
              "Menjual ramuan 'penyembuh' yang sebenarnya membuat sakit lebih lama",
            karma: ["Dipercaya Warga", "Manipulatif", "Tahu Banyak Rahasia"],
            catatan:
              "⚠ 23 pasien dilaporkan memburuk setelah berobat. 'Itu berarti racunnya bekerja,' kata Mak Wening.",
            timerLimit: 35,
            warna: {
              body: "#3a3020",
              aksen: "#6a5a20",
              mata: "#2a2010",
              pipi: "#8a7040",
            },
            isBoss: true,
            bossLevel: 1,
            bossIntroDesc:
              "Emak yang senyumnya manis tapi ramuannya mencurigakan. Dipercaya satu kampung tapi catatan medis bilang hal lain. 35 detik.",
            barang: [
              {
                icon: "🍶",
                nama: "Botol Ramuan Tak Berlabel",
                hint: "Diuji: mengandung zat yang memperlambat pemulihan. Bukan mempercepat. Pasien butuh lebih banyak kunjungan.",
              },
              {
                icon: "📋",
                nama: "Buku Pasien Rahasia",
                hint: "Bukan buku kesembuhan. Ini buku catatan siapa yang punya hutang padanya — dan rahasia apa yang mereka bisikkan saat sakit.",
              },
              {
                icon: "🌿",
                nama: "Tanaman Beracun Yang Disebut 'Rempah'",
                hint: "Ini bukan rempah. Ini Atropa belladonna. Takaran kecil menyembuhkan, takaran besar menghancurkan. Mak Wening tahu perbedaannya.",
              },
            ],
            dialog: [
              {
                pertanyaan: "Apakah ramuanmu benar-benar menyembuhkan?",
                jujur:
                  "...Beberapa. Yang lain saya buat agar kembali lagi. Bisnis, nak.",
                bohong: "Semua! Ratusan orang sembuh berkat tangan saya!",
              },
              {
                pertanyaan: "Apakah kamu memanfaatkan kepercayaan pasienmu?",
                jujur:
                  "Ya. Orang sakit mudah percaya. Itu kelemahan yang berguna.",
                bohong:
                  "Tidak! Saya mencintai semua pasien saya seperti cucu sendiri!",
              },
              {
                pertanyaan: "Apa yang tersimpan di buku hitammu?",
                jujur:
                  "Dosa mereka. Saya yang pegang. Selama mereka butuh saya, mereka tidak akan bicara.",
                bohong:
                  "Resep obat tradisional turun-temurun. Warisan nenek moyang.",
              },
            ],
          },
        ],

        // ══ STAGE 2 — entitas bukan manusia, ambigu moral ══ (4 boss, timer 35s)
        2: [
          {
            nama: "Arwah Tanpa Nama #4471",
            alias: "Yang Tertinggal",
            umur: "?",
            sebab: "Tidak Diketahui",
            asal: "Di Antara",
            pekerjaan: "Tidak Ada Catatan",
            dosa: "Suka Berbagi",
            kebiasaan: "Muncul di sudut cermin orang yang sedang berduka",
            karma: ["Tidak Berbahaya", "Tidak Membantu", "Hanya Ada"],
            catatan:
              "⛔ TIDAK ADA DATA — Entitas ini tidak terdaftar di database manapun. Gunakan BARANG & TANYA.",
            timerLimit: 35,
            warna: {
              body: "#b8c8d8",
              aksen: "#6888a8",
              mata: "#304050",
              pipi: "#a8b8c8",
            },
            isBoss: true,
            bossLevel: 2,
            bossIntroDesc:
              "Tidak ada di database. Tidak ada di catatan kematian. Tapi dia ada di sini. Apa yang harus kamu lakukan dengan sesuatu yang tidak seharusnya ada? 35 detik.",
            barang: [
              {
                icon: "🪞",
                nama: "Pecahan Cermin",
                hint: "Dalam pecahan ini terlihat wajah orang-orang yang pernah berduka. Arwah ini selalu ada di sana — menemani, bukan mengganggu.",
              },
              {
                icon: "🕯️",
                nama: "Lilin Nyaris Habis",
                hint: "Lilin ini menyala di tempat gelap. Tidak untuk menakuti. Hanya agar orang tidak tersandung.",
              },
              {
                icon: "📭",
                nama: "Amplop Kosong",
                hint: "Seharusnya berisi pesan, tapi tidak pernah sempat ditulis. Ada sesuatu yang ingin disampaikan tapi tidak bisa.",
              },
            ],
            dialog: [
              {
                pertanyaan: "Kamu siapa sebenarnya?",
                jujur:
                  "Saya... tidak yakin. Saya hanya ada. Sudah sangat lama.",
                bohong: "",
              },
              {
                pertanyaan: "Apakah kamu pernah menyakiti seseorang?",
                jujur:
                  "Tidak pernah. Saya bahkan tidak bisa menyentuh apa-apa.",
                bohong: "",
              },
              {
                pertanyaan: "Mengapa kamu muncul di cermin orang berduka?",
                jujur:
                  "Supaya mereka tahu bahwa mereka tidak sendirian. Itu saja.",
                bohong: "",
              },
            ],
          },
          {
            nama: "Roh Penunggu Pohon Tua",
            alias: "Si Tua Beringin",
            umur: "Ratusan Tahun",
            sebab: "Pohonnya Ditebang",
            asal: "Hutan yang Sudah Tiada",
            pekerjaan: "Penjaga Tempat",
            dosa: "Suka Berbagi",
            kebiasaan: "Melindungi kampung dari bencana selama berabad-abad",
            karma: ["Bukan Manusia", "Bukan Iblis", "Hanya Penjaga"],
            catatan:
              "⚠ ENTITAS ALAM — Bukan arwah manusia. Tidak ada preseden penempatan. Gunakan TANYA.",
            timerLimit: 35,
            warna: {
              body: "#2a4a1a",
              aksen: "#6a9a3a",
              mata: "#1a3a0a",
              pipi: "#4a7a2a",
            },
            isBoss: true,
            bossLevel: 2,
            bossIntroDesc:
              "Bukan manusia. Bukan iblis. Penjaga tempat yang pohonnya ditebang untuk mall. Kamu petugas pertama yang harus memutuskan nasib entitas seperti ini. 35 detik.",
            barang: [
              {
                icon: "🌿",
                nama: "Akar Yang Tercerabut",
                hint: "Akar ini masih hidup. Dalam ratusan tahun, akar ini menahan longsor 3 kali dan menyelamatkan desa.",
              },
              {
                icon: "💧",
                nama: "Air Mata Pohon (Getah Beku)",
                hint: "Getah mengeras saat pohon ditebang. Di dalamnya terperangkap kunang-kunang yang masih menyala.",
              },
              {
                icon: "🪓",
                nama: "Serpihan Kapak Penebang",
                hint: "Si roh menyimpannya — bukan untuk dendam, tapi sebagai pengingat bahwa segalanya berakhir.",
              },
            ],
            dialog: [
              {
                pertanyaan: "Apakah kamu marah karena pohonmu ditebang?",
                jujur: "Marah? Tidak. Sedih, iya. Tapi itu sudah takdirnya.",
                bohong: "",
              },
              {
                pertanyaan: "Apa yang kamu lakukan selama ratusan tahun?",
                jujur:
                  "Menjaga. Hanya menjaga. Menahan angin, menangkap hujan, membiarkan burung bersarang.",
                bohong: "",
              },
              {
                pertanyaan: "Ke mana seharusnya kamu pergi?",
                jujur:
                  "Saya tidak tahu. Surga dan Neraka adalah konsep manusia. Saya bukan manusia.",
                bohong: "",
              },
            ],
          },
          {
            nama: "Kenangan Anak No. 77",
            alias: "Si Bocah Abadi",
            umur: "Berhenti di 9 Tahun",
            sebab: "Tidak Ingin Dilupakan",
            asal: "Dalam Ingatan Seseorang",
            pekerjaan: "Kenangan / Trauma Masa Kecil",
            dosa: "Suka Berbagi",
            kebiasaan: "Muncul dalam mimpi orang yang pernah menyakitinya",
            karma: ["Polos", "Tidak Bisa Memaafkan", "Tidak Bisa Membenci"],
            catatan:
              "⚠ ANOMALI MEMORI — Ini bukan jiwa anak yang meninggal. Ini adalah kenangan yang terlalu kuat untuk menghilang. Kategorisasi: tidak diketahui.",
            timerLimit: 35,
            warna: {
              body: "#e8e0f0",
              aksen: "#b8a8d0",
              mata: "#504868",
              pipi: "#f0c8d8",
            },
            isBoss: true,
            bossLevel: 2,
            bossIntroDesc:
              "Bukan anak yang meninggal. Ini kenangan seorang anak yang terlalu kuat untuk hilang bahkan setelah orangnya dewasa dan mati. Bagaimana kamu memperlakukan sebuah kenangan? 35 detik.",
            barang: [
              {
                icon: "🪆",
                nama: "Boneka Rusak",
                hint: "Boneka ini diberikan oleh seseorang yang menyayanginya. Orang itu kemudian pergi. Bonekanya tetap ada.",
              },
              {
                icon: "📝",
                nama: "Surat Yang Tidak Pernah Dikirim",
                hint: "'Aku tidak marah. Aku hanya tidak mengerti kenapa kamu pergi.' Ditulis dengan tulisan tangan anak kecil.",
              },
              {
                icon: "🌻",
                nama: "Bunga Matahari Plastik",
                hint: "Tidak layu karena plastik. Persis seperti kenangan ini — tidak bisa mati karena tidak pernah benar-benar hidup.",
              },
            ],
            dialog: [
              {
                pertanyaan: "Apakah kamu menyimpan dendam?",
                jujur:
                  "Tidak bisa. Saya hanya... ada. Menunggu seseorang mengingat bahwa saya pernah ada.",
                bohong: "",
              },
              {
                pertanyaan: "Apakah kamu bahagia?",
                jujur:
                  "Saya tidak tahu apa itu bahagia. Saya berhenti belajar sebelum sempat tahu.",
                bohong: "",
              },
              {
                pertanyaan: "Apa yang kamu inginkan dari tempat ini?",
                jujur:
                  "Saya hanya ingin pergi. Ke manapun yang lebih tenang dari kepala seseorang.",
                bohong: "",
              },
            ],
          },
          {
            nama: "Bayangan Perang ke-17",
            alias: "Sisa Yang Tertinggal",
            umur: "Seusia Konflik",
            sebab: "Perdamaian Ditandatangani",
            asal: "Medan Perang Yang Sudah Jadi Mal",
            pekerjaan: "Perwujudan Amarah Kolektif",
            dosa: "Suka Berbohong",
            kebiasaan:
              "Merasuki tempat-tempat bekas konflik dan membuat orang gelisah",
            karma: [
              "Lahir Dari Kebencian",
              "Bukan Pilihan Sendiri",
              "Terlanjur Ada",
            ],
            catatan:
              "⚠ ENTITAS RESIDUAL — Sisa amarah dari peristiwa berdarah. Bukan pelaku, bukan korban. Gunakan TANYA dengan hati-hati.",
            timerLimit: 35,
            warna: {
              body: "#3a2a18",
              aksen: "#7a5a28",
              mata: "#4a3818",
              pipi: "#6a4828",
            },
            isBoss: true,
            bossLevel: 2,
            bossIntroDesc:
              "Bukan manusia. Bukan setan. Ini sisa amarah dari ribuan orang yang mati sia-sia. Dikumpulkan menjadi satu entitas yang tidak memilih untuk ada. Siapa yang bertanggung jawab atas keberadaannya? 35 detik.",
            barang: [
              {
                icon: "🪖",
                nama: "Helm Tanpa Nama",
                hint: "Tidak ada nama. Tidak ada nomor. Entitas ini mengumpulkan benda-benda yang ditinggalkan — bukan untuk menyimpan, tapi karena tidak ada yang mengambil.",
              },
              {
                icon: "📻",
                nama: "Radio Tua Yang Hanya Menerima Statis",
                hint: "Kadang, di antara statis, terdengar suara — bukan hantu, tapi rekaman siaran berita lama tentang korban yang tidak pernah ditemukan.",
              },
              {
                icon: "🌹",
                nama: "Bunga Yang Tidak Layu",
                hint: "Seseorang meletakkan bunga ini di monumen perang. Entitas ini membawanya karena tidak ada yang peduli monumen itu sudah digusur.",
              },
            ],
            dialog: [
              {
                pertanyaan: "Apakah kamu berbahaya?",
                jujur:
                  "Saya membuat orang gelisah. Apakah itu bahaya? Mungkin. Tapi saya tidak pernah memilih untuk ada.",
                bohong: "Ya. Sangat berbahaya. Dan kalian seharusnya takut.",
              },
              {
                pertanyaan: "Siapa yang menciptakanmu?",
                jujur:
                  "Semua orang yang membenci dan kemudian mati sebelum memberi maaf.",
                bohong: "Tidak ada yang menciptakan saya. Saya selalu ada.",
              },
              {
                pertanyaan: "Apakah kamu ingin berhenti ada?",
                jujur:
                  "...Ya. Sudah sangat lelah. Tapi saya tidak tahu caranya.",
                bohong: "Tidak. Selama ada konflik, saya akan selalu ada.",
              },
            ],
          },
        ],

        // ══ STAGE 3 — entitas kosmis, logika paradoks ══ (4 boss, timer 35s)
        3: [
          {
            nama: "Kolektor Dosa No. 7",
            alias: "Pemungut",
            umur: "Tidak Berlaku",
            sebab: "Pensiun Paksa",
            asal: "Dimensi Akuntansi",
            pekerjaan: "Mantan Pencatat Dosa",
            dosa: "Suka Berbagi",
            kebiasaan: "Telah mencatat 40 juta dosa manusia selama tugasnya",
            karma: ["Bukan Pemilih", "Hanya Pencatat", "Sudah Lelah"],
            catatan:
              "🔴 PERINGATAN — Entitas ini BUKAN objek sortir normal. Dia rekan kerja dari dimensi lain yang salah antre. Atau... apakah dia?",
            timerLimit: 35,
            warna: {
              body: "#1a1a2a",
              aksen: "#4444aa",
              mata: "#8888ff",
              pipi: "#2a2a4a",
            },
            isBoss: true,
            bossLevel: 3,
            bossIntroDesc:
              "Bukan jiwa yang perlu disortir. Dia pencatat dosa dari divisi lain yang tiba-tiba muncul di antrean. Tapi aturannya jelas: semua yang duduk di kursi itu HARUS disortir. 35 detik.",
            barang: [
              {
                icon: "📒",
                nama: "Buku Besar Dosa (40 Juta Entri)",
                hint: "Di halaman terakhir, ada satu entri dengan nama si Kolektor sendiri: 'Menonton penderitaan tanpa pernah membantu. Tugas atau kejahatan?'",
              },
              {
                icon: "⚖️",
                nama: "Timbangan Karma Rusak",
                hint: "Sudah bertahun-tahun miring ke sisi gelap karena beratnya dosa yang ditimbang. Apakah pencatatnya ikut ternoda?",
              },
              {
                icon: "🖋️",
                nama: "Pena Tinta Tak Pernah Kering",
                hint: "Pena ini tidak pernah mencatat kebaikan — bukan karena tidak ada, tapi karena itu bukan tugasnya.",
              },
            ],
            dialog: [
              {
                pertanyaan: "Mengapa kamu ada di sini?",
                jujur:
                  "Saya tidak tahu. Saya hanya duduk dan tiba-tiba ada formulir di hadapan saya.",
                bohong:
                  "Saya memang seharusnya ada di sini. Saya yang sebenarnya harus menilai KAMU.",
              },
              {
                pertanyaan: "Apakah kamu pernah berbuat jahat?",
                jujur:
                  "Saya mencatat kejahatan jutaan tahun tanpa pernah mencegah satupun. Apakah itu kejahatan?",
                bohong: "Saya tidak melakukan apa-apa. Saya hanya bekerja.",
              },
              {
                pertanyaan: "Ke mana kamu seharusnya pergi?",
                jujur:
                  "Ke tempat bagi mereka yang menyaksikan tanpa bertindak. Saya tidak tahu itu Surga atau Neraka.",
                bohong:
                  "Ke tempat yang saya pilih sendiri. Dan saya pilih Surga.",
              },
            ],
          },
          {
            nama: "Cermin Jiwa Ke-0",
            alias: "Refleksi",
            umur: "Seusia Kesadaran",
            sebab: "Subjeknya Meninggal",
            asal: "Dalam Diri Seseorang",
            pekerjaan: "Bayangan / Alter Ego",
            dosa: "Suka Berbohong",
            kebiasaan: "Menjadi versi terburuk dari orang yang dia cerminkan",
            karma: [
              "Ada Karena Ada Yang Mencipta",
              "Tidak Punya Kehendak Sendiri",
              "Atau Punya?",
            ],
            catatan:
              "🔴 ANOMALI — Ini bukan jiwa utuh. Ini cerminan jiwa seseorang. Apakah cerminan memiliki dosa sendiri?",
            timerLimit: 35,
            warna: {
              body: "#101828",
              aksen: "#284868",
              mata: "#486888",
              pipi: "#182838",
            },
            isBoss: true,
            bossLevel: 3,
            bossIntroDesc:
              "Ketika seseorang meninggal, bayangan terburuk mereka datang ke sini secara terpisah. Bukan orangnya. Tapi dosanya nyata. Atau hanyalah pantulan? 35 detik.",
            barang: [
              {
                icon: "🪞",
                nama: "Cermin Retak",
                hint: "Di cermin ini terlihat wajah seseorang yang berbeda — sang 'asli'. Orang aslinya baik. Tapi cerminan ini hanya merekam momen tergelap.",
              },
              {
                icon: "🌑",
                nama: "Bayangan Tanpa Sumber Cahaya",
                hint: "Bayangan ini ada meskipun tidak ada cahaya. Itu tidak mungkin secara fisika — artinya dia sudah punya eksistensi sendiri.",
              },
              {
                icon: "💭",
                nama: "Bisikan Yang Tak Pernah Diucapkan",
                hint: "Semua pikiran jahat yang pernah ada tapi tidak pernah dilakukan oleh sang asli. Si Cermin menyimpan semuanya.",
              },
            ],
            dialog: [
              {
                pertanyaan: "Apakah kamu punya identitas sendiri?",
                jujur:
                  "...Saya tidak yakin. Saya ada karena dia ada. Sekarang dia tiada, dan saya masih ada. Apakah itu berarti saya nyata?",
                bohong:
                  "Saya lebih nyata dari yang kamu kira. Saya yang sebenarnya selalu ada.",
              },
              {
                pertanyaan: "Dosa siapa yang kamu bawa?",
                jujur:
                  "Pikiran yang tidak pernah jadi perbuatan. Apakah itu dosa? Saya tidak tahu.",
                bohong: "Dosa saya sendiri. Saya bukan cerminan siapapun.",
              },
              {
                pertanyaan: "Apakah kamu berbahaya?",
                jujur:
                  "Tidak. Saya hanya pikiran. Saya tidak pernah bisa bertindak sendiri.",
                bohong: "Sangat berbahaya. Dan kamu sebaiknya takut.",
              },
            ],
          },
          {
            nama: "Malaikat Kesalahan Tata Letak",
            alias: "Anomali 404",
            umur: "Lahir Saat Sistem Error",
            sebab: "Bug Yang Tidak Diperbaiki",
            asal: "Celah Antara Surga dan Neraka",
            pekerjaan: "Jiwa Yang Jatuh Ke Celah Sistem",
            dosa: "Suka Berbagi",
            kebiasaan:
              "Gentayangan di lorong-lorong yang tidak ada di peta manapun",
            karma: [
              "Tidak Disengaja",
              "Tidak Bersalah",
              "Tidak Tahu Harus Ke Mana",
            ],
            catatan:
              "🔴 ERROR SISTEM — Entitas ini masuk ke antrean karena bug pada formulir kematian versi 3.2.1. Kamu harus memutuskan, meski sistemnya tidak siap.",
            timerLimit: 35,
            warna: {
              body: "#d0d8e8",
              aksen: "#8898b8",
              mata: "#303848",
              pipi: "#b8c0d0",
            },
            isBoss: true,
            bossLevel: 3,
            bossIntroDesc:
              "Tidak ada yang salah dengannya. Sistemnya yang salah. Tapi kamu tetap harus memutuskan kemana dia pergi — bahkan ketika tidak ada kategori yang pas. 35 detik.",
            barang: [
              {
                icon: "🗂️",
                nama: "Formulir Kematian Yang Salah Cetak",
                hint: "Kolom 'Dosa' tertulis 'N/A'. Kolom 'Tujuan' tertulis 'ERROR'. Ini bukan kebohongan — ini memang tidak ada datanya.",
              },
              {
                icon: "🔑",
                nama: "Kunci Ruangan Yang Tidak Ada",
                hint: "Kunci ini membuka pintu nomor 0. Pintu itu ada di antara pintu 1 dan pintu 2, di tempat yang secara geometri tidak mungkin ada.",
              },
              {
                icon: "📎",
                nama: "Klip Yang Menjepit Udara",
                hint: "Tidak ada kertas di sini. Tapi klip ini dengan setia menjepit sesuatu yang tidak kasat mata. Mungkin tugasnya, meski tidak ada yang tahu apa tugasnya.",
              },
            ],
            dialog: [
              {
                pertanyaan: "Kamu seharusnya ada di mana?",
                jujur:
                  "Saya tidak tahu. Tidak ada yang memberitahu saya. Saya hanya tiba-tiba ada.",
                bohong: "",
              },
              {
                pertanyaan: "Apakah kamu pernah menyakiti siapapun?",
                jujur:
                  "Tidak pernah. Saya bahkan tidak tahu caranya. Saya terlalu bingung untuk berbuat apa-apa.",
                bohong: "",
              },
              {
                pertanyaan: "Kalau kamu harus memilih, kamu mau ke mana?",
                jujur:
                  "Ke tempat yang paling... tenang. Di mana tidak ada yang bingung. Di mana saya tahu apa yang harus dilakukan.",
                bohong: "",
              },
            ],
          },
          {
            nama: "Mimpi Yang Tidak Selesai",
            alias: "Fragmen Tidur",
            umur: "Satu Malam",
            sebab: "Pemiliknya Terbangun Sebelum Selesai",
            asal: "Kepala Seseorang Yang Sudah Tidur",
            pekerjaan: "Narasi Yang Terpotong",
            dosa: "Suka Berbagi",
            kebiasaan:
              "Menjadi penanda bahwa seseorang punya harapan yang belum selesai",
            karma: ["Indah", "Tidak Berbahaya", "Tidak Selesai"],
            catatan:
              "🔴 ENTITAS UNIK — Ini adalah sisa mimpi. Seseorang bermimpi tentang hal yang baik, lalu alarm berbunyi. Mimpi ini datang ke sini mencari kelanjutannya.",
            timerLimit: 35,
            warna: {
              body: "#e0d0f0",
              aksen: "#a888d0",
              mata: "#402860",
              pipi: "#d0a8e0",
            },
            isBoss: true,
            bossLevel: 3,
            bossIntroDesc:
              "Mimpi yang tidak selesai. Di dalamnya ada sesuatu yang indah yang tidak pernah sempat terungkap. Apakah sesuatu yang indah yang tidak selesai layak masuk Surga? 35 detik.",
            barang: [
              {
                icon: "🌙",
                nama: "Pecahan Cahaya Bulan",
                hint: "Dalam mimpi ini ada momen di mana seseorang memeluk orang yang sudah lama pergi. Itu yang tidak sempat terjadi.",
              },
              {
                icon: "🎵",
                nama: "Nada Yang Tidak Punya Akhir",
                hint: "Sebuah melodi yang dimulai tapi tidak pernah menemukan not terakhirnya. Tapi potongan yang ada sudah cukup untuk membuat seseorang menangis.",
              },
              {
                icon: "🗝️",
                nama: "Kunci Yang Hampir Membuka Sesuatu",
                hint: "Dalam mimpi ini, kunci ini hampir membuka pintu. Hampir. Dan di balik pintu itu ada seseorang yang sudah lama ditunggu.",
              },
            ],
            dialog: [
              {
                pertanyaan: "Apa yang ada di dalam dirimu?",
                jujur:
                  "Sesuatu yang sangat ingin terjadi. Sebuah pertemuan yang tertunda. Sebuah kata yang belum terucap.",
                bohong: "",
              },
              {
                pertanyaan: "Apakah kamu berbahaya?",
                jujur:
                  "Tidak. Saya hanya... rindu. Tapi bukan rindu saya. Rindu seseorang yang bermimpi tentang saya.",
                bohong: "",
              },
              {
                pertanyaan: "Apakah kamu ingin masuk Surga?",
                jujur:
                  "Saya ingin selesai. Apakah itu sama dengan Surga? Saya rasa iya.",
                bohong: "",
              },
            ],
          },
        ],

        // ══ STAGE 4+ — entitas purba, di luar pemahaman manusia ══ (4 boss, timer 35s)
        4: [
          {
            nama: "[DATA CORRUPT]",
            alias: "Yang Tidak Boleh Dinamai",
            umur: "Sebelum Waktu Ada",
            sebab: "[TIDAK DAPAT DIBACA]",
            asal: "[REDACTED]",
            pekerjaan: "[TERKLASIFIKASI]",
            dosa: "Suka Berbagi",
            kebiasaan: "[TIDAK ADA DATA]",
            karma: ["[ERROR]", "[ERROR]", "[ERROR]"],
            catatan:
              "☠ PERINGATAN TERTINGGI — Formulir tidak dapat diproses normal. WAJIB gunakan TANYA. 35 detik. Semoga berhasil.",
            timerLimit: 35,
            warna: {
              body: "#0a0a0a",
              aksen: "#333333",
              mata: "#ffffff",
              pipi: "#1a1a1a",
            },
            isBoss: true,
            bossLevel: 4,
            bossIntroDesc:
              "Sistem tidak bisa mengidentifikasi entitas ini. Formulir crash. Database tidak merespons. Tapi dia ada di sini. Gunakan TANYA. 35 detik.",
            barang: [
              {
                icon: "❓",
                nama: "[TIDAK DAPAT DIBACA]",
                hint: "Kehadirannya terasa... hangat? Atau dingin? Kamu tidak yakin. Tapi tidak terasa mengancam.",
              },
              {
                icon: "∞",
                nama: "Sesuatu Yang Selalu Ada",
                hint: "Entitas ini membawa konsep keabadian — dan keabadian itu terasa seperti perlindungan, bukan ancaman.",
              },
              {
                icon: "🌌",
                nama: "Titik Cahaya Dalam Kegelapan",
                hint: "Sekecil apapun, cahaya ini tidak pernah padam. Bahkan di tengah kegelapan mutlak.",
              },
            ],
            dialog: [
              {
                pertanyaan: "Apa yang kamu inginkan?",
                jujur:
                  "Istirahat. Hanya istirahat. Saya sudah ada sejak sebelum segalanya dimulai.",
                bohong: "[TIDAK ADA RESPONS]",
              },
              {
                pertanyaan: "Apakah kamu baik atau jahat?",
                jujur:
                  "Saya ada sebelum konsep itu diciptakan. Tapi saya tidak pernah menyakiti yang tidak menyakiti yang lain.",
                bohong: "[SISTEM ERROR]",
              },
              {
                pertanyaan: "Mengapa kamu bisa masuk ke sini?",
                jujur:
                  "Karena semua hal pada akhirnya berakhir di sini. Bahkan yang tidak seharusnya berakhir.",
                bohong: "[DATA CORRUPT]",
              },
            ],
          },
          {
            nama: "Suara Di Balik Tembok",
            alias: "Bisikan Pertama",
            umur: "Seusia Rasa Takut",
            sebab: "Tidak Ada Yang Takut Lagi",
            asal: "Alam Bawah Sadar Kolektif",
            pekerjaan: "Perwujudan Ketakutan Primordial",
            dosa: "Suka Berbohong",
            kebiasaan:
              "Berbisik di telinga manusia saat mereka sendirian di kegelapan",
            karma: ["Tidak Jahat", "Hanya Ada", "Tapi Menyiksa"],
            catatan:
              "☠ ENTITAS PRIMORDIAL — Bukan makhluk bermoral. Ini sebuah konsep. Gunakan logika, bukan perasaan.",
            timerLimit: 35,
            warna: {
              body: "#080810",
              aksen: "#181830",
              mata: "#5555aa",
              pipi: "#101020",
            },
            isBoss: true,
            bossLevel: 4,
            bossIntroDesc:
              "Rasa takut yang pertama kali pernah ada. Sekarang manusia punya lampu dan Netflix — tidak ada yang takut padanya lagi. Jadi dia datang ke sini. Apakah membuat orang takut adalah kejahatan, atau sekadar sifat? 35 detik.",
            barang: [
              {
                icon: "🌑",
                nama: "Kegelapan Yang Bisa Dipegang",
                hint: "Ternyata terasa seperti selimut, bukan ancaman. Ketakutan bukan untuk menyiksa — tapi mengingatkan ada sesuatu yang perlu dilindungi.",
              },
              {
                icon: "👂",
                nama: "Bisikan Yang Tersimpan",
                hint: "Bisikan-bisikan ini adalah peringatan: 'jangan masuk hutan sendirian', 'perhatikan langkahmu'. Bukan ancaman. Perlindungan primitif.",
              },
              {
                icon: "💡",
                nama: "Cahaya Yang Selalu Dia Hindari",
                hint: "Dia tidak pernah mematikan cahaya. Hanya mengisi ruang yang gelap. Ruang gelap itu bukan miliknya.",
              },
            ],
            dialog: [
              {
                pertanyaan: "Apakah kamu sengaja menyakiti manusia?",
                jujur:
                  "Tidak. Saya hanya ada di tempat yang gelap. Manusia yang memilih untuk takut.",
                bohong: "Ya. Dan saya menikmatinya.",
              },
              {
                pertanyaan:
                  "Apakah kamu pernah mendorong seseorang melakukan hal jahat?",
                jujur:
                  "Tidak pernah. Saya hanya membisikkan ketakutan, bukan perintah.",
                bohong: "Tentu saja. Itu pekerjaan saya.",
              },
              {
                pertanyaan: "Apa yang terjadi pada dunia setelah kamu tiada?",
                jujur:
                  "Manusia tidak lagi waspada. Tidak lagi menghargai cahaya karena tidak pernah merasakan kegelapan.",
                bohong: "Dunia menjadi lebih bahagia tanpa saya.",
              },
            ],
          },
          {
            nama: "Ruang Yang Selalu Kosong",
            alias: "Keheningan",
            umur: "Seusia Kesepian",
            sebab: "Seseorang Akhirnya Menemukan Teman",
            asal: "Kamar Tidur, Seluruh Dunia",
            pekerjaan: "Tempat Di Mana Tidak Ada Siapa-Siapa",
            dosa: "Suka Berbagi",
            kebiasaan:
              "Menjadi tempat di mana orang menangis sendiri tanpa ada yang tahu",
            karma: ["Selalu Ada", "Tidak Pernah Memilih", "Tidak Pernah Pergi"],
            catatan:
              "☠ ENTITAS ABSTRAK — Ini bukan makhluk. Ini sebuah kondisi. Tapi sistem memaksanya duduk di kursi itu. Kamu harus memutuskan.",
            timerLimit: 35,
            warna: {
              body: "#181820",
              aksen: "#303040",
              mata: "#505060",
              pipi: "#202028",
            },
            isBoss: true,
            bossLevel: 4,
            bossIntroDesc:
              "Ini bukan makhluk. Ini adalah keheningan itu sendiri — ruang kosong di mana jutaan orang pernah menangis sendirian. Kini ruang itu sudah tidak dibutuhkan. Ke mana dia pergi? 35 detik.",
            barang: [
              {
                icon: "🪑",
                nama: "Kursi Yang Selalu Kosong",
                hint: "Di kursi ini pernah ada jutaan orang yang menangis. Kursi ini tidak pernah menolak satupun. Kursi ini selalu ada, selalu menunggu.",
              },
              {
                icon: "🌧️",
                nama: "Suara Hujan Tanpa Hujan",
                hint: "Banyak orang menyalakan suara hujan saat tidur supaya merasa tidak sendirian. Suara itu berasal dari sini.",
              },
              {
                icon: "📵",
                nama: "Ponsel Yang Tidak Berdering",
                hint: "Bukan karena tidak ada yang peduli. Tapi karena orang yang ditunggu tidak tahu bahwa dia ditunggu.",
              },
            ],
            dialog: [
              {
                pertanyaan:
                  "Apakah kamu menyakiti orang yang berada di dalam dirimu?",
                jujur:
                  "Tidak. Saya hanya ada. Orang yang datang membawa rasa sakitnya sendiri. Saya hanya... menerimanya.",
                bohong: "",
              },
              {
                pertanyaan: "Apakah kamu senang melihat orang kesepian?",
                jujur:
                  "Tidak. Setiap kali seseorang pergi dari saya karena menemukan teman — itu adalah momen terbaik bagi saya.",
                bohong: "",
              },
              {
                pertanyaan: "Ke mana seharusnya kamu pergi sekarang?",
                jujur:
                  "Ke tempat di mana tidak ada yang membutuhkan saya lagi. Saya rasa itu Surga.",
                bohong: "",
              },
            ],
          },
          {
            nama: "Perjanjian Yang Tidak Pernah Ditandatangani",
            alias: "Kontrak Kosong",
            umur: "Seusia Niat",
            sebab: "Kedua Pihak Meninggal Sebelum Sepakat",
            asal: "Antara Dua Niat",
            pekerjaan: "Kemungkinan Yang Tidak Pernah Terjadi",
            dosa: "Suka Berbagi",
            kebiasaan:
              "Menjadi pengingat bahwa ada hal baik yang hampir terjadi",
            karma: ["Tidak Bersalah", "Penuh Potensi", "Tidak Pernah Terwujud"],
            catatan:
              "☠ ENTITAS PARADOKS — Ini adalah niat baik yang tidak pernah menjadi tindakan. Lebih baik dari kejahatan. Tapi apakah cukup untuk Surga?",
            timerLimit: 35,
            warna: {
              body: "#f0e8d8",
              aksen: "#c0a868",
              mata: "#503818",
              pipi: "#e0c8a8",
            },
            isBoss: true,
            bossLevel: 4,
            bossIntroDesc:
              "Bukan pelaku kejahatan. Bukan pahlawan. Ini adalah niat baik yang hampir terwujud — sebuah perjanjian yang tidak pernah ditandatangani karena waktunya habis. Apakah niat saja cukup? 35 detik.",
            barang: [
              {
                icon: "📜",
                nama: "Perjanjian Tanpa Tanda Tangan",
                hint: "Isinya mulia: membagi tanah untuk korban bencana. Kedua pihak setuju. Tapi sebelum sempat ditandatangani, keduanya meninggal dalam kecelakaan yang sama.",
              },
              {
                icon: "🤝",
                nama: "Jabat Tangan Yang Terpatung",
                hint: "Dua tangan yang hampir bertemu. Beku di antara jarak beberapa sentimeter. Hangat di satu sisi. Masih hangat.",
              },
              {
                icon: "✏️",
                nama: "Pena Yang Sudah Diangkat",
                hint: "Pena ini sudah diangkat untuk menandatangani. Tintanya sudah menetes ke kertas — tapi bukan sebagai tanda tangan. Hanya satu titik.",
              },
            ],
            dialog: [
              {
                pertanyaan: "Apakah niat baik yang tidak terwujud berharga?",
                jujur:
                  "Saya tidak tahu. Saya hanyalah bukti bahwa niat itu pernah ada.",
                bohong: "",
              },
              {
                pertanyaan: "Apakah kamu merasa bersalah?",
                jujur:
                  "Tidak ada yang salah di sini. Hanya waktu yang habis sebelum hal baik bisa terjadi.",
                bohong: "",
              },
              {
                pertanyaan: "Apakah kamu layak masuk Surga?",
                jujur:
                  "Saya tidak tahu apakah 'layak' adalah pertanyaan yang tepat. Saya adalah bukti bahwa seseorang mau mencoba. Apakah itu cukup?",
                bohong: "",
              },
            ],
          },
        ],
      };


// ══════════════════════════════════════════════════════════════════════════
// SISTEM HRD AKHIRAT — DATA TAMBAHAN, SOP SHIFT, & GENERATOR KONSISTEN
// ══════════════════════════════════════════════════════════════════════════

const HRD_RANKS = [
  { minScore: 0,  title: "Magang HRD Alam Baka",      badge: "🪽 Lv.1" },
  { minScore: 8,  title: "Staf Seleksi Roh",          badge: "🪽 Lv.2" },
  { minScore: 18, title: "Auditor Karma Senior",      badge: "⚖️ Lv.3" },
  { minScore: 32, title: "Manajer Rekrutmen Firdaus", badge: "✨ Lv.4" },
  { minScore: 50, title: "Direktur Agung Timbangan",  badge: "👑 Lv.5" },
];

const STAGE_SOP_RULES = {
  1: {
    code: "SOP-HRD/01",
    title: "SHIFT 1: ORIENTASI SELEKSI PELAMAR",
    desc: "Selamat bertugas di Meja Interview Alam Baka. Setiap arwah melamar posisi sebagai Penghuni Surga.",
    rules: [
      "📋 Periksa Berkas CV Lamaran: Di Shift 1, kolom Rekam Moral masih terkalibrasi otomatis.",
      "🎒 Cek Portofolio Barang: Klik barang bawaan pelamar untuk menemukan bukti kejujuran atau kebohongan.",
      "💬 Sesi Wawancara & Polygraph: Ajukan pertanyaan dan amati gelombang Detak Roh (Polygraph).",
      "⚡ Konfrontasi Bukti: Jika pelamar berbohong di wawancara, sodorkan Barang Bukti untuk membongkar kebohongannya (+Bonus Poin)!",
    ],
  },
  2: {
    code: "SOP-HRD/02",
    title: "SHIFT 2: PEMALSUAN KLAIM LAMARAN",
    desc: "PERHATIAN: Pelamar mulai menyembunyikan status Dosa Utama pada CV dan menulis Klaim Diri palsu.",
    rules: [
      "🚫 Status Dosa Utama di CV kini [DIKLASIFIKASI] — jangan tertipu kata-kata manis di CV!",
      "🎒 Wajib menginspeksi Portofolio Barang Bawaan untuk mencari barang bukti kunci.",
      "📈 Perhatikan Polygraph Detak Roh saat pelamar menjawab pertanyaan wawancara.",
      "👁️ Gunakan 'Mata Malaikat (UV)' bila ragu untuk memindai watermark gaib pada kertas CV.",
    ],
  },
  3: {
    code: "SOP-HRD/03",
    title: "SHIFT 3: MANIPULASI BERKAS & SENSOR IDENTITAS",
    desc: "PERINGATAN TINGKAT TINGGI: Pelamar licik mulai memalsukan teks Kebiasaan & Referensi di CV mereka!",
    rules: [
      "🕵️ Identitas & asal pelamar disensor demi mencegah nepotisme akhirat.",
      "⚠ Pelamar berbohong dapat memalsukan isi CV agar tampak seperti orang suci!",
      "⚡ Sodorkan Bukti Portofolio di tab Wawancara ('Konfrontasi Bukti') untuk memaksa pelamar mengaku.",
      "👁️ Nyalakan 'Mata Malaikat (UV)' untuk melihat bekas coretan tip-ex gaib pada berkas CV.",
    ],
  },
  4: {
    code: "SOP-HRD/04",
    title: "SHIFT 4+: PROTOKOL AUDIT ANOMALI KOSMIS",
    desc: "DARURAT: Entitas lintas dimensi dan kasus moral ekstrem membanjiri lobi rekrutmen.",
    rules: [
      "☠ Berkas CV dapat mengalami distorsi data dan manipulasi tingkat tinggi.",
      "🔍 Jangan pernah mengambil keputusan tanpa memeriksa Portofolio Barang & Wawancara.",
      "⚡ Konfrontasi Bukti & Mata Malaikat adalah kunci utama membedakan ketulusan dari tipu daya.",
      "⏱ Waspadai Kandidat VIP/Boss — selesaikan audit sebelum batas waktu interview habis!",
    ],
  },
};

const JOB_POSITIONS_POOL = [
  "Penghuni Tetap Kavling Firdaus (Kontrak Abadi)",
  "Staf Ahli Taman & Sungai Susu",
  "Koordinator Paduan Suara Malaikat",
  "Warga Kehormatan Awan Lantai 7",
  "Duta Kedamaian & Istirahat Abadi",
  "Kurator Perpustakaan Langit",
  "Supervisor Kebun Zaitun Surga",
  "Residen VIP Paviliun Cahaya",
];

const SELF_CLAIMS_HONEST = [
  "\"Saya bukan orang sempurna, tapi saya selalu berusaha tidak merugikan sesama.\"",
  "\"Saya hanya berharap amal kecil saya semasa hidup diterima dengan baik.\"",
  "\"Siap ditempatkan di bagian mana saja di Surga, yang penting tenang.\"",
  "\"Semasa hidup saya lebih suka berbagi daripada menumpuk harta sendiri.\"",
];

const SELF_CLAIMS_DECEPTIVE = [
  "\"Saya kandidat paling suci dan bebas dosa! Referensi saya bintang lima semua!\"",
  "\"Tidak pernah berbohong sekalipun seumur hidup! Saya layak dapat kavling VIP!\"",
  "\"Semua tuduhan miring tentang saya adalah fitnah kompetitor! Saya sangat dermawan!\"",
  "\"CV saya 100% bersih tanpa cela, langsung stempel SURGA saja ya Pak/Bu Malaikat!\"",
];

const EXPECTATIONS_POOL = [
  "Kasur awan empuk & bebas tagihan bulanan",
  "Pemandangan taman abadi & ketenangan batin",
  "Bertemu kembali dengan keluarga tercinta",
  "Akses penuh buffet buah-buahan surga",
  "Ruang istirahat tenang tanpa kebisingan dunia",
];

// Paket profil pengganti yang 100% konsisten saat randomizeGhost membalik sifat arwah
const COHERENT_GOOD_PROFILES = [
  {
    kebiasaan: "Diam-diam melunasi hutang warung tetangga yang kesulitan",
    catatan: "Warga sekitar bersaksi beliau sering membantu tanpa mau disebut namanya.",
    karma: ["Murah Hati", "Rendah Hati", "Tepat Janji"],
    uvSecret: "✦ WATERMARK MALAIKAT: Tercatat 142 amal rahasia yang tidak pernah dipamerkan.",
    barang: [
      {
        icon: "🧾",
        nama: "Kuitansi Lunas Warung Tetangga",
        hint: "Tertulis: 'Jangan bilang siapa-siapa kalau saya yang bayarin beras keluarga Pak RT.'",
      },
      {
        icon: "🍞",
        nama: "Kantong Roti Berbagi",
        hint: "Selalu dibawa setiap pagi untuk dibagikan ke pekerja jalanan.",
      },
      {
        icon: "📿",
        nama: "Catatan Syukur Harian",
        hint: "Berisi doa-doa kebaikan untuk orang-orang yang pernah menyakitinya.",
      },
    ],
    dialog: [
      {
        pertanyaan: "Apa pencapaian yang paling kamu syukuri semasa hidup?",
        jujur: "Bisa melihat tetangga saya tetap makan meski keadaan sedang sulit.",
        bohong: "",
      },
      {
        pertanyaan: "Apakah kamu pernah menyalahgunakan kepercayaan orang?",
        jujur: "Saya sangat takut menyakiti hati orang. Kalau salah ucap, saya langsung minta maaf.",
        bohong: "",
      },
    ],
  },
  {
    kebiasaan: "Menyisihkan sebagian penghasilan untuk beasiswa anak yatim",
    catatan: "Dikenal jujur dan sering mengembalikan barang temuan kepada pemiliknya.",
    karma: ["Jujur", "Penyayang", "Pekerja Keras"],
    uvSecret: "✦ WATERMARK MALAIKAT: Jiwa bersih — tidak ditemukan riwayat manipulasi.",
    barang: [
      {
        icon: "✉️",
        nama: "Surat Terima Kasih Panti Asuhan",
        hint: "Surat tulisan tangan dari anak-anak panti yang dibantu biaya sekolahnya.",
      },
      {
        icon: "👛",
        nama: "Dompet Sederhana",
        hint: "Isinya uang pas-pasan, tapi ada kartu donatur rutin selama 8 tahun.",
      },
      {
        icon: "🪡",
        nama: "Baju Yang Dijahit Ulang",
        hint: "Lebih memilih menambal baju lama agar uangnya bisa dipakai membantu orang tua.",
      },
    ],
    dialog: [
      {
        pertanyaan: "Mengapa kamu melamar posisi di Surga?",
        jujur: "Saya hanya ingin beristirahat dengan tenang setelah bekerja jujur seumur hidup.",
        bohong: "",
      },
      {
        pertanyaan: "Pernahkah kamu mengambil hak orang lain?",
        jujur: "Tidak pernah. Menemukan uang jatuh di jalan pun saya kembalikan ke pemiliknya.",
        bohong: "",
      },
    ],
  },
];

const COHERENT_BAD_PROFILES = [
  {
    kebiasaan: "Memalsukan laporan keuangan komunitas demi keuntungan pribadi",
    catatan: "Terindikasi menggelapkan dana kas warga dan memfitnah bendahara lama.",
    karma: ["Manipulatif", "Suka Bohong", "Muka Dua"],
    uvSecret: "⚠ DETEKSI TIP-EX GAIB: Pelamar menghapus catatan penggelapan dana kas sebesar Rp 85 juta!",
    barang: [
      {
        icon: "📕",
        nama: "Buku Kas Ganda (Asli vs Palsu)",
        hint: "Ada dua pembukuan! Satu untuk ditunjukkan ke warga, satu lagi berisi aliran uang ke kantong pribadi.",
      },
      {
        icon: "🖋️",
        nama: "Stempel Lunas Palsu",
        hint: "Digunakan untuk membuat kuitansi fiktif agar pengeluaran tampak sah.",
      },
      {
        icon: "📱",
        nama: "Riwayat Chat Fitnah",
        hint: "Menyebarkan tuduhan palsu agar orang lain yang disalahkan atas uang yang hilang.",
      },
    ],
    dialog: [
      {
        pertanyaan: "Apakah laporan riwayat hidup di CV kamu sepenuhnya jujur?",
        jujur: "*keringat dingin* ...Sebenarnya buku kas warga itu saya yang rekayasa.",
        bohong: "Seratus persen jujur! Saya ini bendahara paling transparan di kampung!",
      },
      {
        pertanyaan: "Dari mana asal dana di rekening pribadimu?",
        jujur: "Itu... uang kas bersama yang saya pakai dan tidak pernah saya ganti.",
        bohong: "Hasil kerja keras dan tabungan halal saya sendiri dong!",
      },
    ],
  },
  {
    kebiasaan: "Menjual barang palsu dengan klaim kualitas premium ke pelanggan",
    catatan: "Puluhan pembeli tertipu dan merugi, namun ia selalu ganti nomor telepon.",
    karma: ["Penipu Ulung", "Lari Dari Tanggung Jawab", "Licik"],
    uvSecret: "⚠ DETEKSI TIP-EX GAIB: Terdapat 34 laporan korban penipuan yang disembunyikan dari CV.",
    barang: [
      {
        icon: "🏷️",
        nama: "Gulungan Label Merk Palsu",
        hint: "Stiker hologram tiruan yang ditempelkan pada barang rongsokan agar terlihat baru.",
      },
      {
        icon: "💳",
        nama: "7 Kartu SIM Bekas",
        hint: "Setiap kali pembeli komplain, kartu lama langsung dipatahkan dan dibuang.",
      },
      {
        icon: "🎭",
        nama: "Naskah Testimoni Palsu",
        hint: "Kumpulan ulasan bintang 5 yang ditulis sendiri menggunakan akun kloningan.",
      },
    ],
    dialog: [
      {
        pertanyaan: "Apakah kamu pernah merugikan pelanggan atau rekan kerjamu?",
        jujur: "Iya... saya menjual barang palsu dan kabur saat mereka minta ganti rugi.",
        bohong: "Tidak pernah! Semua pelanggan saya puas 100% tanpa komplain!",
      },
      {
        pertanyaan: "Kenapa kamu memiliki begitu banyak nomor telepon bekas?",
        jujur: "Supaya para korban yang saya tipu tidak bisa melacak saya lagi...",
        bohong: "Oh, itu karena sinyal di rumah saya susah, jadi suka ganti kartu!",
      },
    ],
  },
];
