import React, { useState } from 'react';
import CameraInput from '../components/ui/CameraInput';
import Button from '../components/common/Button';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ClassificationResult from '../components/drug/ClassificationResult';
import { motion } from 'framer-motion';

function ClassificationPage() { 
    const [selectedImage, setSelectedImage] = useState(null);
    const [classificationResult, setClassificationResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    const handleImageSelected = (file) => {
        setSelectedImage(file);
        setClassificationResult(null); 
        setSearchResult(null); 
        setError('');
    };

    const handleClassify = async () => {
        if (!selectedImage) {
            setError('Silakan pilih atau ambil gambar kemasan obat terlebih dahulu.');
            return;
        }

        setLoading(true);
        setError('');
        setClassificationResult(null);

        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            setClassificationResult({
                drugName: "Tidak Dikenali",
                imageUrl: URL.createObjectURL(selectedImage) 
            });

        } catch (err) {
            setError('Terjadi kesalahan saat klasifikasi. Silakan coba lagi. Pastikan gambar jelas dan kemasan obat terlihat penuh.');
            console.error('Classification error:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = async () => {
        if (!searchQuery.trim()) {
            setError('Silakan masukkan nama obat untuk mencari.');
            setSearchResult(null);
            return;
        }

        setLoading(true);
        setError('');
        setClassificationResult(null); 

        try {
            await new Promise(resolve => setTimeout(resolve, 1500));

            let foundDrug = null;
            if (searchQuery.toLowerCase().includes("paracetamol")) {
                foundDrug = {
                    drugName: "Paracetamol", 
                    dosage: "500 mg",
                    description: "Paracetamol (acetaminophen) adalah obat pereda nyeri dan penurun demam yang umum. Efektif untuk meredakan nyeri ringan hingga sedang, sakit kepala, nyeri otot, dan menurunkan demam akibat pilek atau flu.",
                    side_effects: "Umumnya aman pada dosis yang direkomendasikan. Jarang: ruam kulit, gangguan pencernaan ringan. Overdosis dapat menyebabkan kerusakan hati yang serius.",
                    usage_instructions: "Dewasa: 1-2 tablet setiap 4-6 jam jika diperlukan, tidak melebihi 8 tablet dalam 24 jam. Jangan melebihi dosis yang direkomendasikan karena dapat berbahaya bagi hati.",
                    imageUrl: "/images/paracetamol_dummy.png", 
                    drugId: "paracetamol-500mg"
                };
            } else if (searchQuery.toLowerCase().includes("ibuprofen")) {
                 foundDrug = {
                    drugName: "Ibuprofen", 
                    dosage: "200 mg",
                    description: "Ibuprofen adalah obat antiinflamasi nonsteroid (NSAID) yang digunakan untuk mengurangi demam, meredakan nyeri (seperti sakit kepala, nyeri haid, nyeri otot, nyeri sendi), dan mengurangi peradangan.",
                    side_effects: "Efek samping dapat meliputi mual, sakit perut, gangguan pencernaan, pusing. Penggunaan jangka panjang atau dosis tinggi dapat meningkatkan risiko masalah lambung dan jantung.",
                    usage_instructions: "Dewasa: 1-2 tablet setiap 4-6 jam, tidak lebih dari 6 tablet per hari, diminum setelah makan untuk mengurangi iritasi lambung. Tidak dianjurkan untuk penderita asma, tukak lambung, atau gangguan ginjal/hati tanpa konsultasi dokter.",
                    imageUrl: "/images/ibuprofen_dummy.png",
                    drugId: "ibuprofen-200mg"
                };
            } else if (searchQuery.toLowerCase().includes("amoxicillin")) {
                foundDrug = {
                    drugName: "Amoxicillin", 
                    dosage: "500 mg",
                    description: "Amoxicillin adalah antibiotik spektrum luas yang digunakan untuk mengobati berbagai infeksi bakteri, seperti infeksi saluran pernapasan, infeksi saluran kemih, dan infeksi kulit. Penting untuk menghabiskan seluruh dosis yang diresepkan.",
                    side_effects: "Efek samping umum meliputi mual, muntah, diare, dan ruam kulit. Reaksi alergi serius (anafilaksis) jarang terjadi tetapi memerlukan perhatian medis segera. Konsultasikan dengan dokter jika mengalami efek samping yang parah.",
                    usage_instructions: "Ikuti petunjuk dokter atau apoteker. Biasanya diminum 2-3 kali sehari, dengan atau tanpa makanan. Habiskan seluruh dosis yang diresepkan meskipun gejala sudah membaik untuk mencegah resistensi antibiotik.",
                    imageUrl: "/images/amoxicillin_dummy.png", 
                    drugId: "amoxicillin-500mg"
                };
            }
            
            setSearchResult(foundDrug);
            if (!foundDrug) {
                setError(`Obat dengan nama "${searchQuery}" tidak ditemukan dalam database dummy.`);
            }

        } catch (err) {
            setError('Terjadi kesalahan saat mencari obat. Silakan coba lagi.');
            console.error('Search error:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleViewDetail = (drugId) => {
        alert(`Navigasi ke detail obat dengan ID: ${drugId}`);
    };


    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="classification-page container py-8"
        >
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Temukan Informasi Obat dengan Mudah</h1>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
                Ambil foto kemasan obat Anda, atau ketik nama obat untuk mendapatkan informasi penting seperti dosis, efek samping, dan petunjuk penggunaan.
            </p>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-white p-6 rounded-lg shadow-lg mb-8"
            >
                <h2 className="text-xl font-bold text-gray-800 mb-4">Deteksi Obat dari Gambar</h2>
                <CameraInput onImageSelected={handleImageSelected} />
                {selectedImage && (
                    <p className="text-center text-sm text-gray-500 mt-4">
                        Gambar terpilih: {selectedImage.name} ({Math.round(selectedImage.size / 1024)} KB)
                    </p>
                )}
                {error && <p className="text-red-600 text-center mt-4">{error}</p>}
                <div className="flex justify-center mt-6">
                    <Button onClick={handleClassify} disabled={loading} variant="primary">
                        {loading ? <LoadingSpinner /> : 'Mulai Deteksi'}
                    </Button>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Atau Cari Obat Secara Manual</h2>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="text"
                            placeholder="Contoh: Paracetamol, Ibuprofen..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Button onClick={handleSearch} disabled={loading} variant="secondary">
                            {loading ? <LoadingSpinner /> : 'Cari'}
                        </Button>
                    </div>
                </div>
            </motion.div>

            {loading && (
                <div className="text-center mt-8">
                    <LoadingSpinner />
                    <p className="text-gray-600 mt-2">Sedang memproses...</p>
                </div>
            )}

            {(classificationResult || searchResult) && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-8"
                >
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Hasil Informasi Obat</h2>
                    <ClassificationResult 
                        result={classificationResult ? { 
                            drugName: classificationResult.drugName, 
                            imageUrl: classificationResult.imageUrl 
                        } : searchResult} 
                        onViewDetail={handleViewDetail} 
                    />
                </motion.div>
            )}
        </motion.div>
    );
}

export default ClassificationPage;