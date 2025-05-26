const API_BASE_URL = 'http://localhost:8080/api'; 

export const classifyDrugImage = async (imageFile) => {
  const token = getAuthToken();
  if (!token) {
    return { success: false, message: 'Authentication required' };
  }

  const formData = new FormData();
  formData.append('image', imageFile);

  try {
    const response = await fetch(`${API_BASE_URL}/drugs/classify`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        // 'Content-Type': 'multipart/form-data' will be set automatically by FormData
      },
      body: formData,
    });

    const data = await response.json();

    if (response.ok) {
      return { success: true, data: data };
    } else {
      return { success: false, message: data.message || 'Image classification failed' };
    }
  } catch (error) {
    console.error('Image classification error:', error);
    return { success: false, message: 'Network error or server unavailable' };
  }
};

export const getDrugById = async (drugId) => {
  const token = getAuthToken();
  if (!token) {
    return { success: false, message: 'Authentication required' };
  }

  try {
    const response = await fetch(`${API_BASE_URL}/drugs/${drugId}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (response.ok) {
      return { success: true, data: data };
    } else {
      return { success: false, message: data.message || 'Failed to fetch drug details' };
    }
  } catch (error) {
    console.error('Get drug by ID error:', error);
    return { success: false, message: 'Network error or server unavailable' };
  }
};

export const searchDrugs = async (query) => {
  const token = getAuthToken();
  if (!token) {
    return { success: false, message: 'Authentication required' };
  }

  try {
    const response = await fetch(`${API_BASE_URL}/drugs/search?q=${encodeURIComponent(query)}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (response.ok) {
      return { success: true, data: data };
    } else {
      return { success: false, message: data.message || 'Drug search failed' };
    }
  } catch (error) {
    console.error('Drug search error:', error);
    return { success: false, message: 'Network error or server unavailable' };
  }
};

export const getSearchHistory = async () => {
  const token = getAuthToken();
  if (!token) {
    return { success: false, message: 'Authentication required' };
  }

  try {
    const response = await fetch(`${API_BASE_URL}/user/history`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (response.ok) {
      return { success: true, data: data };
    } else {
      return { success: false, message: data.message || 'Failed to fetch search history' };
    }
  } catch (error) {
    console.error('Get search history error:', error);
    return { success: false, message: 'Network error or server unavailable' };
  }
};