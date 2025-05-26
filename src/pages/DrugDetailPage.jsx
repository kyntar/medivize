import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDrugById } from '../services/drugService';
import DrugInfoCard from '../components/drug/DrugInfoCard';
import LoadingSpinner from '../components/common/LoadingSpinner';

function DrugDetailPage() {
  const { id } = useParams();
  const [drug, setDrug] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDrugDetails = async () => {
      setLoading(true);
      setError('');
      const result = await getDrugById(id);
      if (result.success) {
        setDrug(result.data);
      } else {
        setError(result.message || 'Gagal memuat detail obat.');
      }
      setLoading(false);
    };
    fetchDrugDetails();
  }, [id]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div className="text-center text-red-600 py-10">{error}</div>;
  }

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Detail Informasi Obat</h1>
      <DrugInfoCard drug={drug} />
    </div>
  );
}

export default DrugDetailPage;