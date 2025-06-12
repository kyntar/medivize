📝 Draft README – MEDIVIZE 
# MEDIVIZE – Backend API

*MEDIVIZE* adalah sistem informasi obat berbasis web yang menyediakan fitur klasifikasi obat melalui gambar, pencarian informasi obat, dan pengelolaan data obat. Proyek ini dikembangkan menggunakan Node.js dan Express sebagai backend API, dengan integrasi ke model machine learning eksternal.

## 📦 Struktur Proyek

Medivize/
├── backend/
│ ├── server.js # File utama backend
│ ├── package.json # Konfigurasi dependensi Node.js
│ ├── functions/
│ │ └── api.js # API endpoint untuk klasifikasi gambar
│ └── .env # File environment (tidak termasuk dalam repo)

bash
Copy
Edit

## 🚀 Cara Menjalankan Proyek

### 1. Clone repository
```bash
git clone <repository-url>
cd Medivize/backend
2. Install dependensi
bash
Copy
Edit
npm install
3. Buat file .env dengan variabel berikut:
env
Copy
Edit
PORT=8080
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=medivize
ML_API_URL=https://your-ml-api-endpoint.com/classify
4. Jalankan server
Untuk mode produksi:

bash
Copy
Edit
npm start
Untuk mode pengembangan (otomatis reload saat ada perubahan):

bash
Copy
Edit
npm run dev
🔌 Endpoint Utama
POST /api/classify — Menerima gambar obat dan mengirimkan ke model ML untuk klasifikasi.

GET /api/obat — Mengambil data obat dari database MySQL.

🛠️ Teknologi
Node.js

Express.js

MySQL

Multer (upload file)

Axios (request ke ML API)

CORS

Serverless HTTP (opsional untuk deployment serverless)

👨‍💻 Pengembang
1. MC114D5X1963 - Emalia Putri Lestari Telaumbanua - Institut Teknologi Del - Aktif 
2. MC114D5Y1977 - Marihot Tambunan - Institut Teknologi Del - Aktif 
3. MC114D5Y1978 - Handika Sukri Husni Harahap - Institut Teknologi Del - Aktif 
4. FC189D5X0794 - Keysa Maqfirah - Universitas Bengkulu - Aktif 
5. FC189D5X0808 - Federika Butar Butar - Universitas Bengkulu - Aktif 
6. FC012D5Y1245 - Kyntar Barra Langit Lubis - Universitas Telkom- Aktif 

Lisensi: MIT

Catatan: Proyek ini merupakan bagian dari pelatihan DBS Foundation x Dicoding dan dikembangkan sebagai solusi inovatif dalam bidang kesehatan digital.

yaml
Copy
Edit

---
