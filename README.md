# 💊 MediVize – AI-Powered Medicine Identifier

<div align="center">

**🚀 Revolutionizing Medicine Identification Through AI Technology**

[![Made with React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Powered by Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![AI Model](https://img.shields.io/badge/YOLOv11-AI%20Detection-FF6B6B?style=for-the-badge&logo=tensorflow&logoColor=white)](https://github.com/ultralytics/ultralytics)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-4285F4?style=for-the-badge&logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

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
TailwindCSS            → Utility-first CSS Framework  
React Router           → Client-side Routing
TensorFlow.js          → Browser-based ML Inference
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
git clone https://github.com/your-username/medivize.git
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
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://netlify.com/)

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

**🎓 Bangkit Academy 2024 - Capstone Project Team**

</div>

<table>
<tr>
<td align="center">
<strong>🤖 Machine Learning Path</strong>
</td>
<td align="center">
<strong>☁️ Cloud Computing Path</strong>
</td>
<td align="center">
<strong>📱 Mobile Development Path</strong>
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
☁️ *Frontend Development *

**FC189D5X0808**  
👩‍💻 **Federika Butar Butar**  
🏫 Universitas Bengkulu  
⚙️ *Backend Development*

</td>
<td>

**FC012D5Y1245**  
👨‍💻 **Kyntar Barra Langit Lubis**  
🏫 Universitas Telkom  
📱 *Backend Development*

</td>
</tr>
</table>

<div align="center">

**🌟 All Team Members: Active & Contributing**

[![Team Status](https://img.shields.io/badge/Team%20Status-All%20Active-success?style=for-the-badge)](https://github.com)
[![Contributions](https://img.shields.io/badge/Contributions-Welcome-brightgreen?style=for-the-badge)](CONTRIBUTING.md)

</div>

---

## 🤝 **Contributing**

We welcome contributions from the community! Here's how you can help:

<div align="center">

[![Issues](https://img.shields.io/github/issues/your-username/medivize?style=for-the-badge)](https://github.com/your-username/medivize/issues)
[![Pull Requests](https://img.shields.io/github/issues-pr/your-username/medivize?style=for-the-badge)](https://github.com/your-username/medivize/pulls)
[![Contributors](https://img.shields.io/github/contributors/your-username/medivize?style=for-the-badge)](https://github.com/your-username/medivize/graphs/contributors)

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

![GitHub repo size](https://img.shields.io/github/repo-size/your-username/medivize?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/your-username/medivize?style=for-the-badge)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/your-username/medivize?style=for-the-badge)

</div>

---

## 🛡️ **Security & Privacy**

- 🔒 **Secure Image Processing**: All uploaded images are processed securely and deleted after analysis
- 🔐 **Data Encryption**: User data and API communications are encrypted
- 🚫 **No Personal Data Storage**: We don't store personal information without consent
- ✅ **GDPR Compliant**: Full compliance with data protection regulations

---

## 📄 **License**

<div align="center">

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

</div>

---

## 🙏 **Acknowledgments**

<div align="center">

**Special thanks to:**

🎓 **Bangkit Academy 2024** - For providing the platform and mentorship  
🤖 **Google Cloud Platform** - For cloud infrastructure support  
🧠 **TensorFlow Team** - For the amazing ML framework  
🚀 **Open Source Community** - For the incredible tools and libraries  

</div>

---

<div align="center">

## 💫 **Join the Revolution**

**MediVize** isn't just a project—it's a step toward making healthcare technology accessible to everyone. Together, we're building a smarter, safer future for medicine identification.

### 🌟 **Show Your Support**

If you find MediVize helpful, please consider:

[![Star this repo](https://img.shields.io/badge/⭐-Star%20this%20repo-yellow?style=for-the-badge&logo=github)](https://github.com/your-username/medivize)
[![Fork this repo](https://img.shields.io/badge/🍴-Fork%20this%20repo-blue?style=for-the-badge&logo=github)](https://github.com/your-username/medivize/fork)
[![Share on Twitter](https://img.shields.io/badge/🐦-Share%20on%20Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/intent/tweet?text=Check%20out%20MediVize%20-%20AI-Powered%20Medicine%20Identifier!&url=https://github.com/your-username/medivize)

---

**Made with ❤️ by the MediVize Team**  
*Empowering Healthcare Through AI Innovation*

</div>
