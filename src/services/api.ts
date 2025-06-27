const API_URL: string = 'http://localhost:4000';

// Interface para a resposta de login
interface LoginResponse {
  token: string;
}

// Interface para erros da API
interface ApiError {
  error: string;
}

// Função auxiliar para configurar cabeçalhos
const getHeaders = (requiresAuth: boolean = false): HeadersInit => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };
  if (requiresAuth) {
    const token = localStorage.getItem('token');
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  }
  return headers;
};

// Função para tratar respostas
const handleResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    const error: ApiError = await response.json();
    throw new Error(error.error || `Erro ${response.status}`);
  }
  return response.json();
};

// Função de login
export const login = async (email: string, password: string): Promise<LoginResponse> => {
  const response = await fetch(`${API_URL}/users/login`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({ email, password }),
  });
  return handleResponse<LoginResponse>(response);
};