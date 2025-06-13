Campus Club Finder adalah aplikasi web yang memudahkan mahasiswa untuk:
- Menemukan klub yang tersedia di kampus
- Melihat detail dan event dari klub
- Bergabung ke klub pilihan
- Semua data disimpan secara lokal di browser menggunakan localStorage, tanpa backend.

Menu
1. Home Page (/)
Fitur:

Pesan sambutan
Menu  "Clubs” untuk navigasi ke /clubs

Screenshot: "campus-club-finder\Screenshot\Home.png"



2. Clubs Page (/clubs)
Fitur:

Menampilkan semua klub 

Toggle tampilan Grid/List

Dropdown untuk sorting A–Z / Z–A

Setiap kartu memiliki tombol "View Details" untuk menuju halaman detail

Komponen Terkait:

ClubCard.jsx

Clubs.jsx

Screenshot: "campus-club-finder\Screenshot\Clubs.png", "campus-club-finder\Screenshot\Sort.png", "campus-club-finder\Screenshot\Sort2.png"


3. Club Detail Page (/clubs/:clubId)
Fitur:

Gambar besar klub

Deskripsi lengkap klub

Daftar event yang akan datang

Tombol “Join Club” → menyimpan status ke localStorage

Jika sudah join, tombol dinonaktifkan & pesan berubah

Komponen Terkait:

ClubDetail.jsx

Screenshot: "campus-club-finder\Screenshot\Details.png"
Bisa Join club
Screenshot: "campus-club-finder\Screenshot\TombolResetClub.png"

4. About Page (/about)
Fitur:

Penjelasan singkat tentang aplikasi

Daftar teknologi yang digunakan: Vite, React, React Router, Tailwind CSS

Screenshot: "campus-club-finder\Screenshot\Details.png" 

Bisa Reset club
Screenshot: "campus-club-finder\Screenshot\TombolResetClub.png"


5. 404 Not Found (*)
Fitur:

Muncul jika user akses route yang tidak ada

Pesan ramah pengguna dan tombol kembali ke Home

Screenshot: Screenshot: "campus-club-finder\Screenshot\Eror.png"



