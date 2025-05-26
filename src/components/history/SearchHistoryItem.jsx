import React from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

function SearchHistoryItem({ item }) {
  const date = new Date(item.timestamp);
  const formattedDate = format(date, 'dd MMMM yyyy, HH:mm');

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex justify-between items-center">
      <div>
        <p className="text-lg font-semibold text-gray-800">{item.drugName}</p>
        <p className="text-sm text-gray-500">{formattedDate}</p>
      </div>
      {item.drugId && (
        <Link to={`/drug/${item.drugId}`}>
          <Button variant="outline" className="text-sm py-1 px-3">
            Lihat Detail
          </Button>
        </Link>
      )}
    </div>
  );
}

export default SearchHistoryItem;