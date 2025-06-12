# 💊 MediVize – AI-Powered Medicine Identifier

<div align="center">

**🚀 Revolutionizing Medicine Identification Through AI Technology**

[![Made with React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Powered by Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Express.js](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![AI Model](https://img.shields.io/badge/YOLOv11-AI%20Detection-FF6B6B?style=for-the-badge&logo=tensorflow&logoColor=white)](https://github.com/ultralytics/ultralytics)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-4285F4?style=for-the-badge&logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)

</div>

---

## 🎯 **About MediVize**

**MediVize** adalah aplikasi berbasis kecerdasan buatan (AI) yang dirancang untuk membantu 
masyarakat dalam mengenali dan memahami obat melalui foto kemasan. Permasalahan 
yang diangkat adalah maraknya kesalahan penggunaan obat akibat kemasan yang mirip 
dan keterbatasan informasi yang tersedia secara cepat. Hal ini terjadi tidak hanya pada 
lansia, tetapi juga pada kalangan umum seperti pelajar, pekerja, dan masyarakat awam 
yang mengonsumsi obat secara mandiri. 

> **💡 Visi Kami:** Menginspirasi perubahan di dunia kesehatan dengan AI yang mudah diakses, karena setiap orang berhak mendapatkan informasi yang akurat, cepat, dan bermakna.

---

## 🌐 **Quick Access Links**

<div align="center">

| Resource | Link |
|----------|------|
| 🚀 **Live Demo** | [https://medivize.netlify.app/](https://medivize.netlify.app/) |
| 💻 **GitHub Repository** | [https://github.com/kyntar/medivize](https://github.com/kyntar/medivize) |
| 📊 **Dataset** | [Mobile-Captured Pharmaceutical Medication Packages - Mendeley Data](https://data.mendeley.com/datasets/3h5xjvjjgj/1) |
| 🎥 **Video Presentasi** | [https://youtu.be/wLT9cHba3lA](https://youtu.be/wLT9cHba3lA) |
| 📖 **Tutorial Penggunaan** | [https://youtu.be/_wBaDtBpS0](https://youtu.be/_wBaDtBpS0) |
| 🎨 **Slide Presentasi** | [Canva Presentation](https://www.canva.com/design/DAGp8oUa8WQ/Hqu9B6jEVQumcnFz1Rbx4Q/edit?continue_in_browser=true) |

</div>

---

## ✨ **Key Features**

<table>
<tr>
<td align="center" width="33%">

### 📷 **Smart Image Recognition**
Upload atau ambil foto kemasan obat langsung dari kamera untuk identifikasi instan

</td>
<td align="center" width="33%">

### 🧠 **AI-Powered Detection**
Teknologi YOLOv11 terdepan untuk deteksi dan klasifikasi obat dengan akurasi tinggi

</td>
<td align="center" width="33%">

### 📱 **PWA Experience**
Progressive Web App yang dapat diinstall dan berjalan offline di semua device

</td>
</tr>
<tr>
<td align="center" width="33%">

### 💾 **Smart Database**
Sistem penyimpanan dan retrieval data obat yang cepat dan efisien

</td>
<td align="center" width="33%">

### 🌐 **Cross-Platform**
Kompatibel dengan desktop, tablet, dan mobile browsers

</td>
<td align="center" width="33%">

### ⚡ **Real-time Processing**
Pemrosesan gambar dan identifikasi obat dalam hitungan detik

</td>
</tr>
</table>

---

## 🛠️ **Tech Stack**

### 🎨 **Frontend Architecture**
```
React.js 18.x          → Modern UI Library
TailwindCSS 3.x        → Utility-first CSS Framework  
React Router           → Client-side Routing
PWA Technologies       → Service Workers & Web Manifest
```

### ⚙️ **Backend Infrastructure**
```
Node.js + Express.js   → REST API Server
MySQL Database         → Relational Data Storage
Multer Middleware      → File Upload Handling
```

### 🤖 **AI/ML Pipeline**
```
YOLOv11 Object Detection → Medicine Package Recognition
NumPy Data Processing    → Image Preprocessing
Data Augmentation        → Dataset Enhancement
TensorFlow.js Conversion → Web-optimized Model Deployment
Model Optimization       → Performance & Accuracy Tuning
```

---

## 📂 **Project Structure**

<details>
<summary><b>🔍 Click to expand project structure</b></summary>

```
medivize/
├── 🎨 frontend/
│   ├── public/
│   │   ├── index.html
│   │   ├── manifest.json          # PWA Configuration
│   │   └── favicon.ico
│   ├── src/
│   │   ├── 🎭 components/         # Reusable UI Components
│   │   │   ├── Header.jsx
│   │   │   ├── UploadForm.jsx
│   │   │   ├── ResultCard.jsx
│   │   │   └── LoadingSpinner.jsx
│   │   ├── 📄 pages/              # Application Pages
│   │   │   ├── Home.jsx
│   │   │   ├── Results.jsx
│   │   │   └── MedicineDetail.jsx
│   │   ├── 🔧 services/           # API Integration
│   │   │   ├── api.js
│   │   │   └── mlModel.js
│   │   ├── 🎨 assets/             # Static Resources
│   │   ├── App.jsx                # Root Component
│   │   └── index.jsx              # Entry Point
│   ├── tailwind.config.js
│   └── package.json
│
├── ⚙️ backend/
│   ├── 🛣️ routes/
│   │   └── medicineRoutes.js      # API Endpoints
│   ├── 🎮 controllers/
│   │   └── medicineController.js  # Business Logic
│   ├── 🗄️ models/
│   │   └── Medicine.js            # Data Models
│   ├── ⚙️ config/
│   │   └── database.js            # DB Configuration
│   ├── 📁 uploads/                # Temporary File Storage
│   ├── 🔐 middleware/
│   │   └── auth.js                # Authentication
│   ├── server.js                  # Application Entry Point
│   ├── .env                       # Environment Variables
│   └── package.json
│
└── 📊 ml-model/
    ├── training/                  # Model Training Scripts
    ├── datasets/                  # Training Data
    ├── models/                    # Trained Models
    └── preprocessing/             # Data Processing
```

</details>

---

## 🚀 **Quick Start Guide**

### 📋 **Prerequisites**
- Node.js 18.x or higher
- MySQL 8.0+
- Git

### 🏃‍♂️ **Installation Steps**

<details>
<summary><b>1️⃣ Clone Repository</b></summary>

```bash
git clone https://github.com/kyntar/medivize.git
cd medivize
```

</details>

<details>
<summary><b>2️⃣ Setup Backend</b></summary>

```bash
cd backend
npm install

# Create .env file
cp .env.example .env
# Edit .env with your database credentials

# Start the server
npm run dev
```

**Environment Variables:**
```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=medivize
JWT_SECRET=your_jwt_secret
```

</details>

<details>
<summary><b>3️⃣ Setup Frontend</b></summary>

```bash
cd frontend
npm install

# Install TailwindCSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Start development server
npm start
```

</details>

<details>
<summary><b>4️⃣ Database Setup</b></summary>

```sql
CREATE DATABASE medivize;
USE medivize;

-- Run migration scripts
SOURCE database/migrations.sql;
```

</details>

---

## 📱 **How to Use MediVize**

<div align="center">

### 🎯 **Simple 4-Step Process**

</div>

| Step | Action | Description |
|------|--------|-------------|
| **1** | 📷 **Capture/Upload** | Take a photo or upload an image of medicine packaging |
| **2** | 🔄 **AI Processing** | Our YOLOv11 model analyzes the image automatically |
| **3** | 📊 **View Results** | Get instant identification results with confidence scores |
| **4** | 📖 **Explore Details** | Access comprehensive medicine information and usage guidelines |

---

## 🌟 **Advanced Features**

<div align="center">

| Feature | Description | Status |
|---------|-------------|---------|
| 🔍 **Batch Processing** | Process multiple medicine images simultaneously | ✅ Available |
| 📈 **Analytics Dashboard** | Track usage patterns and identification accuracy | 🚧 In Development |
| 🗣️ **Voice Assistant** | Voice-guided medicine identification | 🚧 Coming Soon |
| 🌍 **Multi-language** | Support for Indonesian, English, and local languages | ✅ Available |
| 📱 **Mobile App** | Native iOS and Android applications | 🚧 Planned |
| 🏥 **Hospital Integration** | API for healthcare management systems | 🚧 In Development |

</div>

---

## 🚀 **Deployment Options**

<table>
<tr>
<td align="center" width="33%">

### 🌐 **Frontend**
[![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://medivize.netlify.app/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

</td>
<td align="center" width="33%">

### ⚙️ **Backend**
[![Railway](https://img.shields.io/badge/Railway-131415?style=for-the-badge&logo=railway&logoColor=white)](https://railway.app/)
[![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://render.com/)

</td>
<td align="center" width="33%">

### 🗄️ **Database**
[![PlanetScale](https://img.shields.io/badge/PlanetScale-000000?style=for-the-badge&logo=planetscale&logoColor=white)](https://planetscale.com/)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://mysql.com/)

</td>
</tr>
</table>

---

## 👥 **Our Amazing Team**

<div align="center">

**🎓 Coding Camp 2025 powered by DBS Foundation- Capstone Project Team CC25-CF316**

</div>

<table>
<tr>
<td align="center">
<strong>🤖 Machine Learning </strong>
</td>
<td align="center">
<strong>📱 Frontend Development </strong>
</td>
<td align="center">
<strong>📱 Backend Development</strong>
</td>
</tr>
<tr>
<td>

**MC114D5X1963**  
👩‍💻 **Emalia Putri Lestari Telaumbanua**  
🏫 Institut Teknologi Del  
🔬 *Machine Learning*

**MC114D5Y1977**  
👨‍💻 **Marihot Tambunan**  
🏫 Institut Teknologi Del  
🧠 *Machine Learning*

**MC114D5Y1978**  
👨‍💻 **Handika Sukri Husni Harahap**  
🏫 Institut Teknologi Del  
📊 *Machine Learning*

</td>
<td>

**FC189D5X0794**  
👩‍💻 **Keysa Maqfirah**  
🏫 Universitas Bengkulu  
☁️ *Frontend Development*

</td>
<td>
**FC189D5X0808**  
👩‍💻 **Federika Butar Butar**  
🏫 Universitas Bengkulu  
⚙️ *Backend Development*
    
**FC012D5Y1245**  
👨‍💻 **Kyntar Barra Langit Lubis**  
🏫 Universitas Telkom  
📱 *Backend Development*

</td>
</tr>
</table>

<div align="center">

**🌟 All Team Members: Active & Contributing**

[![Team Status](https://img.shields.io/badge/Team%20Status-All%20Active-success?style=for-the-badge)](https://github.com/kyntar/medivize)
[![Contributions](https://img.shields.io/badge/Contributions-Welcome-brightgreen?style=for-the-badge)](CONTRIBUTING.md)

</div>

---

## 🤝 **Contributing**

We welcome contributions from the community! Here's how you can help:

<div align="center">

[![Issues](https://img.shields.io/github/issues/kyntar/medivize?style=for-the-badge)](https://github.com/kyntar/medivize/issues)
[![Pull Requests](https://img.shields.io/github/issues-pr/kyntar/medivize?style=for-the-badge)](https://github.com/kyntar/medivize/pulls)
[![Contributors](https://img.shields.io/github/contributors/kyntar/medivize?style=for-the-badge)](https://github.com/kyntar/medivize/graphs/contributors)

</div>

### 📝 **How to Contribute**

1. **🍴 Fork** the repository
2. **🌿 Create** your feature branch (`git checkout -b feature/AmazingFeature`)
3. **💾 Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **📤 Push** to the branch (`git push origin feature/AmazingFeature`)
5. **🔀 Open** a Pull Request

---

## 📊 **Project Statistics**

<div align="center">

![GitHub repo size](https://img.shields.io/github/repo-size/kyntar/medivize?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/kyntar/medivize?style=for-the-badge)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/kyntar/medivize?style=for-the-badge)

</div>

---

## 🛡️ **Security & Privacy**

- 🔒 **Secure Image Processing**: All uploaded images are processed securely and deleted after analysis
- 🔐 **Data Encryption**: User data and API communications are encrypted
- 🚫 **No Personal Data Storage**: We don't store personal information without consent
- ✅ **GDPR Compliant**: Full compliance with data protection regulations

---

## 🙏 **Acknowledgments**

<div align="center">

**Special thanks to:**

🎓 **Coding Camp 2025 powered by DBS Foundation** - For providing the platform and mentorship  
🤖 **Google Cloud Platform** - For cloud infrastructure support  
🧠 **TensorFlow Team** - For the amazing ML framework  


</div>

---

<div align="center">

## 💫 **Join the Revolution**

**MediVize** isn't just a project—it's a step toward making healthcare technology accessible to everyone. Together, we're building a smarter, safer future for medicine identification.

### 🌟 **Show Your Support**

If you find MediVize helpful, please consider:

[![Star this repo](https://img.shields.io/badge/⭐-Star%20this%20repo-yellow?style=for-the-badge&logo=github)](https://github.com/kyntar/medivize)
[![Fork this repo](https://img.shields.io/badge/🍴-Fork%20this%20repo-blue?style=for-the-badge&logo=github)](https://github.com/kyntar/medivize/fork)
[![Share on Twitter](https://img.shields.io/badge/🐦-Share%20on%20Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/intent/tweet?text=Check%20out%20MediVize%20-%20AI-Powered%20Medicine%20Identifier!&url=https://github.com/kyntar/medivize)

---

**Made with ❤️ by the MediVize Team**  
*Empowering Healthcare Through AI Innovation*

</div>
