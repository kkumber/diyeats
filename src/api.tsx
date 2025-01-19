import axios from 'axios';
import { useAccessTokenContext, useCSRFTokenContext } from './pages/AuthPages/AuthProvider';

const useApi = () => {
    const { accessToken } = useAccessTokenContext();
    const {csrfToken} = useCSRFTokenContext()
    
    const api = axios.create({
        baseURL: 'http://127.0.0.1:8000/',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    // Intercept the request to add the Authorization header if accessToken exists
    api.interceptors.request.use(
        (config) => {
            if (accessToken) {
                config.headers['Authorization'] = `Bearer ${accessToken}`;
            }
            if (csrfToken) {
                config.headers['X-CSRFToken'] = csrfToken;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    return api;
}

export default useApi;
