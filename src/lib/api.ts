
const BASE_URL = 'http://13.202.193.4:3000/api';

export interface Brand {
  name: string;
}

export interface CoverageFunction {
  function_name: string;
  function_type: string;
}

export interface LoginResponse {
  token: string;
  user?: unknown;
}

async function apiFetch(endpoint: string, options: RequestInit = {}) {
  const token = typeof window !== 'undefined' ? localStorage.getItem('obd_token') : null;
  
  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
    ...options.headers,
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'An error occurred' }));
    throw new Error(error.message || 'API request failed');
  }

  return response.json();
}

export const api = {
  login: (credentials: { email: string; encrypted_password: string }): Promise<LoginResponse> => 
    apiFetch('/login', { method: 'POST', body: JSON.stringify(credentials) }),
    
  signup: (data: Record<string, string>): Promise<unknown> => 
    apiFetch('/signup', { method: 'POST', body: JSON.stringify(data) }),

  fetchMakeList: async (segments: string[] = ["car", "bike", "hcv"]): Promise<Brand[]> => {
    const res = await apiFetch(`/fetch_make_list?segement=${JSON.stringify(segments)}`);
    return Array.isArray(res) ? res : (res.data || []);
  },

  fetchModelList: async (make: string): Promise<Brand[]> => {
    const res = await apiFetch(`/fetch_model_list?make=${encodeURIComponent(make)}`);
    return Array.isArray(res) ? res : (res.data || []);
  },

  fetchYearList: async (make: string, model: string): Promise<Brand[]> => {
    const res = await apiFetch(`/fetch_year_list?make=${encodeURIComponent(make)}&model=${encodeURIComponent(model)}`);
    return Array.isArray(res) ? res : (res.data || []);
  },

  fetchCoverage: (make: string, model?: string, generation?: string): Promise<{ data: CoverageFunction[] }> => {
    let url = `/fetch_coverage?make=${encodeURIComponent(make)}`;
    if (model) url += `&model=${encodeURIComponent(model)}`;
    if (generation) url += `&generation=${encodeURIComponent(generation)}`;
    return apiFetch(url);
  }
};
